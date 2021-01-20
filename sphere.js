const { dot, point, sub, normalize, vector } = require('./tuple')
const { transform, origin, direction } = require('./ray')
const { intersection } = require('./intersection')
const { shape } = require('./shape')

exports.sphere = class extends shape {
    constructor() {
        super()
    }
    local_intersect(r) {
        let sphere_to_ray = sub(origin(r), point(0, 0, 0))
        let a = dot(direction(r), direction(r))
        let b = 2 * dot(direction(r), sphere_to_ray)
        let c = dot(sphere_to_ray, sphere_to_ray) - 1
        let d = b ** 2 - 4 * a * c
        return d < 0 ? [] : [-1, 1].map(sgn => intersection((-b + sgn * Math.sqrt(d)) / (2 * a), this))
    }
    local_normal_at = p => sub(p, point(0, 0, 0))
}
exports.intersect = (s, r) => s.intersect(r)

exports.set_transform = (s, t) => s.transform = t

exports.normal_at = (s, p) => s.normal_at(p)

exports.glass_sphere = class extends exports.sphere {
    constructor() {
        super()
        this.material.transparency = 1
        this.material.refractive_index = 1.5
    }
}
exports.default = exports.sphere