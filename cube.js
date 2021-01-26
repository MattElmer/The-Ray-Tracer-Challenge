const { shape } = require('./shape')
const { origin, direction } = require('./ray')
const { intersection } = require('./intersection')
const { vector } = require('./tuple')
const _ = require('lodash')

exports.cube = class extends shape {
    constructor() {
        super()
    }
    local_intersect = r =>
        ([_.zipWith(origin(r).arr, direction(r).arr, (o, d) =>   // pair ray origin and direction coordinates by axis
            [-1, 1].map(x => (x - o) / d)                        // find both intersections in t
                   .sort((a, b) => a - b))                       // make sure smaller is first
           .slice(0, 3)                                          // ignore w
           .reduce(([tmin1, tmax1], [tmin2, tmax2]) =>
               [Math.max(tmin1, tmin2), Math.min(tmax1, tmax2)]) // find max of min and vice versa
         ].find(([tmin, tmax]) => tmin < tmax) || [])            // discard if min exceeds max
             .map(t => intersection(t, this))

    local_normal_at = p => {
        p = p.arr.slice(0, 3)
        let a = p.map(Math.abs)
        let i = a.indexOf(Math.max(...a))
        let n = vector(0, 0, 0)
        n.arr[i] = p[i]
        return n
    }
}
exports.default = exports.cube