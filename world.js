const { scaling } = require('./transformation')
const { material, point_light, lighting } = require('./lighting')
const { color, point, magnitude, normalize, sub, mul, add, BLACK, WHITE, dot } = require('./tuple')
const { sphere } = require('./sphere')
const { intersections, prepare_computations, hit } = require('./intersection')
const { ray } = require('./ray')
const MAX_RECURSION = 5

exports.world = class {
    constructor() {}

    intersect_world = r => intersections(...this.objects.flatMap(o => o.intersect(r)))

    //MAX_RECURSION = 5

    color_at = (r, n = MAX_RECURSION) => {
        let xs, h = hit(xs = this.intersect_world(r))
        return  h ? this.shade_hit(prepare_computations(h, r, xs), n)
                  : BLACK
    }
    reflected_color = (comps, n = MAX_RECURSION) => {
        let    a = comps.object.material.reflective
        return a && n ? mul(this.color_at(ray(comps.over_point, comps.reflectv), n - 1), a)
                      : BLACK
    }
    refracted_color = (comps, n = MAX_RECURSION) => {
        let ratio, cos_i, sin2_t = (ratio = comps.n1 / comps.n2) ** 2 * (1 - (cos_i = dot(comps.eyev, comps.normalv)) ** 2)
        let cos_t = Math.sqrt(1 - sin2_t)
        let a = comps.object.material.transparency
        return a && n && sin2_t <= 1 ? mul(this.color_at(ray(comps.under_point, sub(mul(comps.normalv, ratio * cos_i - cos_t), mul(comps.eyev, ratio))), n - 1), a)
                                     : BLACK
    }
    is_shadowed = p => {
        let lv, h = hit(this.intersect_world(ray(p, normalize(lv = sub(this.light.position, p)))))
        return  h && h.t < magnitude(lv)
    }
    shade_hit = (comps, n = MAX_RECURSION) => [lighting(comps.object.material,
                                                        comps.object, this.light,
                                                        comps.point,
                                                        comps.eyev,
                                                        comps.normalv,
                                                        this.is_shadowed(comps.over_point)),
                                               this.reflected_color(comps, n),
                                               this.refracted_color(comps, n)].reduce(add)
}
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
exports.intersect_world = (w, r) => w.intersect_world(r)
exports.shade_hit = (w, comps, n = MAX_RECURSION) => w.shade_hit(comps, n)
exports.color_at = (w, r, n = MAX_RECURSION) => w.color_at(r, n)
exports.is_shadowed = (w, p) =>  w.is_shadowed(p)
exports.reflected_color = (w, comps, n = MAX_RECURSION) => w.reflected_color(comps, n)