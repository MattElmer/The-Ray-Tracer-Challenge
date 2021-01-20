const { shape } = require('./shape')
const { vector } = require('./tuple')
const { origin, direction } = require('./ray')
const { EPSILON } = require('./utility')
const { intersection } = require('./intersection')

exports.plane = class extends shape {
    constructor() {
        super()
    }
    local_intersect = r => Math.abs(direction(r).y) < EPSILON ? [] : [ intersection(-origin(r).y / direction(r).y, this) ]
    local_normal_at = p => vector(0, 1, 0)
}
exports.default = exports.plane