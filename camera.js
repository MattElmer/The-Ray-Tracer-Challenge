const { identity } = require('./transformation')
const { ray } = require('./ray')
const { point, vector, normalize } = require('./tuple')
const _ = require('lodash')
const { canvas } = require('./canvas')
const { color_at } = require('./world')

exports.camera = class {
    constructor(h, v, fov) {
        this.hsize = h
        this.vsize = v
        this.field_of_view = fov
        this.transform = identity()
        let half_view = Math.tan(this.field_of_view / 2)
        let aspect = this.hsize / this.vsize; // why?
        [this.half_width, this.half_height] = aspect >= 1 ? [half_view, half_view / aspect] : [half_view * aspect, half_view]
        this.pixel_size = this.half_width * 2 / this.hsize
    }
    ray_for_pixel = (...crds) =>
        ray(          this.transform.inverse().mul( point(0, 0, 0)),
            normalize(this.transform.inverse().mul(vector(..._.zipWith(
                crds, [this.half_width, this.half_height], (crd, hlf) =>
                    hlf - (crd + 0.5) * this.pixel_size), -1))))

    render = w => {
        let image = new canvas(this.hsize, this.vsize)
        _.range(this.vsize).forEach(y =>
            _.range(this.hsize).forEach(x =>
                image.write_pixel(x, y, color_at(w, this.ray_for_pixel(x, y)))))
        return image
    }
}