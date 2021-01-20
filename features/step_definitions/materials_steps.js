const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { stripe_pattern } = require('../../pattern')
const { material, lighting, point_light } = require('../../lighting')
const { color, vector, point } = require('../../tuple')
//1) Scenario: The default material # ../features/materials.feature:7
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then m.color = color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Then('m.color = color\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('m.color = color\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('m.color = color\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('m.color = color\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('m.color = color\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('m.color = color\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('m.color = color\({float}, {float}, {int})', function (float, float2, int) {
         Then('m.color = color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.color, color(float, float2, float3)))
         });
//
//   ? And m.ambient = 0.1
//       Undefined. Implement with the following snippet:
//
         Then('m.ambient = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.ambient, float))
         });
//
//   ? And m.diffuse = 0.9
//       Undefined. Implement with the following snippet:
//
         Then('m.diffuse = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.diffuse, float))
         });
//
//   ? And m.specular = 0.9
//       Undefined. Implement with the following snippet:
//
         Then('m.specular = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.specular, float))
         });
//
//   ? And m.shininess = 200.0
//       Undefined. Implement with the following snippet:
//
         Then('m.shininess = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.shininess, float))
         });
//
//
//2) Scenario: Reflectivity for the default material # ../features/materials.feature:15
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then m.reflective = 0.0
//       Undefined. Implement with the following snippet:
//
         Then('m.reflective = {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.reflective, float))
         });
//
//
//3) Scenario: Transparency and Refractive Index for the default material # ../features/materials.feature:19
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then m.transparency = 0.0
//       Undefined. Implement with the following snippet:
//
         Then('m.transparency = {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.transparency, float))
         });
//
//   ? And m.refractive_index = 1.0
//       Undefined. Implement with the following snippet:
//
         Then('m.refractive_index = {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(m.refractive_index, float))
         });
//
//
//4) Scenario: Lighting with the eye between the light and the surface # ../features/materials.feature:24
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given eyev ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
let eyev
//         Given('eyev ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('eyev ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('eyev ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('eyev ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('eyev ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('eyev ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('eyev ← vector\({float}, {float}, {int})', function (float, float2, int) {
         Given('eyev ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           eyev = vector(float, float2, float3)
         });
//
//   ? And normalv ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
let normalv
//         Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
         Given('normalv ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           normalv = vector(float, float2, float3)
         });
//
//   ? And light ← point_light(point(0, 0, -10), color(1, 1, 1))
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
         Given('light ← point_light\\(point {float}, {float}, {float},color {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
           light = new point_light(point(float, float2, float3), color(float4, float5, float6))
         });
//
//   ? When result ← lighting(m, light, position, eyev, normalv)
//       Undefined. Implement with the following snippet:
let result
         When('result ← lighting\\(m, light, position, eyev, normalv)', function () {
//           // Write code here that turns the phrase above into concrete actions
           result = lighting(m, light, position, eyev, normalv)
         });
//
//   ? Then result = color(1.9, 1.9, 1.9)
//       Undefined. Implement with the following snippet:
//
         Then('result = color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(result, color(float, float2, float3)))
         });
