const { neg, dot } = require('./tuple')
const { direction } = require('./ray')
const sphere = require('./sphere')

exports.intersection = (t, s) => {
    return { t:t, object:s, valueOf:function() { return this.t } }
}

exports.intersections = (...xs) => xs.sort((a, b) => a - b)

exports.hit = xs => xs[xs.findIndex(x => x > 0)]

exports.prepare_computations = (i, r) => {
    let comps     = { t:i.t, object:i.object }
    comps.point   = r(comps.t)
    comps.eyev    = neg(direction(r))
    comps.normalv = sphere.normal_at(comps.object, comps.point)
    comps.inside  = dot(comps.normalv, comps.eyev) < 0
    if (comps.inside) comps.normalv = neg(comps.normalv)
    return comps
}