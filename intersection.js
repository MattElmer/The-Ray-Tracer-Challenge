const { neg, dot, add, mul, reflect } = require('./tuple')
const { direction } = require('./ray')
const { EPSILON } = require('./utility')

exports.intersection = (t, s) => {
    return { t:t, object:s, valueOf:function() { return this.t } }
}

exports.intersections = (...xs) => xs.sort((a, b) => a - b)

exports.hit = xs => xs[xs.findIndex(x => x > 0)]

exports.prepare_computations = (i, r) => {
       let comps            = { t:i.t, object:i.object }
           comps.point      = r(comps.t)
           comps.eyev       = neg(direction(r))
           comps.normalv    = comps.object.normal_at(comps.point)
       if (comps.inside     = dot(comps.normalv, comps.eyev) < 0)
         { comps.normalv    = neg(comps.normalv) }
           comps.over_point = add(comps.point, mul(comps.normalv, EPSILON))
           comps.reflectv   = reflect(direction(r), comps.normalv)
    return comps
}