//
//
//5) Scenario: Lighting with the eye between light and surface, eye offset 45° # ../features/materials.feature:31
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given eyev ← vector(0, √2/2, -√2/2)
//       Undefined. Implement with the following snippet:
//
//         Given('eyev ← vector\({int}, √{int}\/{int}, {float}√{int}\/{int})', function (int, int2, int3, float, int4, int5) {
//         // Given('eyev ← vector\({int}, √{int}\/{int}, {float}√{int}\/{float})', function (int, int2, int3, float, int4, float2) {
//         // Given('eyev ← vector\({int}, √{int}\/{int}, {float}√{float}\/{int})', function (int, int2, int3, float, float2, int4) {
//         // Given('eyev ← vector\({int}, √{int}\/{int}, {float}√{float}\/{float})', function (int, int2, int3, float, float2, float3) {
//         // Given('eyev ← vector\({int}, √{int}\/{float}, {float}√{int}\/{int})', function (int, int2, float, float2, int3, int4) {
//         // Given('eyev ← vector\({int}, √{int}\/{float}, {float}√{int}\/{float})', function (int, int2, float, float2, int3, float3) {
//         // Given('eyev ← vector\({int}, √{int}\/{float}, {float}√{float}\/{int})', function (int, int2, float, float2, float3, int3) {
//         // Given('eyev ← vector\({int}, √{int}\/{float}, {float}√{float}\/{float})', function (int, int2, float, float2, float3, float4) {
//         // Given('eyev ← vector\({int}, √{float}\/{int}, {float}√{int}\/{int})', function (int, float, int2, float2, int3, int4) {
//         // Given('eyev ← vector\({int}, √{float}\/{int}, {float}√{int}\/{float})', function (int, float, int2, float2, int3, float3) {
//         // Given('eyev ← vector\({int}, √{float}\/{int}, {float}√{float}\/{int})', function (int, float, int2, float2, float3, int3) {
//         // Given('eyev ← vector\({int}, √{float}\/{int}, {float}√{float}\/{float})', function (int, float, int2, float2, float3, float4) {
//         // Given('eyev ← vector\({int}, √{float}\/{float}, {float}√{int}\/{int})', function (int, float, float2, float3, int2, int3) {
//         // Given('eyev ← vector\({int}, √{float}\/{float}, {float}√{int}\/{float})', function (int, float, float2, float3, int2, float4) {
//         // Given('eyev ← vector\({int}, √{float}\/{float}, {float}√{float}\/{int})', function (int, float, float2, float3, float4, int2) {
//         // Given('eyev ← vector\({int}, √{float}\/{float}, {float}√{float}\/{float})', function (int, float, float2, float3, float4, float5) {
//         // Given('eyev ← vector\({float}, √{int}\/{int}, {float}√{int}\/{int})', function (float, int, int2, float2, int3, int4) {
//         // Given('eyev ← vector\({float}, √{int}\/{int}, {float}√{int}\/{float})', function (float, int, int2, float2, int3, float3) {
//         // Given('eyev ← vector\({float}, √{int}\/{int}, {float}√{float}\/{int})', function (float, int, int2, float2, float3, int3) {
//         // Given('eyev ← vector\({float}, √{int}\/{int}, {float}√{float}\/{float})', function (float, int, int2, float2, float3, float4) {
//         // Given('eyev ← vector\({float}, √{int}\/{float}, {float}√{int}\/{int})', function (float, int, float2, float3, int2, int3) {
//         // Given('eyev ← vector\({float}, √{int}\/{float}, {float}√{int}\/{float})', function (float, int, float2, float3, int2, float4) {
//         // Given('eyev ← vector\({float}, √{int}\/{float}, {float}√{float}\/{int})', function (float, int, float2, float3, float4, int2) {
//         // Given('eyev ← vector\({float}, √{int}\/{float}, {float}√{float}\/{float})', function (float, int, float2, float3, float4, float5) {
//         // Given('eyev ← vector\({float}, √{float}\/{int}, {float}√{int}\/{int})', function (float, float2, int, float3, int2, int3) {
//         // Given('eyev ← vector\({float}, √{float}\/{int}, {float}√{int}\/{float})', function (float, float2, int, float3, int2, float4) {
//         // Given('eyev ← vector\({float}, √{float}\/{int}, {float}√{float}\/{int})', function (float, float2, int, float3, float4, int2) {
//         // Given('eyev ← vector\({float}, √{float}\/{int}, {float}√{float}\/{float})', function (float, float2, int, float3, float4, float5) {
//         // Given('eyev ← vector\({float}, √{float}\/{float}, {float}√{int}\/{int})', function (float, float2, float3, float4, int, int2) {
//         // Given('eyev ← vector\({float}, √{float}\/{float}, {float}√{int}\/{float})', function (float, float2, float3, float4, int, float5) {
//         // Given('eyev ← vector\({float}, √{float}\/{float}, {float}√{float}\/{int})', function (float, float2, float3, float4, float5, int) {
         //Given('eyev ← vector\\({float}, √{float}\\/{float}, {float}√{float}\\/{float})', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
           //eyev = vector(float, Math.sqrt(float2)/float3, Math.sqrt(float5)/float6)
         //});
