const { add, sub, mul } = require('./tuple')

exports.ray = (p, v) => t => add(p, mul(v, t))

exports.origin = r => r(0)

exports.direction = r => sub(r(1), r(0))

exports.transform = (r, m) => exports.ray(m.mul(exports.origin(r)), m.mul(exports.direction(r)))