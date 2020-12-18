const tuple = require('./tuple')
const BLACK = tuple.color(0, 0, 0)
const MAX_RGB = 255
const HEADER = `\
P3
${this.width} ${this.height}
${MAX_RGB}
`
exports.canvas = class {
    constructor(w, h) {
        this.arr = Array.from({length:h}, () => Array(w).fill(BLACK))
    }
    write_pixel   = (x, y, c) => this.arr[y][x] = c
    pixel_at      = (x, y)    => this.arr[y][x]
    canvas_to_ppm = ()        => HEADER
}
Object.defineProperties(exports.canvas.prototype, {
    'width':  { get: function() { return this.arr.find(Boolean).length } },
    'height': { get: function() { return this.arr.length } }
})
