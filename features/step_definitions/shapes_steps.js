const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { test_shape } = require('../../shape')
const { translation } = require('../../transformation')
const { material } = require('../../lighting')
const { origin, direction } = require('../../ray')
const { point, vector } = require('../../tuple')
//
//1) Scenario: The default transformation # ../features/shapes.feature:3
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
         Given('s ← new test_shape', function () {
//           // Write code here that turns the phrase above into concrete actions
           s = new test_shape
         });
//
//   - Then s.transform = identity_matrix # ../features/step_definitions/spheres_steps.js:281
//
//2) Scenario: Assigning a transformation # ../features/shapes.feature:7
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When set_transform(s, translation(2, 3, 4))
//       Undefined. Implement with the following snippet:
//
//         When('set_transform\(s, translation\({int}, {int}, {int}))', function (int, int2, int3) {
//         // When('set_transform\(s, translation\({int}, {int}, {float}))', function (int, int2, float) {
//         // When('set_transform\(s, translation\({int}, {float}, {int}))', function (int, float, int2) {
//         // When('set_transform\(s, translation\({int}, {float}, {float}))', function (int, float, float2) {
//         // When('set_transform\(s, translation\({float}, {int}, {int}))', function (float, int, int2) {
//         // When('set_transform\(s, translation\({float}, {int}, {float}))', function (float, int, float2) {
//         // When('set_transform\(s, translation\({float}, {float}, {int}))', function (float, float2, int) {
//         // When('set_transform\(s, translation\({float}, {float}, {float}))', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then s.transform = translation(2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Then('s.transform = translation\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('s.transform = translation\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('s.transform = translation\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('s.transform = translation\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('s.transform = translation\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('s.transform = translation\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('s.transform = translation\({float}, {float}, {int})', function (float, float2, int) {
         Then('s.transform = translation\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(s.transform, translation(float, float2, float3)))
         });
//
//
//3) Scenario: The default material # ../features/shapes.feature:12
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - When m ← s.material # ../features/step_definitions/spheres_steps.js:937
//   ? Then m = material()
//       Undefined. Implement with the following snippet:
//
         Then('m = new material', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(m, new material))
         });
//
//
//4) Scenario: Assigning a material # ../features/shapes.feature:17
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And m ← material()
//       Undefined. Implement with the following snippet:
//
//         Given('m ← material\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And m.ambient ← 1 # ../features/step_definitions/spheres_steps.js:972
//   - When s.material ← m # ../features/step_definitions/spheres_steps.js:980
//   - Then s.material = m # ../features/step_definitions/spheres_steps.js:988
//
//5) Scenario: Intersecting a scaled shape with a ray # ../features/shapes.feature:24
//   ? Given r ← ray(point(0, 0, -5), vector(0, 0, 1))
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
//   ? And s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When set_transform(s, scaling(2, 2, 2))
//       Undefined. Implement with the following snippet:
//
//         When('set_transform\(s, scaling\({int}, {int}, {int}))', function (int, int2, int3) {
//         // When('set_transform\(s, scaling\({int}, {int}, {float}))', function (int, int2, float) {
//         // When('set_transform\(s, scaling\({int}, {float}, {int}))', function (int, float, int2) {
//         // When('set_transform\(s, scaling\({int}, {float}, {float}))', function (int, float, float2) {
//         // When('set_transform\(s, scaling\({float}, {int}, {int}))', function (float, int, int2) {
//         // When('set_transform\(s, scaling\({float}, {int}, {float}))', function (float, int, float2) {
//         // When('set_transform\(s, scaling\({float}, {float}, {int}))', function (float, float2, int) {
//         // When('set_transform\(s, scaling\({float}, {float}, {float}))', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And xs ← intersect(s, r) # ../features/step_definitions/spheres_steps.js:24
//   ? Then s.saved_ray.origin = point(0, 0, -2.5)
//       Undefined. Implement with the following snippet:
//
//         Then('s.saved_ray.origin = point\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('s.saved_ray.origin = point\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('s.saved_ray.origin = point\({float}, {int}, {float})', function (float, int, float2) {
        Then('s.saved_ray.origin = point\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(origin(s.saved_ray), point(float, float2, float3)))
        });
