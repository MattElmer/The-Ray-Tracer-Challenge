const { Before, Given, When, Then } = require('@cucumber/cucumber')
const { point, vector } = require('../../tuple')
const ray = require('../../ray')
const assert = require('assert')
const { equal } = require('../../utility')
const { transformation, identity } = require('../../transformation')
//1) Scenario: Creating and querying a ray # ../features/rays.feature:3
//   ? Given origin ← point(1, 2, 3)
//       Undefined. Implement with the following snippet:
let origin
//         Given('origin ← point\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('origin ← point\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('origin ← point\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('origin ← point\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('origin ← point\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('origin ← point\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('origin ← point\({float}, {float}, {int})', function (float, float2, int) {
         Given('origin ← point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           origin = point(float, float2, float3)
         });
//
//   ? And direction ← vector(4, 5, 6)
//       Undefined. Implement with the following snippet:
let direction
//         Given('direction ← vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('direction ← vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('direction ← vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('direction ← vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('direction ← vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('direction ← vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('direction ← vector\({float}, {float}, {int})', function (float, float2, int) {
         Given('direction ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           direction = vector(float, float2, float3)
         });
//
//   ? When r ← ray(origin, direction)
//       Undefined. Implement with the following snippet:
//let r
        When('r ← ray\\(origin, direction)', function () {
           // Write code here that turns the phrase above into concrete actions
           r = ray.ray(origin, direction)
         });
//
//   ? Then r.origin = origin
//       Undefined. Implement with the following snippet:
//
         Then('r.origin = origin', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(ray.origin(r), origin))
         });
//
//   ? And r.direction = direction
//       Undefined. Implement with the following snippet:
//
         Then('r.direction = direction', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(ray.direction(r), direction))
         });
//
//
//2) Scenario: Computing a point from a distance # ../features/rays.feature:10
//   ? Given r ← ray(point(2, 3, 4), vector(1, 0, 0))
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
         Given('r ← ray\\(point {float}, {float}, {float} vector {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
           // Write code here that turns the phrase above into concrete actions
           r = ray.ray(point(float, float2, float3), vector(float4, float5, float6))
         });
//
//   ? Then position(r, 0) = point(2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Then('position\(r, {int}) = point\({int}, {int}, {int})', function (int, int2, int3, int4) {
//         // Then('position\(r, {int}) = point\({int}, {int}, {float})', function (int, int2, int3, float) {
//         // Then('position\(r, {int}) = point\({int}, {float}, {int})', function (int, int2, float, int3) {
//         // Then('position\(r, {int}) = point\({int}, {float}, {float})', function (int, int2, float, float2) {
//         // Then('position\(r, {int}) = point\({float}, {int}, {int})', function (int, float, int2, int3) {
//         // Then('position\(r, {int}) = point\({float}, {int}, {float})', function (int, float, int2, float2) {
//         // Then('position\(r, {int}) = point\({float}, {float}, {int})', function (int, float, float2, int2) {
//         // Then('position\(r, {int}) = point\({float}, {float}, {float})', function (int, float, float2, float3) {
//         // Then('position\(r, {float}) = point\({int}, {int}, {int})', function (float, int, int2, int3) {
//         // Then('position\(r, {float}) = point\({int}, {int}, {float})', function (float, int, int2, float2) {
//         // Then('position\(r, {float}) = point\({int}, {float}, {int})', function (float, int, float2, int2) {
//         // Then('position\(r, {float}) = point\({int}, {float}, {float})', function (float, int, float2, float3) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {int})', function (float, float2, int, int2) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {float})', function (float, float2, int, float3) {
//         // Then('position\(r, {float}) = point\({float}, {float}, {int})', function (float, float2, float3, int) {
         Then('position\\(r, {float}) = point\\({float}, {float}, {float})', function (float, float2, float3, float4) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(r(float), point(float2, float3, float4)))
         });
