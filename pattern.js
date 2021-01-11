const { identity } = require('./transformation')

exports.pattern = class {
    constructor(...colors) { this.colors = colors; this.transform = identity() }
    pattern_at_shape() {}
    set_transform(t) { this.transform = t }
}

exports.stripe_pattern = class extends exports.pattern {
    constructor(...colors) {
        super(...colors)
        this.a = colors[0]; this.b = colors[1]
    }
    stripe_at = p => this.colors[Math.abs(Math.floor(p.x)) % 2]
    stripe_at_object = (o, p) => this.stripe_at(this.transform.inverse().mul(o.transform.inverse().mul(p)))
}