const { equal } = require('./utility')
const { identity } = require('./transformation')
const { material, point_light } = require('./lighting')
const { color, point } = require('./tuple')
const { sphere, intersect } = require('./sphere')
const { intersections } = require('./intersection')

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
        s2.transform = identity().scaling(0.5, 0.5, 0.5)
        this.objects = [s1, s2]
        this.light = new point_light(point(-10, 10, -10), color(1, 1, 1))
    }  
}

exports.intersect_world = (w, r) =>
    intersections(...w.objects.flatMap(o => intersect(o, r)))