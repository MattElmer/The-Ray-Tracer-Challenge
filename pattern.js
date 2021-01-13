const { identity } = require('./transformation')
const { color, add, mul, sub } = require('./tuple')
const { abstract } = require('./utility')
const { rotation_y, rotation_z } = require('./transformation')

exports.pattern = class extends abstract {
    constructor() { super('pattern'); this.transform = identity() }
    pattern_at_shape = (s, p) => this.pattern_at(this.transform.inverse().mul(s.transform.inverse().mul(p)))
    pattern_at(p) { super.unimplemented() }
    set_transform(t) { this.transform = t }
}
exports.test_pattern = class extends exports.pattern {
    constructor() { super() }
    pattern_at = p => color(...p.arr)
}
exports.stripe_pattern = class extends exports.pattern {
    constructor(a, b) { super(); this.a = a; this.b = b }
    pattern_at = p => [this.a, this.b][Math.abs(Math.floor(p.x)) % 2]
    stripe_at = this.pattern_at
    stripe_at_object = this.pattern_at_shape
}
exports.gradient_pattern = class extends exports.pattern {
    constructor(a, b) { super(); this.a = a; this.b = b }
    pattern_at = p => add(this.a, mul(sub(this.b, this.a), p.x - Math.floor(p.x)))
}
exports.ring_pattern = class extends exports.pattern {
    constructor(a, b) { super(); this.a = a; this.b = b }
    pattern_at = p => [this.a, this.b][Math.floor(Math.sqrt(p.x**2 + p.z**2)) % 2]
}
exports.checkers_pattern = class extends exports.pattern {
    constructor(a, b) { super(); this.a = a; this.b = b }
    pattern_at = p => [this.a, this.b][Math.abs(p.arr.slice(0, 3).map(Math.floor).reduce((x, y) => x + y)) % 2]
}