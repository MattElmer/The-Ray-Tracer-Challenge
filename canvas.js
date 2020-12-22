const { color } = require('./tuple')
const MAX_RGB = 255
const MAX_LEN = 70
exports.canvas = class {
    constructor(w, h) {
        this.arr = Array.from({length:h}, () => Array.from({length:w}, () => color()))
    }
    write_pixel   = (x, y, c) => this.arr[y][x] = c
    pixel_at      = (x, y)    => this.arr[y][x]
    canvas_to_ppm = ()        => `\
P3
${this.width} ${this.height}
${MAX_RGB}
` + this.arr
        .flatMap(row =>
            row.flatMap(col =>
                col.arr
                   .map(x => Math.round(MAX_RGB *                   // scale to closest int
                             Math.max(0, Math.min(x, 1)))))         // Math.clamp(x, 0, 1)?
               .join(' ')                                           // stringify line
               .match(new RegExp(`.\{1,${MAX_LEN}\}(\\s|\$)`, 'g')) // break up long lines
               .map(s => s.trimEnd() + '\n'))                       // remove trailing space
        .join('')
}
Object.defineProperties(exports.canvas.prototype, {
    'width':  { get: function() { return this.arr.find(Boolean).length } },
    'height': { get: function() { return this.arr.length } }
})
