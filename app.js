var a, p, v, c1, c2, r, s, xs, m, shape, comps, from, to, up, w, c // global test var dumping ground

if (!process.argv[2]) process.exit() // don't run if nothing passed in

const fs = require('fs')
const { world } = require('./world')
const { plane } = require('./plane')
const { canvas } = require('./canvas')
const { camera } = require('./camera')
const { sphere } = require('./sphere')
const { stripe_pattern } = require('./pattern')
const { point, vector, color } = require('./tuple')
const { point_light, material } = require('./lighting')
const { translation, scaling, rotation_x, rotation_y, rotation_z, view_transformation } = require('./transformation')

let floor = new plane //sphere
//floor.transform = scaling(10, 0.01, 10)
floor.material = new material
floor.material.color = color(1, 0.9, 0.9)
floor.material.specular = 0
floor.material.pattern = new stripe_pattern(color(1, 0, 0), color(1, 1, 1))

// let left_wall = new plane //sphere
// left_wall.transform = translation(0, 0, 5).mul(rotation_y(-Math.PI/4).mul(rotation_x(Math.PI/2).mul(scaling(10, 0.01, 10))))
// left_wall.material = floor.material

// let right_wall = new plane //sphere
// right_wall.transform = translation(0, 0, 5).mul(rotation_y(Math.PI/4).mul(rotation_x(Math.PI/2).mul(scaling(10, 0.01, 10))))
// right_wall.material = floor.material

let middle = new sphere
middle.transform = translation(-0.5, 1, 0.5)
middle.material = new material
middle.material.color = color(0.1, 1, 0.5)
middle.material.diffuse = 0.7
middle.material.specular = 0.3

let right = new sphere
right.transform = translation(1.5, 0.5, -0.5).mul(scaling(0.5, 0.5, 0.5))
right.material = new material
right.material.color = color(0.5, 1, 0.1)
right.material.diffuse = 0.7
right.material.specular = 0.3

let left = new sphere
left.transform = translation(-1.5, 0.33, -0.75).mul(scaling(0.33, 0.33, 0.33))
left.material = new material
left.material.color = color(1, 0.8, 0.1)
left.material.diffuse = 0.7
left.material.specular = 0.3

let scene = new world
scene.objects = [floor, middle, left, right]
scene.light = new point_light(point(-10, 10, -10), color(1, 1, 1))

let eye = new camera(200, 75, Math.PI/3)
eye.transform = view_transformation(point(0, 1.5, -5), point(0, 1, 0), vector(0, 1, 0))

//# render the result to a canvas.
let image = eye.render(scene)

fs.writeFile(process.argv[2], image.canvas_to_ppm(), () => {})