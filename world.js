const { scaling } = require('./transformation')
const { material, point_light, lighting } = require('./lighting')
const { color, point, magnitude, normalize, sub, mul, add, BLACK, WHITE } = require('./tuple')
const { sphere } = require('./sphere')
const { intersections, prepare_computations, hit } = require('./intersection')
const { ray } = require('./ray')

exports.world = class { constructor() {} }

exports.default_world = class extends exports.world {
    constructor() {
        super()
        let m = new material
        m.color = color(0.8, 1, 0.6)
        m.diffuse = 0.7
        m.specular = 0.2
        let s1 = new sphere
        let s2 = new sphere
        s1.material = m
        s2.transform = scaling(0.5, 0.5, 0.5)
        this.objects = [s1, s2]
        this.light = new point_light(point(-10, 10, -10), WHITE)
    }
}

exports.intersect_world = (w, r) => intersections(...w.objects.flatMap(o => o.intersect(r)))

const MAX_RECURSION = 5

exports.shade_hit = (w, comps, n = MAX_RECURSION) => add(lighting(comps.object.material,
                                                                  comps.object, w.light,
                                                                  comps.point,
                                                                  comps.eyev,
                                                                  comps.normalv,
                                                                  exports.is_shadowed(w, comps.over_point)),
                                                         exports.reflected_color(w, comps, n))

exports.color_at = (w, r, n = MAX_RECURSION) => {
    let    h = hit(exports.intersect_world(w, r))
    return h ? exports.shade_hit(w, prepare_computations(h, r), n)
             : BLACK
}
exports.is_shadowed = (w, p) => {
    let    h = hit(exports.intersect_world(w, ray(p, normalize(sub(w.light.position, p)))))
    return h && h.t < magnitude(sub(w.light.position, p))
}
exports.reflected_color = (w, comps, n = MAX_RECURSION) => {
    let    r = comps.object.material.reflective
    return r && n ? mul(exports.color_at(w, ray(comps.over_point, comps.reflectv), n - 1), r)
                  : BLACK
}
