const { dot, point, sub } = require('./tuple')
const ray = require('./ray')
const { intersection } = require('./intersection')
const { transformation } = require('./transformation')

exports.sphere = class {
    constructor() {
        this.transform = new transformation()
    }
}

exports.intersect = (s, r) => {
    r = ray.transform(r, s.transform.inverse())
    sphere_to_ray = sub(ray.origin(r), point(0, 0, 0))
    a = dot(ray.direction(r), ray.direction(r))
    b = 2 * dot(ray.direction(r), sphere_to_ray)
    c = dot(sphere_to_ray, sphere_to_ray) - 1
    d = b ** 2 - 4 * a * c
    return d < 0 ? [] : [-1, 1].map(sgn => intersection((-b + sgn * Math.sqrt(d)) / (2 * a), s))
}

exports.set_transform = (s, t) => s.transform = t