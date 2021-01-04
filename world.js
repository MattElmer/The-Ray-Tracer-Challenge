const { equal } = require('./utility')
const { scaling } = require('./transformation')
const { material, point_light, lighting } = require('./lighting')
const { color, point } = require('./tuple')
const { sphere, intersect } = require('./sphere')
const { intersections, prepare_computations, hit } = require('./intersection')

exports.world = class { constructor() {} }

exports.default_world = class extends exports.world {
    constructor() {
        super()
        let m = new material
        m.color = color(0.8, 1, 0.6)
        m.diffuse = 0.7
        m.specular = 0.2
        let s1 = new sphere
        let s2 = new sphere
        s1.material = m
        s2.transform = scaling(0.5, 0.5, 0.5)
        this.objects = [s1, s2]
        this.light = new point_light(point(-10, 10, -10), color(1, 1, 1))
    }  
}

exports.intersect_world = (w, r) => intersections(...w.objects.flatMap(o => intersect(o, r)))

exports.shade_hit = (w, comps) => lighting(comps.object.material, w.light, comps.point, comps.eyev, comps.normalv)

exports.color_at = (w, r) => 
    (h => h ? exports.shade_hit(w, prepare_computations(h, r)) : color())
        (hit(exports.intersect_world(w, r)))