const { identity_matrix, mul, inverse, transpose } = require('./matrix')
const { normalize, cross, sub } = require('./tuple')
const S = Math.sin
const C = Math.cos

exports.transformation = class {
    constructor(M = identity_matrix) {
        this.M = M
    }
    mul = t => t instanceof exports.transformation ?
               new exports.transformation(mul(this.M, t.M)) :
               mul(this.M, t)
    valueOf = function() { return this.M }
    translation = (x, y, z) =>
        new exports.transformation([[1, 0, 0, x],
                                    [0, 1, 0, y],
                                    [0, 0, 1, z],
                                    [0, 0, 0, 1]]).mul(this)
    scaling = (x, y, z) =>
        new exports.transformation([[x, 0, 0, 0],
                                    [0, y, 0, 0],
                                    [0, 0, z, 0],
                                    [0, 0, 0, 1]]).mul(this)
    rotation_x = r =>
        new exports.transformation([[1, 0,     0,    0],
                                    [0, C(r), -S(r), 0],
                                    [0, S(r),  C(r), 0],
                                    [0, 0,     0,    1]]).mul(this)
    rotation_y = r =>
        new exports.transformation([[ C(r), 0, S(r), 0],
                                    [ 0,    1, 0,    0],
                                    [-S(r), 0, C(r), 0],
                                    [ 0,    0, 0,    1]]).mul(this)
    rotation_z = r =>
        new exports.transformation([[C(r), -S(r), 0, 0],
                                    [S(r),  C(r), 0, 0],
                                    [0,     0,    1, 0],
                                    [0,     0,    0, 1]]).mul(this)
    shearing = (x_y, x_z,
                y_x, y_z,
                z_x, z_y) =>
        new exports.transformation([[ 1,  x_y, x_z, 0],
                                    [y_x,  1,  y_z, 0],
                                    [z_x, z_y,  1,  0],
                                    [ 0,   0,   0,  1]]).mul(this)
    view_transformation = (from, to, up) => {
        let forward = normalize(sub(to, from))
        let    left = cross(forward, normalize(up))
                 up = cross(left, forward)
        return new exports.transformation([[    left.x,     left.y,     left.z, 0],
                                           [      up.x,       up.y,       up.z, 0],
                                           [-forward.x, -forward.y, -forward.z, 0],
                                           [         0,          0,          0, 1]])
                          .mul(this.translation(-from.x, -from.y, -from.z))
    }
    inverse = () => new exports.transformation(inverse(this.M))
    transpose = () => new  exports.transformation(transpose(this.M))
}
exports.identity = () => new exports.transformation

exports.translation = (...args) => exports.identity().translation(...args)

exports.scaling = (...args) => exports.identity().scaling(...args)

exports.rotation_x = (...args) => exports.identity().rotation_x(...args)

exports.rotation_y = (...args) => exports.identity().rotation_y(...args)

exports.rotation_z = (...args) => exports.identity().rotation_z(...args)

exports.shearing = (...args) => exports.identity().shearing(...args)

exports.view_transformation = (...args) => exports.identity().view_transformation(...args)

// templatize with computed method names?