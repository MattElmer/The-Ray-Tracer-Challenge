const { scaling } = require('./transformation')
const { material, point_light, lighting } = require('./lighting')
const { color, point, magnitude, normalize, sub, mul, add, BLACK, WHITE, dot } = require('./tuple')
const { sphere } = require('./sphere')
const { intersections, prepare_computations, hit, schlick } = require('./intersection')
const { ray } = require('./ray')
const MAX_RECURSION = 5

exports.world = class {
    constructor() {}

    intersect_world = r => intersections(...this.objects.flatMap(o => o.intersect(r)))

    //MAX_RECURSION = 5

    color_at = (r, rem = MAX_RECURSION) => {
        let xs = this.intersect_world(r)
        let h  = hit(xs)
        return h ? this.shade_hit(prepare_computations(h, r, xs), rem)
                 : BLACK
    }
    reflected_color = (comps, rem = MAX_RECURSION) => {
        let a = comps.object.material.reflective
        return a && rem ? mul(this.color_at(ray(comps.over_point, comps.reflectv), rem - 1), a)
                        : BLACK
    }
    refracted_color = (comps, rem = MAX_RECURSION) => {
        let n_ratio = comps.n1 / comps.n2
        let cos_i   = dot(comps.eyev, comps.normalv)
        let sin2_t  = n_ratio ** 2 * (1 - cos_i ** 2)
        let cos_t   = Math.sqrt(1 - sin2_t)
        let a       = comps.object.material.transparency
        return a && rem && sin2_t <= 1 ? mul(this.color_at(ray(comps.under_point, sub(mul(comps.normalv, n_ratio * cos_i - cos_t), mul(comps.eyev, n_ratio))), rem - 1), a)
                                       : BLACK
    }
    is_shadowed = p => {
        let lv = sub(this.light.position, p)
        let h  = hit(this.intersect_world(ray(p, normalize(lv))))
        return h && h.t < magnitude(lv)
    }
    shade_hit = (comps, rem = MAX_RECURSION) => (r =>
        [lighting(comps.object.material,
                  comps.object, this.light,
                  comps.point,
                  comps.eyev,
                  comps.normalv,
                  this.is_shadowed(comps.over_point)),
         mul(this.reflected_color(comps, rem), comps.object.material.transparency ?     r : 1),
         mul(this.refracted_color(comps, rem), comps.object.material.reflective   ? 1 - r : 1)])(schlick(comps)).reduce(add)
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
exports.shade_hit = (w, comps, rem = MAX_RECURSION) => w.shade_hit(comps, rem)
exports.color_at = (w, r, rem = MAX_RECURSION) => w.color_at(r, rem)
exports.is_shadowed = (w, p) =>  w.is_shadowed(p)
exports.reflected_color = (w, comps, rem = MAX_RECURSION) => w.reflected_color(comps, rem)