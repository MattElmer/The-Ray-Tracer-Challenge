const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { world, default_world, intersect_world } = require('../../world')
const { sphere } = require('../../sphere')
const _ = require('lodash')
const { color } = require('../../tuple')
const { translate, scaling } = require('../../transformation')
//
//1) Scenario: Creating a world # ../features/world.feature:3
//   ? Given w ← world()
//       Undefined. Implement with the following snippet:
let w
         Given('w ← new world', function () {
//           // Write code here that turns the phrase above into concrete actions
           w = new world
         });
//
//   ? Then w contains no objects
//       Undefined. Implement with the following snippet:
//
         Then('w contains no objects', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(!w.objects)
         });
//
//   ? And w has no light source
//       Undefined. Implement with the following snippet:
//
         Then('w has no light source', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(!w.light)
         });
//
//
//2) Scenario: The default world # ../features/world.feature:8
//   ? Given light ← point_light(point(-10, 10, -10), color(1, 1, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//         // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//         // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And s1 ← sphere() with:
//       | material.color    | (0.8, 1.0, 0.6) |
//       | material.diffuse  | 0.7             |
//       | material.specular | 0.2             |
//       Undefined. Implement with the following snippet:
let s1
         Given('s1 ← new sphere with:', function (dataTable) {
//           // Write code here that turns the phrase above into concrete actions
           s1 = new sphere
           dataTable.raw().forEach(([path, expr]) =>
               _.update(s1, path, obj =>
                   obj = eval(expr)))
         });
//
//   ? And s2 ← sphere() with:
//       | transform | scaling(0.5, 0.5, 0.5) |
//       Undefined. Implement with the following snippet:
let s2
         Given('s2 ← new sphere with:', function (dataTable) {
//           // Write code here that turns the phrase above into concrete actions
           s2 = new sphere
           dataTable.raw().forEach(([path, expr]) =>
               _.update(s2, path, obj =>
                   obj = eval(expr)))         
         });
//
//   ? When w ← default_world()
//       Undefined. Implement with the following snippet:
//
         When('w ← new default_world', function () {
//           // Write code here that turns the phrase above into concrete actions
           w = new default_world
         });
//
//   ? Then w.light = light
//       Undefined. Implement with the following snippet:
//
         Then('w.light = light', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(w.light, light))
         });
//
//   ? And w contains s1
//       Undefined. Implement with the following snippet:
//
         Then('w contains s1', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(w.objects.some(obj => equal(obj, s1)))
         });
//
//   ? And w contains s2
//       Undefined. Implement with the following snippet:
//
         Then('w contains s2', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(w.objects.some(obj => equal(obj, s2)))
         });
//
//
//3) Scenario: Intersect a world with a ray # ../features/world.feature:21
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0, -5), vector(0, 0, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← intersect_world(w, r)
//       Undefined. Implement with the following snippet:
//
         When('xs ← intersect_world\\(w, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
           xs = intersect_world(w, r)
         });
