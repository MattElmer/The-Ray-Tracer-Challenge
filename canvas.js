const tuple = require('./tuple')
const os = require('os')
const BLACK = tuple.color(0, 0, 0)
const MAX_RGB = 255
exports.canvas = class {
    constructor(w, h) {
        this.arr = Array.from({length:h}, () => Array(w).fill(BLACK))
    }
    write_pixel   = (x, y, c) => this.arr[y][x] = c
    pixel_at      = (x, y)    => this.arr[y][x]
    canvas_to_ppm = ()        => `P3${os.EOL}${this.width} ${this.height}${os.EOL}${MAX_RGB}${os.EOL}`
}
Object.defineProperties(exports.canvas.prototype, {
    'width':  { get: function() { return this.find(Boolean).length } },
    'height': { get: function() { return this.arr.length } }
})
