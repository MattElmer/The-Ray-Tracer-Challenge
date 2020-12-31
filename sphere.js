const { dot, point, sub, normalize, vector } = require('./tuple')
const { transform, origin, direction } = require('./ray')
const { intersection } = require('./intersection')
const { transformation } = require('./transformation')
const { transpose, mul, submatrix, inverse } = require('./matrix')
const { material } = require('./lighting')

exports.sphere = class {
    constructor() {
        this.transform = new transformation()
        this.material = new material()
    }
}

exports.intersect = (s, r) => {
    r = transform(r, s.transform.inverse())
    sphere_to_ray = sub(origin(r), point(0, 0, 0))
    a = dot(direction(r), direction(r))
    b = 2 * dot(direction(r), sphere_to_ray)
    c = dot(sphere_to_ray, sphere_to_ray) - 1
    d = b ** 2 - 4 * a * c
    return d < 0 ? [] : [-1, 1].map(sgn => intersection((-b + sgn * Math.sqrt(d)) / (2 * a), s))
}

exports.set_transform = (s, t) => s.transform = t

exports.normal_at = (s, p) => {
    let M = s.transform.M
    return normalize(vector(...mul(transpose(inverse(submatrix(M, 3, 3))),
                                   sub(mul(inverse(M), p), point(0, 0, 0)))
                              .arr))
}