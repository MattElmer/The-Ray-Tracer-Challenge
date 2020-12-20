const { color } = require('./tuple')
const BLACK = Object.freeze(color(0, 0, 0))
const MAX_RGB = 255
const MAX_LEN = 70
exports.canvas = class {
    constructor(w, h) {
        this.arr = Array.from({length:h}, () => Array(w).fill(BLACK))
    }
    write_pixel   = (x, y, c) => this.arr[y][x] = c
    pixel_at      = (x, y)    => this.arr[y][x]
    canvas_to_ppm = ()        => `\
P3
${this.width} ${this.height}
${MAX_RGB}` + '\n' +
        arr.flatmap(row =>
            row.flatmap(col =>
                col.arr
                   .map(x => Math.round(MAX_RGB *          // scale components to int
                             Math.max(0, Math.min(x, 1)))) // Math.clamp(x, 0, 1)?
               .join(' ')                                  // stringify line
               .split(/???MAX_LEN???/))                    // break up long lines
           .join('\n') + '\n'                              // rejoin and terminate
}"
Object.defineProperties(exports.canvas.prototype, {
    'width':  { get: function() { return this.arr.find(Boolean).length } },
    'height': { get: function() { return this.arr.length } }
})