//
//   ? And position(r, 1) = point(3, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Then('position\(r, {int}) = point\({int}, {int}, {int})', function (int, int2, int3, int4) {
//         // Then('position\(r, {int}) = point\({int}, {int}, {float})', function (int, int2, int3, float) {
//         // Then('position\(r, {int}) = point\({int}, {float}, {int})', function (int, int2, float, int3) {
//         // Then('position\(r, {int}) = point\({int}, {float}, {float})', function (int, int2, float, float2) {
//         // Then('position\(r, {int}) = point\({float}, {int}, {int})', function (int, float, int2, int3) {
//         // Then('position\(r, {int}) = point\({float}, {int}, {float})', function (int, float, int2, float2) {
//         // Then('position\(r, {int}) = point\({float}, {float}, {int})', function (int, float, float2, int2) {
//         // Then('position\(r, {int}) = point\({float}, {float}, {float})', function (int, float, float2, float3) {
//         // Then('position\(r, {float}) = point\({int}, {int}, {int})', function (float, int, int2, int3) {
//         // Then('position\(r, {float}) = point\({int}, {int}, {float})', function (float, int, int2, float2) {
//         // Then('position\(r, {float}) = point\({int}, {float}, {int})', function (float, int, float2, int2) {
//         // Then('position\(r, {float}) = point\({int}, {float}, {float})', function (float, int, float2, float3) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {int})', function (float, float2, int, int2) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {float})', function (float, float2, int, float3) {
//         // Then('position\(r, {float}) = point\({float}, {float}, {int})', function (float, float2, float3, int) {
//         Then('position\\(r, {float}) = point\\({float}, {float}, {float})', function (float, float2, float3, float4) {
//           // Write code here that turns the phrase above into concrete actions
//           assert(equal(r(float), point(float2, float3, float4)))
//         });
//
//   ? And position(r, -1) = point(1, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Then('position\(r, {int}) = point\({int}, {int}, {int})', function (int, int2, int3, int4) {
//         // Then('position\(r, {int}) = point\({int}, {int}, {float})', function (int, int2, int3, float) {
//         // Then('position\(r, {int}) = point\({int}, {float}, {int})', function (int, int2, float, int3) {
//         // Then('position\(r, {int}) = point\({int}, {float}, {float})', function (int, int2, float, float2) {
//         // Then('position\(r, {int}) = point\({float}, {int}, {int})', function (int, float, int2, int3) {
//         // Then('position\(r, {int}) = point\({float}, {int}, {float})', function (int, float, int2, float2) {
//         // Then('position\(r, {int}) = point\({float}, {float}, {int})', function (int, float, float2, int2) {
//         // Then('position\(r, {int}) = point\({float}, {float}, {float})', function (int, float, float2, float3) {
//         // Then('position\(r, {float}) = point\({int}, {int}, {int})', function (float, int, int2, int3) {
//         // Then('position\(r, {float}) = point\({int}, {int}, {float})', function (float, int, int2, float2) {
//         // Then('position\(r, {float}) = point\({int}, {float}, {int})', function (float, int, float2, int2) {
//         // Then('position\(r, {float}) = point\({int}, {float}, {float})', function (float, int, float2, float3) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {int})', function (float, float2, int, int2) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {float})', function (float, float2, int, float3) {
//         // Then('position\(r, {float}) = point\({float}, {float}, {int})', function (float, float2, float3, int) {
//         // Then('position\(r, {float}) = point\({float}, {float}, {float})', function (float, float2, float3, float4) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And position(r, 2.5) = point(4.5, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Then('position\(r, {float}) = point\({float}, {int}, {int})', function (float, float2, int, int2) {
//         // Then('position\(r, {float}) = point\({float}, {int}, {float})', function (float, float2, int, float3) {
//         // Then('position\(r, {float}) = point\({float}, {float}, {int})', function (float, float2, float3, int) {
//         // Then('position\(r, {float}) = point\({float}, {float}, {float})', function (float, float2, float3, float4) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//3) Scenario: Translating a ray # ../features/rays.feature:17
//   ? Given r ← ray(point(1, 2, 3), vector(0, 1, 0))
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
//         Given('r ← ray\\(point\\({float}, {float}, {float}), vector\\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//         });
//
//   ? And m ← translation(3, 4, 5)
//       Undefined. Implement with the following snippet:
let m
//         Given('m ← translation\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('m ← translation\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('m ← translation\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('m ← translation\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('m ← translation\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('m ← translation\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('m ← translation\({float}, {float}, {int})', function (float, float2, int) {
         Given('m ← translation\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           m = identity().translation(float, float2, float3)
         });
//
//   ? When r2 ← transform(r, m)
//       Undefined. Implement with the following snippet:
//
         When('r2 ← transform\\(r, m)', function () {
           // Write code here that turns the phrase above into concrete actions
           r2 = ray.transform(r, m)
         });
//
//   ? Then r2.origin = point(4, 6, 8)
//       Undefined. Implement with the following snippet:
//
//         Then('r2.origin = point\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('r2.origin = point\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('r2.origin = point\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('r2.origin = point\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('r2.origin = point\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('r2.origin = point\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('r2.origin = point\({float}, {float}, {int})', function (float, float2, int) {
         Then('r2.origin = point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(ray.origin(r2), point(float, float2, float3)))
         });
//
//   ? And r2.direction = vector(0, 1, 0)
//       Undefined. Implement with the following snippet:
//
//         Then('r2.direction = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('r2.direction = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('r2.direction = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('r2.direction = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('r2.direction = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('r2.direction = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('r2.direction = vector\({float}, {float}, {int})', function (float, float2, int) {
         Then('r2.direction = vector\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(ray.direction(r2), vector(float, float2, float3)))
         });
//
//
//4) Scenario: Scaling a ray # ../features/rays.feature:24
//   ? Given r ← ray(point(1, 2, 3), vector(0, 1, 0))
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
//   ? And m ← scaling(2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Given('m ← scaling\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('m ← scaling\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('m ← scaling\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('m ← scaling\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('m ← scaling\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('m ← scaling\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('m ← scaling\({float}, {float}, {int})', function (float, float2, int) {
         Given('m ← scaling\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           m = identity().scaling(float, float2, float3)
         });
//
//   ? When r2 ← transform(r, m)
//       Undefined. Implement with the following snippet:
//
//         When('r2 ← transform\(r, m)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then r2.origin = point(2, 6, 12)
//       Undefined. Implement with the following snippet:
//
//         Then('r2.origin = point\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('r2.origin = point\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('r2.origin = point\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('r2.origin = point\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('r2.origin = point\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('r2.origin = point\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('r2.origin = point\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('r2.origin = point\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r2.direction = vector(0, 3, 0)
//       Undefined. Implement with the following snippet:
//
//         Then('r2.direction = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('r2.direction = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('r2.direction = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('r2.direction = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('r2.direction = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('r2.direction = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('r2.direction = vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('r2.direction = vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });