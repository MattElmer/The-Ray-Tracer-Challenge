const { identity } = require('./transformation')
const { material } = require('./lighting')
const { transform } = require('./ray')
const { vector, normalize } = require('./tuple')
const { abstract } = require('./utility')

exports.shape = class extends abstract {
    constructor() { 
        super('shape')
        this.transform = identity()
        this.material = new material
    }
    local_intersect() { super.unimplemented() }
    local_normal_at() { super.unimplemented() }
    set_transform = t => this.transform = t
    intersect = r => this.local_intersect(transform(r, this.transform.inverse()))
    normal_at = p => normalize(vector(...this.transform.inverse().transpose().mul(this.local_normal_at(this.transform.inverse().mul(p))).arr))
}
exports.test_shape = class extends exports.shape { 
    constructor() {
        super()
    }
    local_intersect(r) { this.saved_ray = r }
    local_normal_at = p => vector(...p.arr)
}
exports.set_transform = (s, t) => s.set_transform(t)