const tuple = require('./tuple')
const BLACK = tuple.color(0, 0, 0)
exports.canvas = class {
    constructor(w, h) {
        this.arr = Array.from({length:h}, () => Array(w).fill(BLACK))
    }
    write_pixel   = (x, y, c) => this.arr[y][x] = c
    pixel_at      = (x, y)    => this.arr[y][x]
    canvas_to_ppm = ()        => `P3\n${this.width} ${this.height}\n255\n`
}
Object.defineProperties(exports.canvas.prototype, {
    'width':  { get: function() { return this.arr[0].length } },
    'height': { get: function() { return this.arr.length } }
})