//
//   ? And normalv ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('normalv ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And light ← point_light(point(0, 0, -10), color(1, 1, 1))
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
//   ? When result ← lighting(m, light, position, eyev, normalv)
//       Undefined. Implement with the following snippet:
//
//         When('result ← lighting\(m, light, position, eyev, normalv)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then result = color(1.0, 1.0, 1.0)
//       Undefined. Implement with the following snippet:
//
//         Then('result = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//6) Scenario: Lighting with eye opposite surface, light offset 45° # ../features/materials.feature:38
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given eyev ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('eyev ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('eyev ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('eyev ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('eyev ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('eyev ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('eyev ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('eyev ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('eyev ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And normalv ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('normalv ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And light ← point_light(point(0, 10, -10), color(1, 1, 1))
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
//   ? When result ← lighting(m, light, position, eyev, normalv)
//       Undefined. Implement with the following snippet:
//
//         When('result ← lighting\(m, light, position, eyev, normalv)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then result = color(0.7364, 0.7364, 0.7364)
//       Undefined. Implement with the following snippet:
//
//         Then('result = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//7) Scenario: Lighting with eye in the path of the reflection vector # ../features/materials.feature:45
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given eyev ← vector(0, -√2/2, -√2/2)
//       Undefined. Implement with the following snippet:
//
//         Given('eyev ← vector\({int}, {float}√{int}\/{int}, {float}√{int}\/{int})', function (int, float, int2, int3, float2, int4, int5) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{int}, {float}√{int}\/{float})', function (int, float, int2, int3, float2, int4, float3) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{int}, {float}√{float}\/{int})', function (int, float, int2, int3, float2, float3, int4) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{int}, {float}√{float}\/{float})', function (int, float, int2, int3, float2, float3, float4) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{float}, {float}√{int}\/{int})', function (int, float, int2, float2, float3, int3, int4) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{float}, {float}√{int}\/{float})', function (int, float, int2, float2, float3, int3, float4) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{float}, {float}√{float}\/{int})', function (int, float, int2, float2, float3, float4, int3) {
//         // Given('eyev ← vector\({int}, {float}√{int}\/{float}, {float}√{float}\/{float})', function (int, float, int2, float2, float3, float4, float5) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{int}, {float}√{int}\/{int})', function (int, float, float2, int2, float3, int3, int4) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{int}, {float}√{int}\/{float})', function (int, float, float2, int2, float3, int3, float4) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{int}, {float}√{float}\/{int})', function (int, float, float2, int2, float3, float4, int3) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{int}, {float}√{float}\/{float})', function (int, float, float2, int2, float3, float4, float5) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{float}, {float}√{int}\/{int})', function (int, float, float2, float3, float4, int2, int3) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{float}, {float}√{int}\/{float})', function (int, float, float2, float3, float4, int2, float5) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{float}, {float}√{float}\/{int})', function (int, float, float2, float3, float4, float5, int2) {
//         // Given('eyev ← vector\({int}, {float}√{float}\/{float}, {float}√{float}\/{float})', function (int, float, float2, float3, float4, float5, float6) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{int}, {float}√{int}\/{int})', function (float, float2, int, int2, float3, int3, int4) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{int}, {float}√{int}\/{float})', function (float, float2, int, int2, float3, int3, float4) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{int}, {float}√{float}\/{int})', function (float, float2, int, int2, float3, float4, int3) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{int}, {float}√{float}\/{float})', function (float, float2, int, int2, float3, float4, float5) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{float}, {float}√{int}\/{int})', function (float, float2, int, float3, float4, int2, int3) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{float}, {float}√{int}\/{float})', function (float, float2, int, float3, float4, int2, float5) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{float}, {float}√{float}\/{int})', function (float, float2, int, float3, float4, float5, int2) {
//         // Given('eyev ← vector\({float}, {float}√{int}\/{float}, {float}√{float}\/{float})', function (float, float2, int, float3, float4, float5, float6) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{int}, {float}√{int}\/{int})', function (float, float2, float3, int, float4, int2, int3) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{int}, {float}√{int}\/{float})', function (float, float2, float3, int, float4, int2, float5) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{int}, {float}√{float}\/{int})', function (float, float2, float3, int, float4, float5, int2) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{int}, {float}√{float}\/{float})', function (float, float2, float3, int, float4, float5, float6) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{float}, {float}√{int}\/{int})', function (float, float2, float3, float4, float5, int, int2) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{float}, {float}√{int}\/{float})', function (float, float2, float3, float4, float5, int, float6) {
//         // Given('eyev ← vector\({float}, {float}√{float}\/{float}, {float}√{float}\/{int})', function (float, float2, float3, float4, float5, float6, int) {
         Given('eyev ← vector\\({float}, {float}√{float}\\/{float}, {float}√{float}\\/{float})', function (float, float2, float3, float4, float5, float6, float7) {
//           // Write code here that turns the phrase above into concrete actions
           eyev = vector(float, -Math.sqrt(float3)/float4, -Math.sqrt(float6)/float7)
         });
//
//   ? And normalv ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('normalv ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And light ← point_light(point(0, 10, -10), color(1, 1, 1))
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
//   ? When result ← lighting(m, light, position, eyev, normalv)
//       Undefined. Implement with the following snippet:
//
//         When('result ← lighting\(m, light, position, eyev, normalv)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then result = color(1.6364, 1.6364, 1.6364)
//       Undefined. Implement with the following snippet:
//
//         Then('result = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//8) Scenario: Lighting with the light behind the surface # ../features/materials.feature:52
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given eyev ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('eyev ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('eyev ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('eyev ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('eyev ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('eyev ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('eyev ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('eyev ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('eyev ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And normalv ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('normalv ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And light ← point_light(point(0, 0, 10), color(1, 1, 1))
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
//   ? When result ← lighting(m, light, position, eyev, normalv)
//       Undefined. Implement with the following snippet:
//
//         When('result ← lighting\(m, light, position, eyev, normalv)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then result = color(0.1, 0.1, 0.1)
//       Undefined. Implement with the following snippet:
//
//         Then('result = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//9) Scenario: Lighting with the surface in shadow # ../features/materials.feature:59
//   ? Given m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//   ? Given eyev ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('eyev ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('eyev ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('eyev ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('eyev ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('eyev ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('eyev ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('eyev ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('eyev ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And normalv ← vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('normalv ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And light ← point_light(point(0, 0, -10), color(1, 1, 1))
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
//   ? And in_shadow ← true
//       Undefined. Implement with the following snippet:
let in_shadow
         Given('in_shadow ← true', function () {
//           // Write code here that turns the phrase above into concrete actions
           in_shadow = true
         });
//
//   ? When result ← lighting(m, light, position, eyev, normalv, in_shadow)
//       Undefined. Implement with the following snippet:
//
         When('result ← lighting\\(m, light, position, eyev, normalv, in_shadow)', function () {
//           // Write code here that turns the phrase above into concrete actions
           result = lighting(m, light, position, eyev, normalv, in_shadow)
         });
//
//   ? Then result = color(0.1, 0.1, 0.1)
//       Undefined. Implement with the following snippet:
//
//         Then('result = color\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//10) Scenario: Lighting with a pattern applied # ../features/materials.feature:67
//    ? Given m ← material()
//        Undefined. Implement with the following snippet:
//
//          Given('m ← material\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And position ← point(0, 0, 0) # ../features/step_definitions/lights_steps.js:10
//    ? Given m.pattern ← stripe_pattern(color(1, 1, 1), color(0, 0, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {int}), color\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {int}, {float}), color\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {int}), color\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('m.pattern ← stripe_pattern\(color\({int}, {float}, {float}), color\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {int}), color\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {int}, {float}), color\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {int}), color\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('m.pattern ← stripe_pattern\(color\({float}, {float}, {float}), color\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
          Given('m.pattern ← stripe_pattern\\(color {float}, {float}, {float},color {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
            // Write code here that turns the phrase above into concrete actions
            m.pattern = new stripe_pattern(color(float, float2, float3), color(float4, float5, float6))
          });

//    - And m.ambient ← 1 # ../features/step_definitions/spheres_steps.js:972
//    ? And m.diffuse ← 0
//        Undefined. Implement with the following snippet:
//
//          Given('m.diffuse ← {int}', function (int) {
          Given('m.diffuse ← {float}', function (float) {
            // Write code here that turns the phrase above into concrete actions
            m.diffuse = float
          });
//
//    ? And m.specular ← 0
//        Undefined. Implement with the following snippet:
//
//          Given('m.specular ← {int}', function (int) {
          Given('m.specular ← {float}', function (float) {
            // Write code here that turns the phrase above into concrete actions
            m.specular = float
          });
//
//    ? And eyev ← vector(0, 0, -1)
//        Undefined. Implement with the following snippet:
//
//          Given('eyev ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('eyev ← vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('eyev ← vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('eyev ← vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('eyev ← vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('eyev ← vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('eyev ← vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('eyev ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And normalv ← vector(0, 0, -1)
//        Undefined. Implement with the following snippet:
//
//          Given('normalv ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('normalv ← vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('normalv ← vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('normalv ← vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('normalv ← vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('normalv ← vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('normalv ← vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('normalv ← vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And light ← point_light(point(0, 0, -10), color(1, 1, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4) {
//          // Given('light ← point_light\(point\({int}, {int}, {int}), color\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3) {
//          // Given('light ← point_light\(point\({int}, {int}, {float}), color\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3) {
//          // Given('light ← point_light\(point\({int}, {float}, {int}), color\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2) {
//          // Given('light ← point_light\(point\({int}, {float}, {float}), color\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {int}, {float}))', function (float, int, int2, int3, int4, float2) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {int}))', function (float, int, int2, int3, float2, int4) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({int}, {float}, {float}))', function (float, int, int2, int3, float2, float3) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {int}))', function (float, int, int2, float2, int3, int4) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {int}, {float}))', function (float, int, int2, float2, int3, float3) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {int}))', function (float, int, int2, float2, float3, int3) {
//          // Given('light ← point_light\(point\({float}, {int}, {int}), color\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {int}))', function (float, int, float2, int2, int3, int4) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {int}, {float}))', function (float, int, float2, int2, int3, float3) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {int}))', function (float, int, float2, int2, float3, int3) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({int}, {float}, {float}))', function (float, int, float2, int2, float3, float4) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {int}))', function (float, int, float2, float3, int2, int3) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {int}, {float}))', function (float, int, float2, float3, int2, float4) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {int}))', function (float, int, float2, float3, float4, int2) {
//          // Given('light ← point_light\(point\({float}, {int}, {float}), color\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {int}))', function (float, float2, int, int2, int3, int4) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {int}, {float}))', function (float, float2, int, int2, int3, float3) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {int}))', function (float, float2, int, int2, float3, int3) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({int}, {float}, {float}))', function (float, float2, int, int2, float3, float4) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {int}))', function (float, float2, int, float3, int2, int3) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {int}, {float}))', function (float, float2, int, float3, int2, float4) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {int}))', function (float, float2, int, float3, float4, int2) {
//          // Given('light ← point_light\(point\({float}, {float}, {int}), color\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {int}))', function (float, float2, float3, int, int2, int3) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {int}, {float}))', function (float, float2, float3, int, int2, float4) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {int}))', function (float, float2, float3, int, float4, int2) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({int}, {float}, {float}))', function (float, float2, float3, int, float4, float5) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {int}))', function (float, float2, float3, float4, int, int2) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {int}, {float}))', function (float, float2, float3, float4, int, float5) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {int}))', function (float, float2, float3, float4, float5, int) {
//          // Given('light ← point_light\(point\({float}, {float}, {float}), color\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When c1 ← lighting(m, light, point(0.9, 0, 0), eyev, normalv, false)
//        Undefined. Implement with the following snippet:
//
//          When('c1 ← lighting\(m, light, point\({float}, {int}, {int}), eyev, normalv, false)', function (float, int, int2) {
//          // When('c1 ← lighting\(m, light, point\({float}, {int}, {float}), eyev, normalv, false)', function (float, int, float2) {
//          // When('c1 ← lighting\(m, light, point\({float}, {float}, {int}), eyev, normalv, false)', function (float, float2, int) {
          When('c1 ← lighting\\(m, light, point {float}, {float}, {float},eyev, normalv, false)', function (float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            c1 = lighting(m, light, point(float, float2, float3), eyev, normalv)
          });
//
//    ? And c2 ← lighting(m, light, point(1.1, 0, 0), eyev, normalv, false)
//        Undefined. Implement with the following snippet:
//
//          When('c2 ← lighting\(m, light, point\({float}, {int}, {int}), eyev, normalv, false)', function (float, int, int2) {
//          // When('c2 ← lighting\(m, light, point\({float}, {int}, {float}), eyev, normalv, false)', function (float, int, float2) {
//          // When('c2 ← lighting\(m, light, point\({float}, {float}, {int}), eyev, normalv, false)', function (float, float2, int) {
          When('c2 ← lighting\\(m, light, point {float}, {float}, {float},eyev, normalv, false)', function (float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            c2 = lighting(m, light, point(float, float2, float3), eyev, normalv)
          });
//
//    ? Then c1 = color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Then('c1 = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('c1 = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('c1 = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('c1 = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('c1 = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('c1 = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('c1 = color\({float}, {float}, {int})', function (float, float2, int) {
          Then('c1 = color\\({float}, {float}, {float})', function (float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(c1, color(float, float2, float3)))
          });
//
//    ? And c2 = color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('c2 = color\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('c2 = color\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('c2 = color\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('c2 = color\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('c2 = color\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('c2 = color\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('c2 = color\({float}, {float}, {int})', function (float, float2, int) {
          Then('c2 = color\\({float}, {float}, {float})', function (float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(c2, color(float, float2, float3)))
          });
