const _ = require('lodash')

const EPSILON = 0.0001; exports.EPSILON = EPSILON

exports.equal = (a, b) =>
    _.isEqualWith(a.valueOf(), b.valueOf(), (c1, c2) =>
        _.isFunction(c1) && _.isFunction(c2) ||
           (isFinite(c1) &&     isFinite(c2) ?
            Math.abs(c1 - c2) < EPSILON : undefined))

exports.abstract = class {
    constructor(derived) { if([exports.abstract, derived].includes(this.constructor)) throw new TypeError('abstract class') }
    unimplemented() { throw new TypeError('abstract method') }
}

exports.using = x => { return { as:function(f) { return f(x) } } }
