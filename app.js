var a, p, v, c1, c2, r, s, xs, m, shape, comps, from, to, up, w, c, i, i1, i2, i3, i4 // global test var dumping ground

if (!process.argv[2]) process.exit() // don't run if nothing passed in

const fs = require('fs')
const { world } = require('./world')
const { plane } = require('./plane')
const { canvas } = require('./canvas')
const { camera } = require('./camera')
const { sphere, glass_sphere } = require('./sphere')
const { EPSILON } = require('./utility')
const { gradient_pattern, checkers_pattern } = require('./pattern')
const { point, vector, color, mul, BLACK, WHITE } = require('./tuple')
const { point_light, material } = require('./lighting')
const { translation, scaling, rotation_x, rotation_y, view_transformation } = require('./transformation')

let floor = new plane //sphere
floor.material = new material
floor.material.color = color(1, 0.9, 0.9)
floor.material.specular = 0
floor.material.pattern = new checkers_pattern(WHITE, BLACK)
floor.material.pattern.transform = translation(0, EPSILON, 0)
floor.material.reflective = 0.5

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
middle.material.pattern = new gradient_pattern(color(0.1, 1, 0.5), color(0.0, 1, 1))
middle.material.pattern.transform = translation(1.5, 0, 0).scaling(2, 2, 2)

const ATTENUATION = 0.5
let right = new glass_sphere
right.transform = translation(1.5, 0.5, -0.5).mul(scaling(0.5, 0.5, 0.5))
//right.material = new material
right.material.color = mul(color(0.5, 1, 0.1), ATTENUATION)
right.material.diffuse = 0.7 * ATTENUATION
//right.material.specular = 0.3

let left = new glass_sphere
left.transform = translation(-1.5, 0.33, -0.75).mul(scaling(0.33, 0.33, 0.33))
//left.material = new material
left.material.color = mul(color(1, 0.8, 0.1), ATTENUATION)
left.material.diffuse = 0.7 * ATTENUATION
//left.material.specular = 0.3
left.material.specular = right.material.specular = 1; left.material.shininess = right.material.shininess = 300
left.material.reflective = left.material.transparency; right.material.reflective = right.material.transparency

let scene = new world
scene.objects = [floor, middle, left, right]
scene.light = new point_light(point(-10, 10, -10), WHITE)

let eye = new camera(320, 200, Math.PI/3)
eye.transform = view_transformation(point(0, 1.5, -5), point(0, 1, 0), vector(0, 1, 0))

//# render the result to a canvas.
let image = eye.render(scene)

fs.writeFile(process.argv[2], image.canvas_to_ppm(), () => {})