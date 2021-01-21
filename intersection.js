const { neg, dot, add, mul, reflect, sub } = require('./tuple')
const { direction } = require('./ray')
const { EPSILON } = require('./utility')

exports.intersection = (t, s) => { return { t:t, object:s, valueOf:function() { return this.t } } }

exports.intersections = (...xs) => xs.sort((a, b) => a - b)

exports.hit = xs => xs[xs.findIndex(x => x > 0)]

exports.prepare_computations = (h, r, xs = [h]) => {
                   let comps             = { t:h.t, object:h.object }
                       comps.point       = r(comps.t)
                       comps.eyev        = neg(direction(r))
                       comps.normalv     = comps.object.normal_at(comps.point)
                   if (comps.inside      = dot(comps.normalv, comps.eyev) < 0)
                     { comps.normalv     = neg(comps.normalv) }
                       comps.over_point  = add(comps.point, mul(comps.normalv, EPSILON))
                       comps.under_point = sub(comps.point, mul(comps.normalv, EPSILON))            
                       comps.reflectv    = reflect(direction(r), comps.normalv)
    let cont = []
    for (x of xs) {
        if (x === h) { comps.n1 = cont.length ? cont.slice(-1)[0].material.refractive_index : 1 }
        let i
        if ((i = cont.indexOf(x.object)) != -1) cont.splice(i, 1)
        else                                    cont.push(x.object)
        if (x === h) { comps.n2 = cont.length ? cont.slice(-1)[0].material.refractive_index : 1; break }
    }
                return comps
}

exports.schlick = comps => {
//   # find the cosine of the angle between the eye and normal vectors
   let cos = dot(comps.eyev, comps.normalv)

//   # total internal reflection can only occur if n1 > n2
   if (comps.n1 > comps.n2) {
     n = comps.n1 / comps.n2
     sin2_t = n**2 * (1.0 - cos**2)
     if (sin2_t > 1.0) return 1.0

//     # compute cosine of theta_t using trig identity
     let cos_t = Math.sqrt(1.0 - sin2_t)

//     # when n1 > n2, use cos(theta_t) instead
     cos = cos_t
   }
//   end if

   let r0 = ((comps.n1 - comps.n2) / (comps.n1 + comps.n2))**2
   return r0 + (1 - r0) * (1 - cos)**5
// end function
}
