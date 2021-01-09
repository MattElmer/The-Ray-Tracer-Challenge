const { identity } = require('./transformation')
const { material } = require('./lighting')
const { transform } = require('./ray')
const { vector, normalize } = require('./tuple')

exports.shape = class {
    constructor() { 
        this.transform = identity()
        this.material = new material
    }
    intersect = r => this.local_intersect(transform(r, this.transform.inverse()))
    normal_at = p => normalize(vector(...this.transform.inverse().transpose().mul(this.local_normal_at(this.transform.inverse().mul(p))).arr))
    local_intersect(r) { throw new TypeError('abstract method') }
    local_normal_at(r) { throw new TypeError('abstract method') }
}
exports.test_shape = class extends exports.shape { 
    constructor() {
        super()
    }
    local_intersect(r) { this.saved_ray = r }
    local_normal_at = p => vector(...p.arr)
}

exports.set_transform = (s, t) => s.transform = t