const matrix = require('./matrix')
const _ = require('lodash')
const S = Math.sin
const C = Math.cos

exports.transformation = class {
    constructor(M = matrix.IDENTITY) {
        this.M = M
    }
    mul = M => (r => _.isArray(r) ? new exports.transformation(r) : r)(matrix.mul(this.M, M))
    translation = (x, y, z) =>
        new exports.transformation([[1, 0, 0, x],
                                    [0, 1, 0, y],
                                    [0, 0, 1, z],
                                    [0, 0, 0, 1]]).mul(this.M)
    scaling = (x, y, z) =>
        new exports.transformation([[x, 0, 0, 0],
                                    [0, y, 0, 0],
                                    [0, 0, z, 0],
                                    [0, 0, 0, 1]]).mul(this.M)

    rotation_x = r =>
        new exports.transformation([[1, 0,     0,    0],
                                    [0, C(r), -S(r), 0],
                                    [0, S(r),  C(r), 0],
                                    [0, 0,     0,    1]]).mul(this.M)

    rotation_y = r =>
        new exports.transformation([[ C(r), 0, S(r), 0],
                                    [ 0,    1, 0,    0],
                                    [-S(r), 0, C(r), 0],
                                    [ 0,    0, 0,    1]]).mul(this.M)

    rotation_z = r =>
        new exports.transformation([[C(r), -S(r), 0, 0],
                                    [S(r),  C(r), 0, 0],
                                    [0,     0,    1, 0],
                                    [0,     0,    0, 1]]).mul(this.M)

    shearing = (x_y, x_z, y_x, y_z, z_x, z_y) =>
        new exports.transformation([[ 1,  x_y, x_z, 0],
                                    [y_x,  1,  y_z, 0],
                                    [z_x, z_y,  1,  0],
                                    [ 0,   0,   0,  1]]).mul(this.M)

    inverse = () =>
        new exports.transformation(matrix.inverse(this.M))
}