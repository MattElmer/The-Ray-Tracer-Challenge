const { color, mul } = require('./tuple')
const BLACK = Object.freeze(color(0, 0, 0))
const MAX_RGB = 255
const HEADER = `\
P3
${this.width} ${this.height}
${MAX_RGB}
`
const MAX_LEN = 70
exports.canvas = class {
    constructor(w, h) {
        this.arr = Array.from({length:h}, () => Array(w).fill(BLACK))
    }
    write_pixel   = (x, y, c) => this.arr[y][x] = c
    pixel_at      = (x, y)    => this.arr[y][x]
    canvas_to_ppm = ()        => HEADER // + arr.flatmap(row =>
                                        //      row.flatmap(col =>
                                        //          mul(col, MAX_RGB).arr))
                                        //      .join(' ')
                                        //      .split(???)
                                        //      .join('\n') + '\n'
}
Object.defineProperties(exports.canvas.prototype, {
    'width':  { get: function() { return this.arr.find(Boolean).length } },
    'height': { get: function() { return this.arr.length } }
})
