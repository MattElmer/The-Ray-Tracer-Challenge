const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { plane } = require('../../plane')
const { point, vector } = require('../../tuple')
//
//1) Scenario: The normal of a plane is constant everywhere # ../features/planes.feature:3
//   ? Given p ← plane()
//       Undefined. Implement with the following snippet:
//
         Given('p ← new plane', function () {
           // Write code here that turns the phrase above into concrete actions
           p = new plane
         });
//
//   ? When n1 ← local_normal_at(p, point 0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         When('n1 ← local_normal_at\(p, point {int}, {int}, {int})', function (int, int2, int3) {
//         // When('n1 ← local_normal_at\(p, point {int}, {int}, {float})', function (int, int2, float) {
//         // When('n1 ← local_normal_at\(p, point {int}, {float}, {int})', function (int, float, int2) {
//         // When('n1 ← local_normal_at\(p, point {int}, {float}, {float})', function (int, float, float2) {
//         // When('n1 ← local_normal_at\(p, point {float}, {int}, {int})', function (float, int, int2) {
//         // When('n1 ← local_normal_at\(p, point {float}, {int}, {float})', function (float, int, float2) {
//         // When('n1 ← local_normal_at\(p, point {float}, {float}, {int})', function (float, float2, int) {
        When('n1 ← local_normal_at\\(p, point {float}, {float}, {float})', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          n1 = p.local_normal_at(point(float, float2, float3))
        });
//
//   ? And n2 ← local_normal_at(p, point 10, 0, -10)
//       Undefined. Implement with the following snippet:
//
//         When('n2 ← local_normal_at\(p, point {int}, {int}, {int})', function (int, int2, int3) {
//         // When('n2 ← local_normal_at\(p, point {int}, {int}, {float})', function (int, int2, float) {
//         // When('n2 ← local_normal_at\(p, point {int}, {float}, {int})', function (int, float, int2) {
//         // When('n2 ← local_normal_at\(p, point {int}, {float}, {float})', function (int, float, float2) {
//         // When('n2 ← local_normal_at\(p, point {float}, {int}, {int})', function (float, int, int2) {
//         // When('n2 ← local_normal_at\(p, point {float}, {int}, {float})', function (float, int, float2) {
//         // When('n2 ← local_normal_at\(p, point {float}, {float}, {int})', function (float, float2, int) {
         When('n2 ← local_normal_at\\(p, point {float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           n2 = p.local_normal_at(point(float, float2, float3))
         });
//
//   ? And n3 ← local_normal_at(p, point -5, 0, 150)
//       Undefined. Implement with the following snippet:
//
//         When('n3 ← local_normal_at\(p, point {int}, {int}, {int})', function (int, int2, int3) {
//         // When('n3 ← local_normal_at\(p, point {int}, {int}, {float})', function (int, int2, float) {
//         // When('n3 ← local_normal_at\(p, point {int}, {float}, {int})', function (int, float, int2) {
//         // When('n3 ← local_normal_at\(p, point {int}, {float}, {float})', function (int, float, float2) {
//         // When('n3 ← local_normal_at\(p, point {float}, {int}, {int})', function (float, int, int2) {
//         // When('n3 ← local_normal_at\(p, point {float}, {int}, {float})', function (float, int, float2) {
//         // When('n3 ← local_normal_at\(p, point {float}, {float}, {int})', function (float, float2, int) {
         When('n3 ← local_normal_at\\(p, point {float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           n3 = p.local_normal_at(point(float, float2, float3))
         });
//
//   ? Then n1 = vector(0, 1, 0)
//       Undefined. Implement with the following snippet:
//
//         Then('n1 = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('n1 = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('n1 = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('n1 = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('n1 = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('n1 = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('n1 = vector\({float}, {float}, {int})', function (float, float2, int) {
         Then('n1 = vector\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(n1, vector(float, float2, float3)))
         });
//
//   ? And n2 = vector(0, 1, 0)
//       Undefined. Implement with the following snippet:
//
//         Then('n2 = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('n2 = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('n2 = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('n2 = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('n2 = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('n2 = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('n2 = vector\({float}, {float}, {int})', function (float, float2, int) {
         Then('n2 = vector\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(n1, vector(float, float2, float3)))
         });
//
//   ? And n3 = vector(0, 1, 0)
//       Undefined. Implement with the following snippet:
//
//         Then('n3 = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('n3 = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('n3 = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('n3 = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('n3 = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('n3 = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('n3 = vector\({float}, {float}, {int})', function (float, float2, int) {
         Then('n3 = vector\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(n1, vector(float, float2, float3)))
         });
//
//
//2) Scenario: Intersect with a ray parallel to the plane # ../features/planes.feature:12
//   ? Given p ← plane()
//       Undefined. Implement with the following snippet:
//
//         Given('p ← plane\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And r ← ray(point 0, 10, 0,vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? When xs ← local_intersect(p, r)
//       Undefined. Implement with the following snippet:
//
         When('xs ← local_intersect\\(p, r)', function () {
           // Write code here that turns the phrase above into concrete actions
           xs = p.local_intersect(r)
         });
//
//   ? Then xs is empty
//       Undefined. Implement with the following snippet:
//
//         Then('xs is empty', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//3) Scenario: Intersect with a coplanar ray # ../features/planes.feature:18
//   ? Given p ← plane()
//       Undefined. Implement with the following snippet:
//
//         Given('p ← plane\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And r ← ray(point 0, 0, 0,vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? When xs ← local_intersect(p, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(p, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs is empty
//       Undefined. Implement with the following snippet:
//
         Then('xs is empty', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(xs.length === 0)
         });
//
//
//4) Scenario: A ray intersecting a plane from above # ../features/planes.feature:24
//   ? Given p ← plane()
//       Undefined. Implement with the following snippet:
//
//         Given('p ← plane\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And r ← ray(point 0, 1, 0,vector 0, -1, 0) # ../features/step_definitions/rays_steps.js:130
//   ? When xs ← local_intersect(p, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(p, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 1 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 1 # ../features/step_definitions/intersections_steps.js:1067
//   ? And xs[0].object = p
//       Undefined. Implement with the following snippet:
//
         Then('xs[{int}].object = p', function (int) {
         // Then('xs[{float}].object = p', function (float) {
           // Write code here that turns the phrase above into concrete actions
           assert(xs[int].object === p)
         });
//
//
//5) Scenario: A ray intersecting a plane from below # ../features/planes.feature:32
//   ? Given p ← plane()
//       Undefined. Implement with the following snippet:
//
//         Given('p ← plane\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And r ← ray(point 0, -1, 0,vector 0, 1, 0) # ../features/step_definitions/rays_steps.js:130
//   ? When xs ← local_intersect(p, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(p, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 1 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 1 # ../features/step_definitions/intersections_steps.js:1067
//   ? And xs[0].object = p
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}].object = p', function (int) {
//         // Then('xs[{float}].object = p', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//