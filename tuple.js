const _ = require('lodash')

exports.tuple = class extends Array {
    constructor(...args) {
        // let [fn, n] = args
        // if (_.isFunction(fn)) {
        //     args = []
        //     while (init) {
        //         args.push(fn())
        //     }
        // }
        super(...args)
        this.arr = this
    }
    static tuple = (...args) => new tuple(...args)
}

Object.defineProperties(exports.tuple.prototype, {
    'x'    : { get: function() { return this[0] }, set: function(val) { this[0] = val } },
    'red'  : { get: function() { return this[0] }, set: function(val) { this[0] = val } },
    'y'    : { get: function() { return this[1] }, set: function(val) { this[1] = val } },
    'green': { get: function() { return this[1] }, set: function(val) { this[1] = val } },
    'z'    : { get: function() { return this[2] }, set: function(val) { this[2] = val } },
    'blue' : { get: function() { return this[2] }, set: function(val) { this[2] = val } },
    'w'    : { get: function() { return this[3] }, set: function(val) { this[3] = val } }
})

const POINT_W = 1; exports.POINT_W = POINT_W

exports.point = (x, y, z) => new exports.tuple(x, y, z, POINT_W)

const VECTOR_W = 0; exports.VECTOR_W = VECTOR_W

exports.vector = (x, y, z) => new exports.tuple(x, y, z, VECTOR_W)

exports.add = (a1, a2) => new exports.tuple(..._.zipWith(a1, a2, _.add))

exports.sub = (a1, a2) => new exports.tuple(..._.zipWith(a1, a2, _.subtract))

exports.neg = a => exports.sub(NULL, a)

exports.mul = (t, s) => new exports.tuple(..._.zipWith(t, _.isNumber(s) ? _.times(t.length, _.constant(s)) : s, _.multiply))

exports.div = (t, s) => exports.mul(t, 1 / s)

exports.dot = (a, b) => _.sum(exports.mul(a, b))

exports.magnitude = v => Math.sqrt(exports.dot(v, v))

exports.normalize = v => exports.div(v, exports.magnitude(v))

exports.cross = (a, b) => exports.vector(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x)

exports.color = (r=0, g=0, b=0) => new exports.tuple(r, g, b)

exports.reflect = (v, n) => exports.sub(v, exports.mul(n, 2 * exports.dot(v, n)))

const BLACK  = Object.freeze(exports.color (0, 0, 0)); exports.BLACK  = BLACK
const WHITE  = Object.freeze(exports.color (1, 1, 1)); exports.WHITE  = WHITE
const ORIGIN = Object.freeze(exports.point (0, 0, 0)); exports.ORIGIN = ORIGIN
const NULL   = Object.freeze(exports.vector(0, 0, 0)); exports.NULL   = NULL

exports.default = exports.tuple