const _ = require('lodash')

const EPSILON = 0.00001

exports.equal = (a, b) =>
    _.isEqualWith(a, b, (c1, c2) =>
        isFinite(c1) && isFinite(c2) ? Math.abs(c1 - c2) < EPSILON : undefined)