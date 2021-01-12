const { identity } = require('./transformation')
const { color } = require('./tuple')

exports.pattern = class {
    constructor() { this.transform = identity() }
    pattern_at_shape = (s, p) => this.pattern_at(this.transform.inverse().mul(s.transform.inverse().mul(p)))
    pattern_at(p) { throw new TypeError('abstract method') }
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