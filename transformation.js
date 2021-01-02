const { identity_matrix, mul, inverse } = require('./matrix')
const S = Math.sin
const C = Math.cos

exports.transformation = class {
    constructor(M = identity_matrix) {
        this.M = M
    }
    mul = t => t instanceof exports.transformation ?
               new exports.transformation(mul(this.M, t.M)) :
               mul(this.M, t)
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

    inverse = () =>
        new exports.transformation(inverse(this.M))
}

exports.identity = () => new exports.transformation