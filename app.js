var a, p, v, c1, c2, r, s, xs, m

if (!!process.argv) process.exit() // don't run if nothing passed in

const { point, color, normalize, sub } = require('./tuple')
const { sphere, intersect } = require('./sphere')
const { canvas } = require('./canvas')
const { ray } = require('./ray')
const { hit } = require('./intersection')
const _ = require('lodash')
const { point_light, material, lighting }

//# start the ray at z = -5
let ray_origin = point(0, 0, -5)
//
//# put the wall at z = 10
let wall_z = 10
//
let wall_size = 7.0
//
let canvas_pixels = 100
//
let pixel_size = wall_size / canvas_pixels
//
let half = wall_size / 2
//
let file = new canvas(canvas_pixels, canvas_pixels)
let red  = color(1, 0, 0) //# red
let shape  = new sphere()
//
//# for each row of pixels in the canvas
_.range(canvas_pixels).forEach(y => {
//
//  # compute the world y coordinate (top = +half, bottom = -half)
  let world_y = half - pixel_size * y
//
//  # for each pixel in the row
  _.range(canvas_pixels).forEach(x => {
//
//    # compute the world x coordinate (left = -half, right = half)
    let world_x = -half + pixel_size * x
//
//    # describe the point on the wall that the ray will target
    let position = point(world_x, world_y, wall_z)
//
    let r = ray(ray_origin, normalize(sub(position, ray_origin)))
    let xs = intersect(shape, r)
//
    if (!!hit(xs)) //is defined
      { file.write_pixel(x, y, red) }
//    end if
  })
//  end for
})
//end for
console.log(file.canvas_to_ppm())