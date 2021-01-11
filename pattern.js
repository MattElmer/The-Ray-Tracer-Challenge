exports.pattern = class {
    constructor(...colors) { this.colors = colors }
    pattern_at_shape() {}
}

exports.stripe_pattern = class extends exports.pattern {
    constructor(...colors) {
        super(...colors)
        this.a = colors[0]; this.b = colors[1]
    }
    stripe_at = p => this.colors[Math.abs(Math.floor(p.x)) % 2]
}