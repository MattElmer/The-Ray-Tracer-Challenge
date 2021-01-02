const { equal } = require('./utility')
const { identity } = require('./transformation')

exports.world = class { constructor() {} }

exports.default_world = class extends exports.world {
    constructor() {
        super()
        m = new material
        m.color = color(8, 1, 6)
        m.diffuse = 0.7
        m.specular = 0.2
        s1, s2 = new sphere, new sphere
        s1.material = m
        s2.transform = identity().scaling(0.5, 0.5, 0.5)
        this.objects = [s1, s2]
        this.light = new point_light(point(-10, 10, -10), color(1, 1, 1))
    }  
}