//
//   ? And s.saved_ray.direction = vector(0, 0, 0.5)
//       Undefined. Implement with the following snippet:
//
//         Then('s.saved_ray.direction = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('s.saved_ray.direction = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('s.saved_ray.direction = vector\({float}, {int}, {float})', function (float, int, float2) {
         Then('s.saved_ray.direction = vector\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(direction(s.saved_ray), vector(float, float2, float3)))
         });
//
//
//6) Scenario: Intersecting a translated shape with a ray # ../features/shapes.feature:32
//   ? Given r ← ray(point(0, 0, -5), vector(0, 0, 1))
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
//   ? And s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When set_transform(s, translation(5, 0, 0))
//       Undefined. Implement with the following snippet:
//
//         When('set_transform\(s, translation\({int}, {int}, {int}))', function (int, int2, int3) {
//         // When('set_transform\(s, translation\({int}, {int}, {float}))', function (int, int2, float) {
//         // When('set_transform\(s, translation\({int}, {float}, {int}))', function (int, float, int2) {
//         // When('set_transform\(s, translation\({int}, {float}, {float}))', function (int, float, float2) {
//         // When('set_transform\(s, translation\({float}, {int}, {int}))', function (float, int, int2) {
//         // When('set_transform\(s, translation\({float}, {int}, {float}))', function (float, int, float2) {
//         // When('set_transform\(s, translation\({float}, {float}, {int}))', function (float, float2, int) {
//         // When('set_transform\(s, translation\({float}, {float}, {float}))', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And xs ← intersect(s, r) # ../features/step_definitions/spheres_steps.js:24
//   ? Then s.saved_ray.origin = point(-5, 0, -5)
//       Undefined. Implement with the following snippet:
//
//         Then('s.saved_ray.origin = point\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('s.saved_ray.origin = point\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('s.saved_ray.origin = point\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('s.saved_ray.origin = point\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('s.saved_ray.origin = point\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('s.saved_ray.origin = point\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('s.saved_ray.origin = point\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('s.saved_ray.origin = point\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And s.saved_ray.direction = vector(0, 0, 1)
//       Undefined. Implement with the following snippet:
//
//         Then('s.saved_ray.direction = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('s.saved_ray.direction = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('s.saved_ray.direction = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('s.saved_ray.direction = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('s.saved_ray.direction = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('s.saved_ray.direction = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('s.saved_ray.direction = vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('s.saved_ray.direction = vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//7) Scenario: Computing the normal on a translated shape # ../features/shapes.feature:40
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When set_transform(s, translation(0, 1, 0))
//       Undefined. Implement with the following snippet:
//
//         When('set_transform\(s, translation\({int}, {int}, {int}))', function (int, int2, int3) {
//         // When('set_transform\(s, translation\({int}, {int}, {float}))', function (int, int2, float) {
//         // When('set_transform\(s, translation\({int}, {float}, {int}))', function (int, float, int2) {
//         // When('set_transform\(s, translation\({int}, {float}, {float}))', function (int, float, float2) {
//         // When('set_transform\(s, translation\({float}, {int}, {int}))', function (float, int, int2) {
//         // When('set_transform\(s, translation\({float}, {int}, {float}))', function (float, int, float2) {
//         // When('set_transform\(s, translation\({float}, {float}, {int}))', function (float, float2, int) {
//         // When('set_transform\(s, translation\({float}, {float}, {float}))', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And n ← normal_at(s, point(0, 1.70711, -0.70711))
//       Undefined. Implement with the following snippet:
//
//         When('n ← normal_at\(s, point\({int}, {float}, {float}))', function (int, float, float2) {
//         // When('n ← normal_at\(s, point\({float}, {float}, {float}))', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then n = vector(0, 0.70711, -0.70711) # ../features/step_definitions/spheres_steps.js:470
//
//8) Scenario: Computing the normal on a transformed shape # ../features/shapes.feature:46
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And m ← scaling(1, 0.5, 1) * rotation_z(π/5) # ../features/step_definitions/spheres_steps.js:863
//   - When set_transform(s, m) # ../features/step_definitions/spheres_steps.js:871
//   ? And n ← normal_at(s, point(0, √2/2, -√2/2))
//       Undefined. Implement with the following snippet:
//
//         When('n ← normal_at\(s, point\({int}, √{int}\/{int}, {float}√{int}\/{int}))', function (int, int2, int3, float, int4, int5) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{int}, {float}√{int}\/{float}))', function (int, int2, int3, float, int4, float2) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{int}, {float}√{float}\/{int}))', function (int, int2, int3, float, float2, int4) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{int}, {float}√{float}\/{float}))', function (int, int2, int3, float, float2, float3) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{float}, {float}√{int}\/{int}))', function (int, int2, float, float2, int3, int4) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{float}, {float}√{int}\/{float}))', function (int, int2, float, float2, int3, float3) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{float}, {float}√{float}\/{int}))', function (int, int2, float, float2, float3, int3) {
//         // When('n ← normal_at\(s, point\({int}, √{int}\/{float}, {float}√{float}\/{float}))', function (int, int2, float, float2, float3, float4) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{int}, {float}√{int}\/{int}))', function (int, float, int2, float2, int3, int4) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{int}, {float}√{int}\/{float}))', function (int, float, int2, float2, int3, float3) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{int}, {float}√{float}\/{int}))', function (int, float, int2, float2, float3, int3) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{int}, {float}√{float}\/{float}))', function (int, float, int2, float2, float3, float4) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{float}, {float}√{int}\/{int}))', function (int, float, float2, float3, int2, int3) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{float}, {float}√{int}\/{float}))', function (int, float, float2, float3, int2, float4) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{float}, {float}√{float}\/{int}))', function (int, float, float2, float3, float4, int2) {
//         // When('n ← normal_at\(s, point\({int}, √{float}\/{float}, {float}√{float}\/{float}))', function (int, float, float2, float3, float4, float5) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{int}, {float}√{int}\/{int}))', function (float, int, int2, float2, int3, int4) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{int}, {float}√{int}\/{float}))', function (float, int, int2, float2, int3, float3) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{int}, {float}√{float}\/{int}))', function (float, int, int2, float2, float3, int3) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{int}, {float}√{float}\/{float}))', function (float, int, int2, float2, float3, float4) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{float}, {float}√{int}\/{int}))', function (float, int, float2, float3, int2, int3) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{float}, {float}√{int}\/{float}))', function (float, int, float2, float3, int2, float4) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{float}, {float}√{float}\/{int}))', function (float, int, float2, float3, float4, int2) {
//         // When('n ← normal_at\(s, point\({float}, √{int}\/{float}, {float}√{float}\/{float}))', function (float, int, float2, float3, float4, float5) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{int}, {float}√{int}\/{int}))', function (float, float2, int, float3, int2, int3) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{int}, {float}√{int}\/{float}))', function (float, float2, int, float3, int2, float4) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{int}, {float}√{float}\/{int}))', function (float, float2, int, float3, float4, int2) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{int}, {float}√{float}\/{float}))', function (float, float2, int, float3, float4, float5) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{float}, {float}√{int}\/{int}))', function (float, float2, float3, float4, int, int2) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{float}, {float}√{int}\/{float}))', function (float, float2, float3, float4, int, float5) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{float}, {float}√{float}\/{int}))', function (float, float2, float3, float4, float5, int) {
//         // When('n ← normal_at\(s, point\({float}, √{float}\/{float}, {float}√{float}\/{float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then n = vector(0, 0.97014, -0.24254) # ../features/step_definitions/spheres_steps.js:470
//
//9) Scenario: A shape has a parent attribute # ../features/shapes.feature:53
//   ? Given s ← test_shape()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← test_shape\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then s.parent is nothing
//       Undefined. Implement with the following snippet:
//
//         Then('s.parent is nothing', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//10) Scenario: Converting a point from world to object space # ../features/shapes.feature:57
//    ? Given g1 ← group()
//        Undefined. Implement with the following snippet:
//
//          Given('g1 ← group\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(g1, rotation_y(π/2))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(g1, rotation_y\(π\/{int}))', function (int) {
//          // Given('set_transform\(g1, rotation_y\(π\/{float}))', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And g2 ← group()
//        Undefined. Implement with the following snippet:
//
//          Given('g2 ← group\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(g2, scaling(2, 2, 2))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(g2, scaling\({int}, {int}, {int}))', function (int, int2, int3) {
//          // Given('set_transform\(g2, scaling\({int}, {int}, {float}))', function (int, int2, float) {
//          // Given('set_transform\(g2, scaling\({int}, {float}, {int}))', function (int, float, int2) {
//          // Given('set_transform\(g2, scaling\({int}, {float}, {float}))', function (int, float, float2) {
//          // Given('set_transform\(g2, scaling\({float}, {int}, {int}))', function (float, int, int2) {
//          // Given('set_transform\(g2, scaling\({float}, {int}, {float}))', function (float, int, float2) {
//          // Given('set_transform\(g2, scaling\({float}, {float}, {int}))', function (float, float2, int) {
//          // Given('set_transform\(g2, scaling\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And add_child(g1, g2)
//        Undefined. Implement with the following snippet:
//
//          Given('add_child\(g1, g2)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(s, translation(5, 0, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(s, translation\({int}, {int}, {int}))', function (int, int2, int3) {
//          // Given('set_transform\(s, translation\({int}, {int}, {float}))', function (int, int2, float) {
//          // Given('set_transform\(s, translation\({int}, {float}, {int}))', function (int, float, int2) {
//          // Given('set_transform\(s, translation\({int}, {float}, {float}))', function (int, float, float2) {
//          // Given('set_transform\(s, translation\({float}, {int}, {int}))', function (float, int, int2) {
//          // Given('set_transform\(s, translation\({float}, {int}, {float}))', function (float, int, float2) {
//          // Given('set_transform\(s, translation\({float}, {float}, {int}))', function (float, float2, int) {
//          // Given('set_transform\(s, translation\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And add_child(g2, s)
//        Undefined. Implement with the following snippet:
//
//          Given('add_child\(g2, s)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When p ← world_to_object(s, point(-2, 0, -10))
//        Undefined. Implement with the following snippet:
//
//          When('p ← world_to_object\(s, point\({int}, {int}, {int}))', function (int, int2, int3) {
//          // When('p ← world_to_object\(s, point\({int}, {int}, {float}))', function (int, int2, float) {
//          // When('p ← world_to_object\(s, point\({int}, {float}, {int}))', function (int, float, int2) {
//          // When('p ← world_to_object\(s, point\({int}, {float}, {float}))', function (int, float, float2) {
//          // When('p ← world_to_object\(s, point\({float}, {int}, {int}))', function (float, int, int2) {
//          // When('p ← world_to_object\(s, point\({float}, {int}, {float}))', function (float, int, float2) {
//          // When('p ← world_to_object\(s, point\({float}, {float}, {int}))', function (float, float2, int) {
//          // When('p ← world_to_object\(s, point\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then p = point(0, 0, -1)
//        Undefined. Implement with the following snippet:
//
//          Then('p = point\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('p = point\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('p = point\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('p = point\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('p = point\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('p = point\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('p = point\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('p = point\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//11) Scenario: Converting a normal from object to world space # ../features/shapes.feature:69
//    ? Given g1 ← group()
//        Undefined. Implement with the following snippet:
//
//          Given('g1 ← group\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(g1, rotation_y(π/2))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(g1, rotation_y\(π\/{int}))', function (int) {
//          // Given('set_transform\(g1, rotation_y\(π\/{float}))', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And g2 ← group()
//        Undefined. Implement with the following snippet:
//
//          Given('g2 ← group\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(g2, scaling(1, 2, 3))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(g2, scaling\({int}, {int}, {int}))', function (int, int2, int3) {
//          // Given('set_transform\(g2, scaling\({int}, {int}, {float}))', function (int, int2, float) {
//          // Given('set_transform\(g2, scaling\({int}, {float}, {int}))', function (int, float, int2) {
//          // Given('set_transform\(g2, scaling\({int}, {float}, {float}))', function (int, float, float2) {
//          // Given('set_transform\(g2, scaling\({float}, {int}, {int}))', function (float, int, int2) {
//          // Given('set_transform\(g2, scaling\({float}, {int}, {float}))', function (float, int, float2) {
//          // Given('set_transform\(g2, scaling\({float}, {float}, {int}))', function (float, float2, int) {
//          // Given('set_transform\(g2, scaling\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And add_child(g1, g2)
//        Undefined. Implement with the following snippet:
//
//          Given('add_child\(g1, g2)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(s, translation(5, 0, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(s, translation\({int}, {int}, {int}))', function (int, int2, int3) {
//          // Given('set_transform\(s, translation\({int}, {int}, {float}))', function (int, int2, float) {
//          // Given('set_transform\(s, translation\({int}, {float}, {int}))', function (int, float, int2) {
//          // Given('set_transform\(s, translation\({int}, {float}, {float}))', function (int, float, float2) {
//          // Given('set_transform\(s, translation\({float}, {int}, {int}))', function (float, int, int2) {
//          // Given('set_transform\(s, translation\({float}, {int}, {float}))', function (float, int, float2) {
//          // Given('set_transform\(s, translation\({float}, {float}, {int}))', function (float, float2, int) {
//          // Given('set_transform\(s, translation\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And add_child(g2, s)
//        Undefined. Implement with the following snippet:
//
//          Given('add_child\(g2, s)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_to_world(s, vector(√3/3, √3/3, √3/3))
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, int5, int6) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, int5, float) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, int4, int5) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, int4, float2) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, int4, int5) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, int4, float2) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, int3, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, int3, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{int}, √{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, int4, int5) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, int4, float2) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, int3, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, int3, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, int3, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, int3, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, int2, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, int2, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2) {
//          // When('n ← normal_to_world\(s, vector\(√{int}\/{float}, √{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, int4, int5) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, int4, float2) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, int3, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, int3, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, int3, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, int3, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, int2, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, int2, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{int}, √{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, int3, int4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, int3, float3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, int2, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, int2, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, int2, int3) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, int2, float4) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, int, int2) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, int, float5) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int) {
//          // When('n ← normal_to_world\(s, vector\(√{float}\/{float}, √{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then n = vector(0.2857, 0.4286, -0.8571) # ../features/step_definitions/spheres_steps.js:470
//
//12) Scenario: Finding the normal on a child object # ../features/shapes.feature:81
//    ? Given g1 ← group()
//        Undefined. Implement with the following snippet:
//
//          Given('g1 ← group\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(g1, rotation_y(π/2))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(g1, rotation_y\(π\/{int}))', function (int) {
//          // Given('set_transform\(g1, rotation_y\(π\/{float}))', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And g2 ← group()
//        Undefined. Implement with the following snippet:
//
//          Given('g2 ← group\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(g2, scaling(1, 2, 3))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(g2, scaling\({int}, {int}, {int}))', function (int, int2, int3) {
//          // Given('set_transform\(g2, scaling\({int}, {int}, {float}))', function (int, int2, float) {
//          // Given('set_transform\(g2, scaling\({int}, {float}, {int}))', function (int, float, int2) {
//          // Given('set_transform\(g2, scaling\({int}, {float}, {float}))', function (int, float, float2) {
//          // Given('set_transform\(g2, scaling\({float}, {int}, {int}))', function (float, int, int2) {
//          // Given('set_transform\(g2, scaling\({float}, {int}, {float}))', function (float, int, float2) {
//          // Given('set_transform\(g2, scaling\({float}, {float}, {int}))', function (float, float2, int) {
//          // Given('set_transform\(g2, scaling\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And add_child(g1, g2)
//        Undefined. Implement with the following snippet:
//
//          Given('add_child\(g1, g2)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(s, translation(5, 0, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(s, translation\({int}, {int}, {int}))', function (int, int2, int3) {
//          // Given('set_transform\(s, translation\({int}, {int}, {float}))', function (int, int2, float) {
//          // Given('set_transform\(s, translation\({int}, {float}, {int}))', function (int, float, int2) {
//          // Given('set_transform\(s, translation\({int}, {float}, {float}))', function (int, float, float2) {
//          // Given('set_transform\(s, translation\({float}, {int}, {int}))', function (float, int, int2) {
//          // Given('set_transform\(s, translation\({float}, {int}, {float}))', function (float, int, float2) {
//          // Given('set_transform\(s, translation\({float}, {float}, {int}))', function (float, float2, int) {
//          // Given('set_transform\(s, translation\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And add_child(g2, s)
//        Undefined. Implement with the following snippet:
//
//          Given('add_child\(g2, s)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point(1.7321, 1.1547, -5.5774))
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point\({float}, {float}, {float}))', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