//
//   - Then xs.count = 4 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1066
//   - And xs[1].t = 4.5 # ../features/step_definitions/intersections_steps.js:1066
//   - And xs[2].t = 5.5 # ../features/step_definitions/intersections_steps.js:1066
//   - And xs[3].t = 6 # ../features/step_definitions/intersections_steps.js:1066
//
//4) Scenario: Shading an intersection # ../features/world.feature:31
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0, -5), vector(0, 0, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And shape ← the first object in w
//       Undefined. Implement with the following snippet:
let shape
         Given('shape ← the first object in w', function () {
//           // Write code here that turns the phrase above into concrete actions
           shape = w.objects.find(Boolean)
         });
//
//   ? And i ← intersection(4, shape)
//       Undefined. Implement with the following snippet:
//
//         Given('i ← intersection\({int}, shape)', function (int) {
//         // Given('i ← intersection\({float}, shape)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When comps ← prepare_computations(i, r)
//       Undefined. Implement with the following snippet:
//
//         When('comps ← prepare_computations\(i, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And c ← shade_hit(w, comps)
//       Undefined. Implement with the following snippet:
//
//         When('c ← shade_hit\(w, comps)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = color(0.38066, 0.47583, 0.2855)
//       Undefined. Implement with the following snippet:
//
//         Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//5) Scenario: Shading an intersection from the inside # ../features/world.feature:40
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And w.light ← point_light(point(0, 0.25, 0), color(1, 1, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0, 0), vector(0, 0, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And shape ← the second object in w
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← the second object in w', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i ← intersection(0.5, shape)
//       Undefined. Implement with the following snippet:
//
//         Given('i ← intersection\({float}, shape)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When comps ← prepare_computations(i, r)
//       Undefined. Implement with the following snippet:
//
//         When('comps ← prepare_computations\(i, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And c ← shade_hit(w, comps)
//       Undefined. Implement with the following snippet:
//
//         When('c ← shade_hit\(w, comps)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = color(0.90498, 0.90498, 0.90498)
//       Undefined. Implement with the following snippet:
//
//         Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//6) Scenario: The color when a ray misses # ../features/world.feature:50
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0, -5), vector(0, 1, 0))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When c ← color_at(w, r)
//       Undefined. Implement with the following snippet:
//
//         When('c ← color_at\(w, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Then('c = color\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('c = color\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('c = color\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('c = color\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('c = color\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('c = color\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('c = color\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//7) Scenario: The color when a ray hits # ../features/world.feature:56
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0, -5), vector(0, 0, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When c ← color_at(w, r)
//       Undefined. Implement with the following snippet:
//
//         When('c ← color_at\(w, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = color(0.38066, 0.47583, 0.2855)
//       Undefined. Implement with the following snippet:
//
//         Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//8) Scenario: The color with an intersection behind the ray # ../features/world.feature:62
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And outer ← the first object in w
//       Undefined. Implement with the following snippet:
//
//         Given('outer ← the first object in w', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And outer.material.ambient ← 1
//       Undefined. Implement with the following snippet:
//
//         Given('outer.material.ambient ← {int}', function (int) {
//         // Given('outer.material.ambient ← {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And inner ← the second object in w
//       Undefined. Implement with the following snippet:
//
//         Given('inner ← the second object in w', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And inner.material.ambient ← 1
//       Undefined. Implement with the following snippet:
//
//         Given('inner.material.ambient ← {int}', function (int) {
//         // Given('inner.material.ambient ← {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0, 0.75), vector(0, 0, -1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When c ← color_at(w, r)
//       Undefined. Implement with the following snippet:
//
//         When('c ← color_at\(w, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = inner.material.color
//       Undefined. Implement with the following snippet:
//
//         Then('c = inner.material.color', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//9) Scenario: There is no shadow when nothing is collinear with point and light # ../features/world.feature:72
//   ? Given w ← default_world()
//       Undefined. Implement with the following snippet:
//
//         Given('w ← default_world\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And p ← point(0, 10, 0) # ../features/step_definitions/tuples_steps.js:127
//   ? Then is_shadowed(w, p) is false
//       Undefined. Implement with the following snippet:
//
//         Then('is_shadowed\(w, p) is false', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//10) Scenario: The shadow when an object is between the point and the light # ../features/world.feature:77
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(10, -10, 10) # ../features/step_definitions/tuples_steps.js:127
//    ? Then is_shadowed(w, p) is true
//        Undefined. Implement with the following snippet:
//
//          Then('is_shadowed\(w, p) is true', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//11) Scenario: There is no shadow when an object is behind the light # ../features/world.feature:82
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(-20, 20, -20) # ../features/step_definitions/tuples_steps.js:127
//    ? Then is_shadowed(w, p) is false
//        Undefined. Implement with the following snippet:
//
//          Then('is_shadowed\(w, p) is false', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//12) Scenario: There is no shadow when an object is behind the point # ../features/world.feature:87
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(-2, 2, -2) # ../features/step_definitions/tuples_steps.js:127
//    ? Then is_shadowed(w, p) is false
//        Undefined. Implement with the following snippet:
//
//          Then('is_shadowed\(w, p) is false', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//13) Scenario: shade_hit() is given an intersection in shadow # ../features/world.feature:92
//    ? Given w ← world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And w.light ← point_light(point(0, 0, -10), color(1, 1, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s1 ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s1 ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s1 is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('s1 is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s2 ← sphere() with:
//        | transform | translation(0, 0, 10) |
//        Undefined. Implement with the following snippet:
//
//          Given('s2 ← sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s2 is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('s2 is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, 5), vector(0, 0, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i ← intersection(4, s2)
//        Undefined. Implement with the following snippet:
//
//          Given('i ← intersection\({int}, s2)', function (int) {
//          // Given('i ← intersection\({float}, s2)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(i, r)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(i, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And c ← shade_hit(w, comps)
//        Undefined. Implement with the following snippet:
//
//          When('c ← shade_hit\(w, comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then c = color(0.1, 0.1, 0.1)
//        Undefined. Implement with the following snippet:
//
//          Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//14) Scenario: The reflected color for a nonreflective material # ../features/world.feature:106
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, 0), vector(0, 0, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← the second object in w
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← the second object in w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape.material.ambient ← 1
//        Undefined. Implement with the following snippet:
//
//          Given('shape.material.ambient ← {int}', function (int) {
//          // Given('shape.material.ambient ← {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i ← intersection(1, shape)
//        Undefined. Implement with the following snippet:
//
//          Given('i ← intersection\({int}, shape)', function (int) {
//          // Given('i ← intersection\({float}, shape)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(i, r)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(i, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And color ← reflected_color(w, comps)
//        Undefined. Implement with the following snippet:
//
//          When('color ← reflected_color\(w, comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color = color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('color = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('color = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('color = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('color = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('color = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('color = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('color = color\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('color = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//15) Scenario: The reflected color for a reflective material # ../features/world.feature:116
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← plane() with:
//        | material.reflective | 0.5                   |
//        | transform           | translation(0, -1, 0) |
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('shape is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -3), vector(0, -√2/2, √2/2))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, int, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, int, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, int, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, int, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, float8, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, float8, float9) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i ← intersection(√2, shape)
//        Undefined. Implement with the following snippet:
//
//          Given('i ← intersection\(√{int}, shape)', function (int) {
//          // Given('i ← intersection\(√{float}, shape)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(i, r)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(i, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And color ← reflected_color(w, comps)
//        Undefined. Implement with the following snippet:
//
//          When('color ← reflected_color\(w, comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color = color(0.19032, 0.2379, 0.14274)
//        Undefined. Implement with the following snippet:
//
//          Then('color = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//16) Scenario: shade_hit() with a reflective material # ../features/world.feature:128
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← plane() with:
//        | material.reflective | 0.5                   |
//        | transform           | translation(0, -1, 0) |
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('shape is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -3), vector(0, -√2/2, √2/2))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, int, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, int, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, int, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, int, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, float8, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, float8, float9) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i ← intersection(√2, shape)
//        Undefined. Implement with the following snippet:
//
//          Given('i ← intersection\(√{int}, shape)', function (int) {
//          // Given('i ← intersection\(√{float}, shape)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(i, r)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(i, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And color ← shade_hit(w, comps)
//        Undefined. Implement with the following snippet:
//
//          When('color ← shade_hit\(w, comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color = color(0.87677, 0.92436, 0.82918)
//        Undefined. Implement with the following snippet:
//
//          Then('color = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//17) Scenario: color_at() with mutually reflective surfaces # ../features/world.feature:140
//    ? Given w ← world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And w.light ← point_light(point(0, 0, 0), color(1, 1, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('w.light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('w.light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('w.light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('w.light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And lower ← plane() with:
//        | material.reflective | 1                     |
//        | transform           | translation(0, -1, 0) |
//        Undefined. Implement with the following snippet:
//
//          Given('lower ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And lower is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('lower is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And upper ← plane() with:
//        | material.reflective | 1                    |
//        | transform           | translation(0, 1, 0) |
//        Undefined. Implement with the following snippet:
//
//          Given('upper ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And upper is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('upper is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, 0), vector(0, 1, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color_at(w, r) should terminate successfully
//        Undefined. Implement with the following snippet:
//
//          Then('color_at\(w, r) should terminate successfully', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//18) Scenario: The reflected color at the maximum recursive depth # ../features/world.feature:154
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← plane() with:
//        | material.reflective | 0.5                   |
//        | transform           | translation(0, -1, 0) |
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('shape is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -3), vector(0, -√2/2, √2/2))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, int, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, int, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, int, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, int, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, float8, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, float8, float9) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i ← intersection(√2, shape)
//        Undefined. Implement with the following snippet:
//
//          Given('i ← intersection\(√{int}, shape)', function (int) {
//          // Given('i ← intersection\(√{float}, shape)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(i, r)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(i, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And color ← reflected_color(w, comps, 0)
//        Undefined. Implement with the following snippet:
//
//          When('color ← reflected_color\(w, comps, {int})', function (int) {
//          // When('color ← reflected_color\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color = color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('color = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('color = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('color = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('color = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('color = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('color = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('color = color\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('color = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//19) Scenario: The refracted color with an opaque surface # ../features/world.feature:166
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← the first object in w
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← the first object in w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -5), vector(0, 0, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(4:shape, 6:shape)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:shape, {int}:shape)', function (int, int2) {
//          // Given('xs ← intersections\({int}:shape, {float}:shape)', function (int, float) {
//          // Given('xs ← intersections\({float}:shape, {int}:shape)', function (float, int) {
//          // Given('xs ← intersections\({float}:shape, {float}:shape)', function (float, float2) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[0], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And c ← refracted_color(w, comps, 5)
//        Undefined. Implement with the following snippet:
//
//          When('c ← refracted_color\(w, comps, {int})', function (int) {
//          // When('c ← refracted_color\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then c = color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('c = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('c = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('c = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('c = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('c = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('c = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('c = color\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//20) Scenario: The refracted color at the maximum recursive depth # ../features/world.feature:175
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← the first object in w
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← the first object in w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape has:
//        | material.transparency     | 1.0 |
//        | material.refractive_index | 1.5 |
//        Undefined. Implement with the following snippet:
//
//          Given('shape has:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -5), vector(0, 0, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(4:shape, 6:shape)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:shape, {int}:shape)', function (int, int2) {
//          // Given('xs ← intersections\({int}:shape, {float}:shape)', function (int, float) {
//          // Given('xs ← intersections\({float}:shape, {int}:shape)', function (float, int) {
//          // Given('xs ← intersections\({float}:shape, {float}:shape)', function (float, float2) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[0], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And c ← refracted_color(w, comps, 0)
//        Undefined. Implement with the following snippet:
//
//          When('c ← refracted_color\(w, comps, {int})', function (int) {
//          // When('c ← refracted_color\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then c = color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('c = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('c = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('c = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('c = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('c = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('c = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('c = color\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//21) Scenario: The refracted color under total internal reflection # ../features/world.feature:187
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape ← the first object in w
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← the first object in w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And shape has:
//        | material.transparency     | 1.0 |
//        | material.refractive_index | 1.5 |
//        Undefined. Implement with the following snippet:
//
//          Given('shape has:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, √2/2), vector(0, 1, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, int6, float) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({int}, {float}, {int}))', function (int, int2, int3, int4, int5, float, int6) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({int}, {float}, {float}))', function (int, int2, int3, int4, int5, float, float2) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({float}, {int}, {int}))', function (int, int2, int3, int4, float, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({float}, {int}, {float}))', function (int, int2, int3, int4, float, int5, float2) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({float}, {float}, {int}))', function (int, int2, int3, int4, float, float2, int5) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{int}), vector\({float}, {float}, {float}))', function (int, int2, int3, int4, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({int}, {int}, {int}))', function (int, int2, int3, float, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({int}, {int}, {float}))', function (int, int2, int3, float, int4, int5, float2) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({int}, {float}, {int}))', function (int, int2, int3, float, int4, float2, int5) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({int}, {float}, {float}))', function (int, int2, int3, float, int4, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({float}, {int}, {int}))', function (int, int2, int3, float, float2, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({float}, {int}, {float}))', function (int, int2, int3, float, float2, int4, float3) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({float}, {float}, {int}))', function (int, int2, int3, float, float2, float3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, √{int}\/{float}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, int5, float2) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, int4, float2, int5) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, int4, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({float}, {int}, {int}))', function (int, int2, float, int3, float2, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({float}, {int}, {float}))', function (int, int2, float, int3, float2, int4, float3) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({float}, {float}, {int}))', function (int, int2, float, int3, float2, float3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{int}), vector\({float}, {float}, {float}))', function (int, int2, float, int3, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({int}, {int}, {int}))', function (int, int2, float, float2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({int}, {int}, {float}))', function (int, int2, float, float2, int3, int4, float3) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({int}, {float}, {int}))', function (int, int2, float, float2, int3, float3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({int}, {float}, {float}))', function (int, int2, float, float2, int3, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, float3, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, float3, int3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, float4, int3) {
//          // Given('r ← ray\(point\({int}, {int}, √{float}\/{float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({int}, {int}, {float}))', function (int, float, int2, int3, int4, int5, float2) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({int}, {float}, {int}))', function (int, float, int2, int3, int4, float2, int5) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({int}, {float}, {float}))', function (int, float, int2, int3, int4, float2, float3) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({float}, {int}, {int}))', function (int, float, int2, int3, float2, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({float}, {int}, {float}))', function (int, float, int2, int3, float2, int4, float3) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({float}, {float}, {int}))', function (int, float, int2, int3, float2, float3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{int}), vector\({float}, {float}, {float}))', function (int, float, int2, int3, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({int}, {int}, {int}))', function (int, float, int2, float2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({int}, {int}, {float}))', function (int, float, int2, float2, int3, int4, float3) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({int}, {float}, {int}))', function (int, float, int2, float2, int3, float3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({int}, {float}, {float}))', function (int, float, int2, float2, int3, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({float}, {int}, {int}))', function (int, float, int2, float2, float3, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({float}, {int}, {float}))', function (int, float, int2, float2, float3, int3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({float}, {float}, {int}))', function (int, float, int2, float2, float3, float4, int3) {
//          // Given('r ← ray\(point\({int}, {float}, √{int}\/{float}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, int4, float3) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, int3, float3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, int3, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({float}, {int}, {int}))', function (int, float, float2, int2, float3, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({float}, {int}, {float}))', function (int, float, float2, int2, float3, int3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({float}, {float}, {int}))', function (int, float, float2, int2, float3, float4, int3) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{int}), vector\({float}, {float}, {float}))', function (int, float, float2, int2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({int}, {int}, {int}))', function (int, float, float2, float3, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({int}, {int}, {float}))', function (int, float, float2, float3, int2, int3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({int}, {float}, {int}))', function (int, float, float2, float3, int2, float4, int3) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({int}, {float}, {float}))', function (int, float, float2, float3, int2, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, float4, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, float4, int2, float5) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, float5, int2) {
//          // Given('r ← ray\(point\({int}, {float}, √{float}\/{float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({int}, {int}, {float}))', function (float, int, int2, int3, int4, int5, float2) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({int}, {float}, {int}))', function (float, int, int2, int3, int4, float2, int5) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({int}, {float}, {float}))', function (float, int, int2, int3, int4, float2, float3) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({float}, {int}, {int}))', function (float, int, int2, int3, float2, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({float}, {int}, {float}))', function (float, int, int2, int3, float2, int4, float3) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({float}, {float}, {int}))', function (float, int, int2, int3, float2, float3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{int}), vector\({float}, {float}, {float}))', function (float, int, int2, int3, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({int}, {int}, {int}))', function (float, int, int2, float2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({int}, {int}, {float}))', function (float, int, int2, float2, int3, int4, float3) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({int}, {float}, {int}))', function (float, int, int2, float2, int3, float3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({int}, {float}, {float}))', function (float, int, int2, float2, int3, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({float}, {int}, {int}))', function (float, int, int2, float2, float3, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({float}, {int}, {float}))', function (float, int, int2, float2, float3, int3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({float}, {float}, {int}))', function (float, int, int2, float2, float3, float4, int3) {
//          // Given('r ← ray\(point\({float}, {int}, √{int}\/{float}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, int4, float3) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, int3, float3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, int3, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({float}, {int}, {int}))', function (float, int, float2, int2, float3, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({float}, {int}, {float}))', function (float, int, float2, int2, float3, int3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({float}, {float}, {int}))', function (float, int, float2, int2, float3, float4, int3) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{int}), vector\({float}, {float}, {float}))', function (float, int, float2, int2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({int}, {int}, {int}))', function (float, int, float2, float3, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({int}, {int}, {float}))', function (float, int, float2, float3, int2, int3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({int}, {float}, {int}))', function (float, int, float2, float3, int2, float4, int3) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({int}, {float}, {float}))', function (float, int, float2, float3, int2, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, float4, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, float4, int2, float5) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, float5, int2) {
//          // Given('r ← ray\(point\({float}, {int}, √{float}\/{float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({int}, {int}, {float}))', function (float, float2, int, int2, int3, int4, float3) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({int}, {float}, {int}))', function (float, float2, int, int2, int3, float3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({int}, {float}, {float}))', function (float, float2, int, int2, int3, float3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({float}, {int}, {int}))', function (float, float2, int, int2, float3, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({float}, {int}, {float}))', function (float, float2, int, int2, float3, int3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({float}, {float}, {int}))', function (float, float2, int, int2, float3, float4, int3) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{int}), vector\({float}, {float}, {float}))', function (float, float2, int, int2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({int}, {int}, {int}))', function (float, float2, int, float3, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({int}, {int}, {float}))', function (float, float2, int, float3, int2, int3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({int}, {float}, {int}))', function (float, float2, int, float3, int2, float4, int3) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({int}, {float}, {float}))', function (float, float2, int, float3, int2, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({float}, {int}, {int}))', function (float, float2, int, float3, float4, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({float}, {int}, {float}))', function (float, float2, int, float3, float4, int2, float5) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({float}, {float}, {int}))', function (float, float2, int, float3, float4, float5, int2) {
//          // Given('r ← ray\(point\({float}, {float}, √{int}\/{float}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, int3, float4) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, int2, float4, int3) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, int2, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({float}, {int}, {int}))', function (float, float2, float3, int, float4, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({float}, {int}, {float}))', function (float, float2, float3, int, float4, int2, float5) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({float}, {float}, {int}))', function (float, float2, float3, int, float4, float5, int2) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{int}), vector\({float}, {float}, {float}))', function (float, float2, float3, int, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({int}, {int}, {int}))', function (float, float2, float3, float4, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({int}, {int}, {float}))', function (float, float2, float3, float4, int, int2, float5) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({int}, {float}, {int}))', function (float, float2, float3, float4, int, float5, int2) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({int}, {float}, {float}))', function (float, float2, float3, float4, int, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, float5, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, float5, int, float6) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, float6, int) {
//          // Given('r ← ray\(point\({float}, {float}, √{float}\/{float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6, float7) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(-√2/2:shape, √2/2:shape)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({float}√{int}\/{int}:shape, √{int}\/{int}:shape)', function (float, int, int2, int3, int4) {
//          // Given('xs ← intersections\({float}√{int}\/{int}:shape, √{int}\/{float}:shape)', function (float, int, int2, int3, float2) {
//          // Given('xs ← intersections\({float}√{int}\/{int}:shape, √{float}\/{int}:shape)', function (float, int, int2, float2, int3) {
//          // Given('xs ← intersections\({float}√{int}\/{int}:shape, √{float}\/{float}:shape)', function (float, int, int2, float2, float3) {
//          // Given('xs ← intersections\({float}√{int}\/{float}:shape, √{int}\/{int}:shape)', function (float, int, float2, int2, int3) {
//          // Given('xs ← intersections\({float}√{int}\/{float}:shape, √{int}\/{float}:shape)', function (float, int, float2, int2, float3) {
//          // Given('xs ← intersections\({float}√{int}\/{float}:shape, √{float}\/{int}:shape)', function (float, int, float2, float3, int2) {
//          // Given('xs ← intersections\({float}√{int}\/{float}:shape, √{float}\/{float}:shape)', function (float, int, float2, float3, float4) {
//          // Given('xs ← intersections\({float}√{float}\/{int}:shape, √{int}\/{int}:shape)', function (float, float2, int, int2, int3) {
//          // Given('xs ← intersections\({float}√{float}\/{int}:shape, √{int}\/{float}:shape)', function (float, float2, int, int2, float3) {
//          // Given('xs ← intersections\({float}√{float}\/{int}:shape, √{float}\/{int}:shape)', function (float, float2, int, float3, int2) {
//          // Given('xs ← intersections\({float}√{float}\/{int}:shape, √{float}\/{float}:shape)', function (float, float2, int, float3, float4) {
//          // Given('xs ← intersections\({float}√{float}\/{float}:shape, √{int}\/{int}:shape)', function (float, float2, float3, int, int2) {
//          // Given('xs ← intersections\({float}√{float}\/{float}:shape, √{int}\/{float}:shape)', function (float, float2, float3, int, float4) {
//          // Given('xs ← intersections\({float}√{float}\/{float}:shape, √{float}\/{int}:shape)', function (float, float2, float3, float4, int) {
//          // Given('xs ← intersections\({float}√{float}\/{float}:shape, √{float}\/{float}:shape)', function (float, float2, float3, float4, float5) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[1], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And c ← refracted_color(w, comps, 5)
//        Undefined. Implement with the following snippet:
//
//          When('c ← refracted_color\(w, comps, {int})', function (int) {
//          // When('c ← refracted_color\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then c = color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('c = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('c = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('c = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('c = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('c = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('c = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('c = color\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//22) Scenario: The refracted color with a refracted ray # ../features/world.feature:201
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And A ← the first object in w
//        Undefined. Implement with the following snippet:
//
//          Given('A ← the first object in w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And A has:
//        | material.ambient | 1.0            |
//        | material.pattern | test_pattern() |
//        Undefined. Implement with the following snippet:
//
//          Given('A has:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← the second object in w
//        Undefined. Implement with the following snippet:
//
//          Given('B ← the second object in w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B has:
//        | material.transparency     | 1.0 |
//        | material.refractive_index | 1.5 |
//        Undefined. Implement with the following snippet:
//
//          Given('B has:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, 0.1), vector(0, 1, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(-0.9899:A, -0.4899:B, 0.4899:B, 0.9899:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({float}:A, {float}:B, {float}:B, {float}:A)', function (float, float2, float3, float4) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[2], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And c ← refracted_color(w, comps, 5)
//        Undefined. Implement with the following snippet:
//
//          When('c ← refracted_color\(w, comps, {int})', function (int) {
//          // When('c ← refracted_color\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then c = color(0, 0.99888, 0.04725)
//        Undefined. Implement with the following snippet:
//
//          Then('c = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('c = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//23) Scenario: shade_hit() with a transparent material # ../features/world.feature:217
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And floor ← plane() with:
//        | transform                 | translation(0, -1, 0) |
//        | material.transparency     | 0.5                   |
//        | material.refractive_index | 1.5                   |
//        Undefined. Implement with the following snippet:
//
//          Given('floor ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And floor is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('floor is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And ball ← sphere() with:
//        | material.color   | (1, 0, 0)                  |
//        | material.ambient | 0.5                        |
//        | transform        | translation(0, -3.5, -0.5) |
//        Undefined. Implement with the following snippet:
//
//          Given('ball ← sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And ball is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('ball is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -3), vector(0, -√2/2, √2/2))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, int, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, int, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, int, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, int, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, float8, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, float8, float9) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(√2:floor)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\(√{int}:floor)', function (int) {
//          // Given('xs ← intersections\(√{float}:floor)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[0], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And color ← shade_hit(w, comps, 5)
//        Undefined. Implement with the following snippet:
//
//          When('color ← shade_hit\(w, comps, {int})', function (int) {
//          // When('color ← shade_hit\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color = color(0.93642, 0.68642, 0.68642)
//        Undefined. Implement with the following snippet:
//
//          Then('color = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//24) Scenario: shade_hit() with a reflective, transparent material # ../features/world.feature:235
//    ? Given w ← default_world()
//        Undefined. Implement with the following snippet:
//
//          Given('w ← default_world\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -3), vector(0, -√2/2, √2/2))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, int4, int5, int6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, int4, int5, float4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, int4, float4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, int4, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, float4, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, float4, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, float4, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, float4, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, int3, int4, int5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, int3, int4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, int3, float5, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, int3, float5, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, float5, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, float5, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, float5, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, float5, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, int2, int3, int4) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, int2, int3, float6) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, int2, float6, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, int2, float6, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, float6, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, float6, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, float6, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, float6, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, int, int2, int3) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, int, int2, float7) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, int, float7, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, int, float7, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, int, int2) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, int, float8) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, float8, int) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, float8, float9) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And floor ← plane() with:
//        | transform                 | translation(0, -1, 0) |
//        | material.reflective       | 0.5                   |
//        | material.transparency     | 0.5                   |
//        | material.refractive_index | 1.5                   |
//        Undefined. Implement with the following snippet:
//
//          Given('floor ← plane\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And floor is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('floor is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And ball ← sphere() with:
//        | material.color   | (1, 0, 0)                  |
//        | material.ambient | 0.5                        |
//        | transform        | translation(0, -3.5, -0.5) |
//        Undefined. Implement with the following snippet:
//
//          Given('ball ← sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And ball is added to w
//        Undefined. Implement with the following snippet:
//
//          Given('ball is added to w', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(√2:floor)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\(√{int}:floor)', function (int) {
//          // Given('xs ← intersections\(√{float}:floor)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[0], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And color ← shade_hit(w, comps, 5)
//        Undefined. Implement with the following snippet:
//
//          When('color ← shade_hit\(w, comps, {int})', function (int) {
//          // When('color ← shade_hit\(w, comps, {float})', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then color = color(0.93391, 0.69643, 0.69243)
//        Undefined. Implement with the following snippet:
//
//          Then('color = color\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//24 scenarios (24 undefined)
//165 steps (156 undefined, 9 skipped)
//0m00.065s (executing steps: 0m00.000s)
//