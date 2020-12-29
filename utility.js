const _ = require('lodash')

const EPSILON = 0.00001

exports.equal = (a, b) =>
    _.isEqualWith(a, b, (c1, c2) =>
        _.isNumber(c1) && _.isNumber(c2) ? Math.abs(c1 - c2) < EPSILON : undefined)