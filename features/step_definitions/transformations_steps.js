const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const matrix = require('../../matrix')
const { tuple, point, vector } = require('../../tuple')
const { transformation, translation } = require('../../transformation')
let transform
//1) Scenario: Multiplying by a translation matrix # ../transformations.feature:3
//   ? Given transform ← translation(5, -3, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← translation\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← translation\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← translation\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← translation\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← translation\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← translation\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← translation\\({float}, {float}, {int})', function (float, float2, int) {
        Given('transform ← translation\\({float}, {float}, {float})', function (x, y, z) {
          // Write code here that turns the phrase above into concrete actions
          transform = new transformation().translation(x, y, z)
        });
//
//   - And p ← point(-3, 4, 5) # tuples_steps.js:127
//   ? Then transform * p = point(2, 1, 7)
//       Undefined. Implement with the following snippet:
//
//         Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
        Then('transform * p = point\\({float}, {float}, {float})', function (x, y, z) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(transform.mul(p), point(x, y, z)))
        });
//
//
//2) Scenario: Multiplying by the inverse of a translation matrix # ../transformations.feature:8
//   ? Given transform ← translation(5, -3, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← translation\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← translation\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← translation\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← translation\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← translation\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← translation\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← translation\\({float}, {float}, {int})', function (float, float2, int) {
        // Given('transform ← translation\\({float}, {float}, {float})', function (x, y, z) {
        //   // Write code here that turns the phrase above into concrete actions
        //   transform = transformation.translation(x, y, z)
        // });
let inv
//   ? And inv ← inverse(transform)
//       Undefined. Implement with the following snippet:
//
        Given('inv ← inverse\\(transform)', function () {
          // Write code here that turns the phrase above into concrete actions
          inv = transform.inverse()
        });
//
//   - And p ← point(-3, 4, 5) # tuples_steps.js:127
//   ? Then inv * p = point(-8, 7, 3)
//       Undefined. Implement with the following snippet:
//
//         Then('inv * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('inv * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('inv * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('inv * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('inv * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('inv * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('inv * p = point\\({float}, {float}, {int})', function (float, float2, int) {
        Then('inv * p = point\\({float}, {float}, {float})', function (x, y, z) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(inv.mul(p), point(x, y, z)))
        });
//
//
//3) Scenario: Translation does not affect vectors # ../transformations.feature:14
//   ? Given transform ← translation(5, -3, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← translation\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← translation\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← translation\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← translation\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← translation\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← translation\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← translation\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('transform ← translation\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And v ← vector(-3, 4, 5) # tuples_steps.js:145
//   ? Then transform * v = v
//       Undefined. Implement with the following snippet:
//
        Then('transform * v = v', function () {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(transform.mul(v), v))
        });
//
//
//4) Scenario: A scaling matrix applied to a point # ../transformations.feature:19
//   ? Given transform ← scaling(2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← scaling\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← scaling\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← scaling\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← scaling\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← scaling\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← scaling\\({float}, {float}, {int})', function (float, float2, int) {
        Given('transform ← scaling\\({float}, {float}, {float})', function (x, y, z) {
          // Write code here that turns the phrase above into concrete actions
          transform = new transformation().scaling(x, y, z)
        });
//
//   - And p ← point(-4, 6, 8) # tuples_steps.js:127
//   ? Then transform * p = point(-8, 18, 32)
//       Undefined. Implement with the following snippet:
//
//         Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//5) Scenario: A scaling matrix applied to a vector # ../transformations.feature:24
//   ? Given transform ← scaling(2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← scaling\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← scaling\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← scaling\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← scaling\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← scaling\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← scaling\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('transform ← scaling\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And v ← vector(-4, 6, 8) # tuples_steps.js:145
//   ? Then transform * v = vector(-8, 18, 32)
//       Undefined. Implement with the following snippet:
//
//         Then('transform * v = vector\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('transform * v = vector\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('transform * v = vector\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('transform * v = vector\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('transform * v = vector\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('transform * v = vector\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('transform * v = vector\\({float}, {float}, {int})', function (float, float2, int) {
        Then('transform * v = vector\\({float}, {float}, {float})', function (x, y, z) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(transform.mul(v), vector(x, y, z)))
        });
//
//
//6) Scenario: Multiplying by the inverse of a scaling matrix # ../transformations.feature:29
//   ? Given transform ← scaling(2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← scaling\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← scaling\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← scaling\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← scaling\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← scaling\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← scaling\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('transform ← scaling\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And inv ← inverse(transform)
//       Undefined. Implement with the following snippet:
//
//         Given('inv ← inverse\\(transform)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And v ← vector(-4, 6, 8) # tuples_steps.js:145
//   ? Then inv * v = vector(-2, 2, 2)
//       Undefined. Implement with the following snippet:
//
//         Then('inv * v = vector\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('inv * v = vector\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('inv * v = vector\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('inv * v = vector\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('inv * v = vector\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('inv * v = vector\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('inv * v = vector\\({float}, {float}, {int})', function (float, float2, int) {
        Then('inv * v = vector\\({float}, {float}, {float})', function (x, y, z) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(inv.mul(v), vector(x, y, z)))
        });
//
//
//7) Scenario: Reflection is scaling by a negative value # ../transformations.feature:35
//   ? Given transform ← scaling(-1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('transform ← scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('transform ← scaling\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('transform ← scaling\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('transform ← scaling\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('transform ← scaling\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('transform ← scaling\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('transform ← scaling\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('transform ← scaling\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - And p ← point(2, 3, 4) # tuples_steps.js:127
//   ? Then transform * p = point(-2, 3, 4)
//       Undefined. Implement with the following snippet:
//
//         Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//8) Scenario: Rotating a point around the x axis # ../transformations.feature:40
//   ✔ Given p ← point(0, 1, 0) # tuples_steps.js:127
//   ? And half_quarter ← rotation_x(π / 4)
//       Undefined. Implement with the following snippet:
let half_quarter
        Given('half_quarter ← rotation_x\\(π \/ {int})', function (d) {
        // Given('half_quarter ← rotation_x\\(π \/ {float})', function (float) {
          // Write code here that turns the phrase above into concrete actions
          half_quarter = new transformation().rotation_x(Math.PI / d)
        });
//
//   ? And full_quarter ← rotation_x(π / 2)
//       Undefined. Implement with the following snippet:
let full_quarter
        Given('full_quarter ← rotation_x\\(π \/ {int})', function (d) {
        // Given('full_quarter ← rotation_x\\(π \\/ {float})', function (float) {
          // Write code here that turns the phrase above into concrete actions
          full_quarter = new transformation().rotation_x(Math.PI / d)
        });
//
//   ? Then half_quarter * p = point(0, √2/2, √2/2)
//       Undefined. Implement with the following snippet:
//
        Then('half_quarter * p = point\\({float}, √{int}\\/{int}, √{int}\\/{int})', function (a, b, c, d, e) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{int}, √{int}\\/{float})', function (int, int2, int3, int4, float) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{int}, √{float}\\/{int})', function (int, int2, int3, float, int4) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{int}, √{float}\\/{float})', function (int, int2, int3, float, float2) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{float}, √{int}\\/{int})', function (int, int2, float, int3, int4) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{float}, √{int}\\/{float})', function (int, int2, float, int3, float2) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{float}, √{float}\\/{int})', function (int, int2, float, float2, int3) {
//         // Then('half_quarter * p = point\\({int}, √{int}\\/{float}, √{float}\\/{float})', function (int, int2, float, float2, float3) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{int}, √{int}\\/{int})', function (int, float, int2, int3, int4) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{int}, √{int}\\/{float})', function (int, float, int2, int3, float2) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{int}, √{float}\\/{int})', function (int, float, int2, float2, int3) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{int}, √{float}\\/{float})', function (int, float, int2, float2, float3) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{float}, √{int}\\/{int})', function (int, float, float2, int2, int3) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{float}, √{int}\\/{float})', function (int, float, float2, int2, float3) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{float}, √{float}\\/{int})', function (int, float, float2, float3, int2) {
//         // Then('half_quarter * p = point\\({int}, √{float}\\/{float}, √{float}\\/{float})', function (int, float, float2, float3, float4) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{int}, √{int}\\/{int})', function (float, int, int2, int3, int4) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{int}, √{int}\\/{float})', function (float, int, int2, int3, float2) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{int}, √{float}\\/{int})', function (float, int, int2, float2, int3) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{int}, √{float}\\/{float})', function (float, int, int2, float2, float3) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{float}, √{int}\\/{int})', function (float, int, float2, int2, int3) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{float}, √{int}\\/{float})', function (float, int, float2, int2, float3) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{float}, √{float}\\/{int})', function (float, int, float2, float3, int2) {
//         // Then('half_quarter * p = point\\({float}, √{int}\\/{float}, √{float}\\/{float})', function (float, int, float2, float3, float4) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{int}, √{int}\\/{int})', function (float, float2, int, int2, int3) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{int}, √{int}\\/{float})', function (float, float2, int, int2, float3) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{int}, √{float}\\/{int})', function (float, float2, int, float3, int2) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{int}, √{float}\\/{float})', function (float, float2, int, float3, float4) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{float}, √{int}\\/{int})', function (float, float2, float3, int, int2) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{float}, √{int}\\/{float})', function (float, float2, float3, int, float4) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{float}, √{float}\\/{int})', function (float, float2, float3, float4, int) {
//         // Then('half_quarter * p = point\\({float}, √{float}\\/{float}, √{float}\\/{float})', function (float, float2, float3, float4, float5) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(half_quarter.mul(p), point(a, Math.sqrt(b) / c, Math.sqrt(d) / e)))
        });
//
//   ? And full_quarter * p = point(0, 0, 1)
//       Undefined. Implement with the following snippet:
//
//         Then('full_quarter * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('full_quarter * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('full_quarter * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('full_quarter * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('full_quarter * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('full_quarter * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('full_quarter * p = point\\({float}, {float}, {int})', function (float, float2, int) {
        Then('full_quarter * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(full_quarter.mul(p), point(float, float2, float3)))
        });
//
//
//9) Scenario: The inverse of an x-rotation rotates in the opposite direction # ../transformations.feature:47
//   ✔ Given p ← point(0, 1, 0) # tuples_steps.js:127
//   ? And half_quarter ← rotation_x(π / 4)
//       Undefined. Implement with the following snippet:
//
//         Given('half_quarter ← rotation_x\\(π \\/ {int})', function (int) {
//         // Given('half_quarter ← rotation_x\\(π \\/ {float})', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And inv ← inverse(half_quarter)
//       Undefined. Implement with the following snippet:
//
        Given('inv ← inverse\\(half_quarter)', function () {
          // Write code here that turns the phrase above into concrete actions
          inv = half_quarter.inverse()
        });
//
//   ? Then inv * p = point(0, √2/2, -√2/2)
//       Undefined. Implement with the following snippet:
//
//         Then('inv * p = point\\({int}, √{int}\\/{int}, {float}√{int}\\/{int})', function (int, int2, int3, float, int4, int5) {
//         // Then('inv * p = point\\({int}, √{int}\\/{int}, {float}√{int}\\/{float})', function (int, int2, int3, float, int4, float2) {
//         // Then('inv * p = point\\({int}, √{int}\\/{int}, {float}√{float}\\/{int})', function (int, int2, int3, float, float2, int4) {
//         // Then('inv * p = point\\({int}, √{int}\\/{int}, {float}√{float}\\/{float})', function (int, int2, int3, float, float2, float3) {
//         // Then('inv * p = point\\({int}, √{int}\\/{float}, {float}√{int}\\/{int})', function (int, int2, float, float2, int3, int4) {
//         // Then('inv * p = point\\({int}, √{int}\\/{float}, {float}√{int}\\/{float})', function (int, int2, float, float2, int3, float3) {
//         // Then('inv * p = point\\({int}, √{int}\\/{float}, {float}√{float}\\/{int})', function (int, int2, float, float2, float3, int3) {
//         // Then('inv * p = point\\({int}, √{int}\\/{float}, {float}√{float}\\/{float})', function (int, int2, float, float2, float3, float4) {
//         // Then('inv * p = point\\({int}, √{float}\\/{int}, {float}√{int}\\/{int})', function (int, float, int2, float2, int3, int4) {
//         // Then('inv * p = point\\({int}, √{float}\\/{int}, {float}√{int}\\/{float})', function (int, float, int2, float2, int3, float3) {
//         // Then('inv * p = point\\({int}, √{float}\\/{int}, {float}√{float}\\/{int})', function (int, float, int2, float2, float3, int3) {
//         // Then('inv * p = point\\({int}, √{float}\\/{int}, {float}√{float}\\/{float})', function (int, float, int2, float2, float3, float4) {
//         // Then('inv * p = point\\({int}, √{float}\\/{float}, {float}√{int}\\/{int})', function (int, float, float2, float3, int2, int3) {
//         // Then('inv * p = point\\({int}, √{float}\\/{float}, {float}√{int}\\/{float})', function (int, float, float2, float3, int2, float4) {
//         // Then('inv * p = point\\({int}, √{float}\\/{float}, {float}√{float}\\/{int})', function (int, float, float2, float3, float4, int2) {
//         // Then('inv * p = point\\({int}, √{float}\\/{float}, {float}√{float}\\/{float})', function (int, float, float2, float3, float4, float5) {
//         // Then('inv * p = point\\({float}, √{int}\\/{int}, {float}√{int}\\/{int})', function (float, int, int2, float2, int3, int4) {
//         // Then('inv * p = point\\({float}, √{int}\\/{int}, {float}√{int}\\/{float})', function (float, int, int2, float2, int3, float3) {
//         // Then('inv * p = point\\({float}, √{int}\\/{int}, {float}√{float}\\/{int})', function (float, int, int2, float2, float3, int3) {
//         // Then('inv * p = point\\({float}, √{int}\\/{int}, {float}√{float}\\/{float})', function (float, int, int2, float2, float3, float4) {
//         // Then('inv * p = point\\({float}, √{int}\\/{float}, {float}√{int}\\/{int})', function (float, int, float2, float3, int2, int3) {
//         // Then('inv * p = point\\({float}, √{int}\\/{float}, {float}√{int}\\/{float})', function (float, int, float2, float3, int2, float4) {
//         // Then('inv * p = point\\({float}, √{int}\\/{float}, {float}√{float}\\/{int})', function (float, int, float2, float3, float4, int2) {
//         // Then('inv * p = point\\({float}, √{int}\\/{float}, {float}√{float}\\/{float})', function (float, int, float2, float3, float4, float5) {
//         // Then('inv * p = point\\({float}, √{float}\\/{int}, {float}√{int}\\/{int})', function (float, float2, int, float3, int2, int3) {
//         // Then('inv * p = point\\({float}, √{float}\\/{int}, {float}√{int}\\/{float})', function (float, float2, int, float3, int2, float4) {
//         // Then('inv * p = point\\({float}, √{float}\\/{int}, {float}√{float}\\/{int})', function (float, float2, int, float3, float4, int2) {
//         // Then('inv * p = point\\({float}, √{float}\\/{int}, {float}√{float}\\/{float})', function (float, float2, int, float3, float4, float5) {
//         // Then('inv * p = point\\({float}, √{float}\\/{float}, {float}√{int}\\/{int})', function (float, float2, float3, float4, int, int2) {
//         // Then('inv * p = point\\({float}, √{float}\\/{float}, {float}√{int}\\/{float})', function (float, float2, float3, float4, int, float5) {
//         // Then('inv * p = point\\({float}, √{float}\\/{float}, {float}√{float}\\/{int})', function (float, float2, float3, float4, float5, int) {
        Then('inv * p = point\\({float}, √{float}\\/{float}, {float}√{float}\\/{float})', function (float, float2, float3, float4, float5, float6) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(inv.mul(p), point(float, Math.sqrt(float2) / float3, -Math.sqrt(float5) / float6)))
        });

//
//10) Scenario: Rotating a point around the y axis # ../transformations.feature:53
//    ✔ Given p ← point(0, 0, 1) # tuples_steps.js:127
//    ? And half_quarter ← rotation_y(π / 4)
//        Undefined. Implement with the following snippet:
//
         Given('half_quarter ← rotation_y\\(π \/ {int})', function (int) {
         // Given('half_quarter ← rotation_y\\(π \\/ {float})', function (float) {
           // Write code here that turns the phrase above into concrete actions
           half_quarter = new transformation().rotation_y(Math.PI / int)
         });
//
//    ? And full_quarter ← rotation_y(π / 2)
//        Undefined. Implement with the following snippet:
//
         Given('full_quarter ← rotation_y\\(π \/ {int})', function (int) {
         // Given('full_quarter ← rotation_y\\(π \\/ {float})', function (float) {
           // Write code here that turns the phrase above into concrete actions
           full_quarter = new transformation().rotation_y(Math.PI / int)
         });
//
//    ? Then half_quarter * p = point(√2/2, 0, √2/2)
//        Undefined. Implement with the following snippet:
//
//          Then('half_quarter * p = point\\(√{int}\\/{int}, {int}, √{int}\\/{int})', function (int, int2, int3, int4, int5) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {int}, √{int}\\/{float})', function (int, int2, int3, int4, float) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {int}, √{float}\\/{int})', function (int, int2, int3, float, int4) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {int}, √{float}\\/{float})', function (int, int2, int3, float, float2) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {float}, √{int}\\/{int})', function (int, int2, float, int3, int4) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {float}, √{int}\\/{float})', function (int, int2, float, int3, float2) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {float}, √{float}\\/{int})', function (int, int2, float, float2, int3) {
//          // Then('half_quarter * p = point\\(√{int}\\/{int}, {float}, √{float}\\/{float})', function (int, int2, float, float2, float3) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {int}, √{int}\\/{int})', function (int, float, int2, int3, int4) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {int}, √{int}\\/{float})', function (int, float, int2, int3, float2) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {int}, √{float}\\/{int})', function (int, float, int2, float2, int3) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {int}, √{float}\\/{float})', function (int, float, int2, float2, float3) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {float}, √{int}\\/{int})', function (int, float, float2, int2, int3) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {float}, √{int}\\/{float})', function (int, float, float2, int2, float3) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {float}, √{float}\\/{int})', function (int, float, float2, float3, int2) {
//          // Then('half_quarter * p = point\\(√{int}\\/{float}, {float}, √{float}\\/{float})', function (int, float, float2, float3, float4) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {int}, √{int}\\/{int})', function (float, int, int2, int3, int4) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {int}, √{int}\\/{float})', function (float, int, int2, int3, float2) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {int}, √{float}\\/{int})', function (float, int, int2, float2, int3) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {int}, √{float}\\/{float})', function (float, int, int2, float2, float3) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {float}, √{int}\\/{int})', function (float, int, float2, int2, int3) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {float}, √{int}\\/{float})', function (float, int, float2, int2, float3) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {float}, √{float}\\/{int})', function (float, int, float2, float3, int2) {
//          // Then('half_quarter * p = point\\(√{float}\\/{int}, {float}, √{float}\\/{float})', function (float, int, float2, float3, float4) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {int}, √{int}\\/{int})', function (float, float2, int, int2, int3) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {int}, √{int}\\/{float})', function (float, float2, int, int2, float3) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {int}, √{float}\\/{int})', function (float, float2, int, float3, int2) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {int}, √{float}\\/{float})', function (float, float2, int, float3, float4) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {float}, √{int}\\/{int})', function (float, float2, float3, int, int2) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {float}, √{int}\\/{float})', function (float, float2, float3, int, float4) {
//          // Then('half_quarter * p = point\\(√{float}\\/{float}, {float}, √{float}\\/{int})', function (float, float2, float3, float4, int) {
         Then('half_quarter * p = point\\(√{float}\\/{float}, {float}, √{float}\\/{float})', function (float, float2, float3, float4, float5) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(half_quarter.mul(p), point(Math.sqrt(float) / float2, float3, Math.sqrt(float4) / float5)))
         });
//
//    ? And full_quarter * p = point(1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('full_quarter * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('full_quarter * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('full_quarter * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('full_quarter * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('full_quarter * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('full_quarter * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('full_quarter * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('full_quarter * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//11) Scenario: Rotating a point around the z axis # ../transformations.feature:60
//    ✔ Given p ← point(0, 1, 0) # tuples_steps.js:127
//    ? And half_quarter ← rotation_z(π / 4)
//        Undefined. Implement with the following snippet:
//
         Given('half_quarter ← rotation_z\\(π \/ {int})', function (int) {
         // Given('half_quarter ← rotation_z\\(π \\/ {float})', function (float) {
           // Write code here that turns the phrase above into concrete actions
           half_quarter = new transformation().rotation_z(Math.PI / int)
         });
//
//    ? And full_quarter ← rotation_z(π / 2)
//        Undefined. Implement with the following snippet:
//
         Given('full_quarter ← rotation_z\\(π \/ {int})', function (int) {
         // Given('full_quarter ← rotation_z\\(π \\/ {float})', function (float) {
           // Write code here that turns the phrase above into concrete actions
           full_quarter = new transformation().rotation_z(Math.PI / int)
         });
//
//    ? Then half_quarter * p = point(-√2/2, √2/2, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{int}\\/{int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{int}\\/{int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{int}\\/{float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{int}\\/{float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{float}\\/{int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{float}\\/{int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{float}\\/{float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{int}, √{float}\\/{float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{int}\\/{int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{int}\\/{int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{int}\\/{float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{int}\\/{float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{float}\\/{int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{float}\\/{int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{float}\\/{float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Then('half_quarter * p = point\\({float}√{int}\\/{float}, √{float}\\/{float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{int}\\/{int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{int}\\/{int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{int}\\/{float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{int}\\/{float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{float}\\/{int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{float}\\/{int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{float}\\/{float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{int}, √{float}\\/{float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{int}\\/{int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{int}\\/{int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{int}\\/{float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{int}\\/{float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{float}\\/{int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{float}\\/{int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{float}\\/{float}, {int})', function (float, float2, float3, float4, float5, int) {
         Then('half_quarter * p = point\\({float}√{float}\\/{float}, √{float}\\/{float}, {float})', function (float, float2, float3, float4, float5, float6) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(half_quarter.mul(p), point(-Math.sqrt(float2) / float3, Math.sqrt(float4) / float5, float6)))
         });
//
//    ? And full_quarter * p = point(-1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('full_quarter * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('full_quarter * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('full_quarter * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('full_quarter * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('full_quarter * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('full_quarter * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('full_quarter * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('full_quarter * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//12) Scenario: A shearing transformation moves x in proportion to y # ../transformations.feature:67
//    ? Given transform ← shearing(1, 0, 0, 0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {int})', function (int, int2, int3, int4, int5, int6) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {float})', function (int, int2, int3, int4, int5, float) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {int})', function (int, int2, int3, int4, float, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {float})', function (int, int2, int3, int4, float, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {int})', function (int, int2, int3, float, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {float})', function (int, int2, int3, float, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {int})', function (int, int2, int3, float, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {float})', function (int, int2, int3, float, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {int})', function (int, int2, float, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {float})', function (int, int2, float, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {int})', function (int, int2, float, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {float})', function (int, int2, float, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {int})', function (int, int2, float, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {float})', function (int, int2, float, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {int})', function (int, int2, float, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {float})', function (int, int2, float, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {int})', function (int, float, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {float})', function (int, float, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {int})', function (int, float, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {float})', function (int, float, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {int})', function (int, float, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {float})', function (int, float, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {int})', function (int, float, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {float})', function (int, float, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {int})', function (int, float, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {float})', function (int, float, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {int})', function (int, float, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {float})', function (int, float, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {int})', function (int, float, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {float})', function (int, float, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {int})', function (int, float, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {float})', function (int, float, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {int})', function (float, float2, float3, float4, float5, int) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(2, 3, 4) # tuples_steps.js:127
//    ? Then transform * p = point(5, 3, 4)
//        Undefined. Implement with the following snippet:
//
//          Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//13) Scenario: A shearing transformation moves x in proportion to z # ../transformations.feature:72
//    ? Given transform ← shearing(0, 1, 0, 0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {int})', function (int, int2, int3, int4, int5, int6) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {float})', function (int, int2, int3, int4, int5, float) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {int})', function (int, int2, int3, int4, float, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {float})', function (int, int2, int3, int4, float, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {int})', function (int, int2, int3, float, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {float})', function (int, int2, int3, float, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {int})', function (int, int2, int3, float, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {float})', function (int, int2, int3, float, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {int})', function (int, int2, float, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {float})', function (int, int2, float, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {int})', function (int, int2, float, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {float})', function (int, int2, float, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {int})', function (int, int2, float, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {float})', function (int, int2, float, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {int})', function (int, int2, float, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {float})', function (int, int2, float, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {int})', function (int, float, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {float})', function (int, float, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {int})', function (int, float, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {float})', function (int, float, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {int})', function (int, float, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {float})', function (int, float, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {int})', function (int, float, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {float})', function (int, float, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {int})', function (int, float, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {float})', function (int, float, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {int})', function (int, float, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {float})', function (int, float, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {int})', function (int, float, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {float})', function (int, float, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {int})', function (int, float, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {float})', function (int, float, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {int})', function (float, float2, float3, float4, float5, int) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(2, 3, 4) # tuples_steps.js:127
//    ? Then transform * p = point(6, 3, 4)
//        Undefined. Implement with the following snippet:
//
//          Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//14) Scenario: A shearing transformation moves y in proportion to x # ../transformations.feature:77
//    ? Given transform ← shearing(0, 0, 1, 0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {int})', function (int, int2, int3, int4, int5, int6) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {float})', function (int, int2, int3, int4, int5, float) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {int})', function (int, int2, int3, int4, float, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {float})', function (int, int2, int3, int4, float, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {int})', function (int, int2, int3, float, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {float})', function (int, int2, int3, float, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {int})', function (int, int2, int3, float, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {float})', function (int, int2, int3, float, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {int})', function (int, int2, float, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {float})', function (int, int2, float, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {int})', function (int, int2, float, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {float})', function (int, int2, float, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {int})', function (int, int2, float, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {float})', function (int, int2, float, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {int})', function (int, int2, float, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {float})', function (int, int2, float, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {int})', function (int, float, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {float})', function (int, float, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {int})', function (int, float, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {float})', function (int, float, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {int})', function (int, float, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {float})', function (int, float, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {int})', function (int, float, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {float})', function (int, float, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {int})', function (int, float, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {float})', function (int, float, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {int})', function (int, float, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {float})', function (int, float, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {int})', function (int, float, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {float})', function (int, float, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {int})', function (int, float, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {float})', function (int, float, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {int})', function (float, float2, float3, float4, float5, int) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(2, 3, 4) # tuples_steps.js:127
//    ? Then transform * p = point(2, 5, 4)
//        Undefined. Implement with the following snippet:
//
//          Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//15) Scenario: A shearing transformation moves y in proportion to z # ../transformations.feature:82
//    ? Given transform ← shearing(0, 0, 0, 1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {int})', function (int, int2, int3, int4, int5, int6) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {float})', function (int, int2, int3, int4, int5, float) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {int})', function (int, int2, int3, int4, float, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {float})', function (int, int2, int3, int4, float, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {int})', function (int, int2, int3, float, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {float})', function (int, int2, int3, float, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {int})', function (int, int2, int3, float, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {float})', function (int, int2, int3, float, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {int})', function (int, int2, float, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {float})', function (int, int2, float, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {int})', function (int, int2, float, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {float})', function (int, int2, float, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {int})', function (int, int2, float, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {float})', function (int, int2, float, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {int})', function (int, int2, float, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {float})', function (int, int2, float, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {int})', function (int, float, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {float})', function (int, float, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {int})', function (int, float, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {float})', function (int, float, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {int})', function (int, float, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {float})', function (int, float, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {int})', function (int, float, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {float})', function (int, float, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {int})', function (int, float, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {float})', function (int, float, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {int})', function (int, float, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {float})', function (int, float, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {int})', function (int, float, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {float})', function (int, float, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {int})', function (int, float, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {float})', function (int, float, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {int})', function (float, float2, float3, float4, float5, int) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(2, 3, 4) # tuples_steps.js:127
//    ? Then transform * p = point(2, 7, 4)
//        Undefined. Implement with the following snippet:
//
//          Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//16) Scenario: A shearing transformation moves z in proportion to x # ../transformations.feature:87
//    ? Given transform ← shearing(0, 0, 0, 0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {int})', function (int, int2, int3, int4, int5, int6) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {float})', function (int, int2, int3, int4, int5, float) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {int})', function (int, int2, int3, int4, float, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {float})', function (int, int2, int3, int4, float, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {int})', function (int, int2, int3, float, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {float})', function (int, int2, int3, float, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {int})', function (int, int2, int3, float, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {float})', function (int, int2, int3, float, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {int})', function (int, int2, float, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {float})', function (int, int2, float, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {int})', function (int, int2, float, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {float})', function (int, int2, float, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {int})', function (int, int2, float, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {float})', function (int, int2, float, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {int})', function (int, int2, float, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {float})', function (int, int2, float, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {int})', function (int, float, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {float})', function (int, float, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {int})', function (int, float, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {float})', function (int, float, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {int})', function (int, float, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {float})', function (int, float, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {int})', function (int, float, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {float})', function (int, float, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {int})', function (int, float, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {float})', function (int, float, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {int})', function (int, float, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {float})', function (int, float, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {int})', function (int, float, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {float})', function (int, float, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {int})', function (int, float, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {float})', function (int, float, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {int})', function (float, float2, float3, float4, float5, int) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(2, 3, 4) # tuples_steps.js:127
//    ? Then transform * p = point(2, 3, 6)
//        Undefined. Implement with the following snippet:
//
//          Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//17) Scenario: A shearing transformation moves z in proportion to y # ../transformations.feature:92
//    ? Given transform ← shearing(0, 0, 0, 0, 0, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {int})', function (int, int2, int3, int4, int5, int6) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {int}, {float})', function (int, int2, int3, int4, int5, float) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {int})', function (int, int2, int3, int4, float, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {int}, {float}, {float})', function (int, int2, int3, int4, float, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {int})', function (int, int2, int3, float, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {int}, {float})', function (int, int2, int3, float, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {int})', function (int, int2, int3, float, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {int}, {float}, {float}, {float})', function (int, int2, int3, float, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {int})', function (int, int2, float, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {int}, {float})', function (int, int2, float, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {int})', function (int, int2, float, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {int}, {float}, {float})', function (int, int2, float, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {int})', function (int, int2, float, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {int}, {float})', function (int, int2, float, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {int})', function (int, int2, float, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {int}, {float}, {float}, {float}, {float})', function (int, int2, float, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {int})', function (int, float, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {int}, {float})', function (int, float, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {int})', function (int, float, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {int}, {float}, {float})', function (int, float, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {int})', function (int, float, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {int}, {float})', function (int, float, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {int})', function (int, float, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {int}, {float}, {float}, {float})', function (int, float, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {int})', function (int, float, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {int}, {float})', function (int, float, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {int})', function (int, float, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {int}, {float}, {float})', function (int, float, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {int})', function (int, float, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {int}, {float})', function (int, float, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {int})', function (int, float, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({int}, {float}, {float}, {float}, {float}, {float})', function (int, float, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {int})', function (float, int, int2, int3, int4, int5) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {int}, {float})', function (float, int, int2, int3, int4, float2) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {int})', function (float, int, int2, int3, float2, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {int}, {float}, {float})', function (float, int, int2, int3, float2, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {int})', function (float, int, int2, float2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {int}, {float})', function (float, int, int2, float2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {int})', function (float, int, int2, float2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {int}, {float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {int})', function (float, int, float2, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {int}, {float})', function (float, int, float2, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {int})', function (float, int, float2, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {int}, {float}, {float})', function (float, int, float2, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {int})', function (float, int, float2, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {int}, {float})', function (float, int, float2, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {int})', function (float, int, float2, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {int}, {float}, {float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {int})', function (float, float2, int, int2, int3, int4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {int}, {float})', function (float, float2, int, int2, int3, float3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {int})', function (float, float2, int, int2, float3, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {int}, {float}, {float})', function (float, float2, int, int2, float3, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {int})', function (float, float2, int, float3, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {int}, {float})', function (float, float2, int, float3, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {int})', function (float, float2, int, float3, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {int}, {float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {int})', function (float, float2, float3, int, int2, int3) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {int}, {float})', function (float, float2, float3, int, int2, float4) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {int})', function (float, float2, float3, int, float4, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {int}, {float}, {float})', function (float, float2, float3, int, float4, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {int})', function (float, float2, float3, float4, int, int2) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {int}, {float})', function (float, float2, float3, float4, int, float5) {
//          // Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {int})', function (float, float2, float3, float4, float5, int) {
         Given('transform ← shearing\\({float}, {float}, {float}, {float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
           // Write code here that turns the phrase above into concrete actions
           transform = new transformation().shearing(float, float2, float3, float4, float5, float6)
         });
//
//    - And p ← point(2, 3, 4) # tuples_steps.js:127
//    ? Then transform * p = point(2, 3, 7)
//        Undefined. Implement with the following snippet:
//
//          Then('transform * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('transform * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('transform * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('transform * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('transform * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('transform * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('transform * p = point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('transform * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//18) Scenario: Individual transformations are applied in sequence # ../transformations.feature:97
//    ✔ Given p ← point(1, 0, 1) # tuples_steps.js:127
//    ? And A ← rotation_x(π / 2)
//        Undefined. Implement with the following snippet:
//
         Given('A ← rotation_x\\(π \/ {int})', function (int) {
         // Given('A ← rotation_x\\(π \\/ {float})', function (float) {
           // Write code here that turns the phrase above into concrete actions
           A = new transformation().rotation_x(Math.PI / int)
         });
//
//    ? And B ← scaling(5, 5, 5)
//        Undefined. Implement with the following snippet:
//
//          Given('B ← scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('B ← scaling\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('B ← scaling\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('B ← scaling\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('B ← scaling\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('B ← scaling\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('B ← scaling\\({float}, {float}, {int})', function (float, float2, int) {
         Given('B ← scaling\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           B = new transformation().scaling(float, float2, float3)
         });
//
//    ? And C ← translation(10, 5, 7)
//        Undefined. Implement with the following snippet:
//
//          Given('C ← translation\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('C ← translation\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('C ← translation\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('C ← translation\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('C ← translation\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('C ← translation\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('C ← translation\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('C ← translation\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When p2 ← A * p
//        Undefined. Implement with the following snippet:
// let p2
         When('p2 ← A * p', function () {
           // Write code here that turns the phrase above into concrete actions
           p2 = A.mul(p)
         });
//
//    ? Then p2 = point(1, -1, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('p2 = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('p2 = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('p2 = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('p2 = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('p2 = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('p2 = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('p2 = point\\({float}, {float}, {int})', function (float, float2, int) {
         Then('p2 = point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(p2, point(float, float2, float3)))
         });
//
//    ? When p3 ← B * p2
//        Undefined. Implement with the following snippet:
//
         When('p3 ← B * p2', function () {
           // Write code here that turns the phrase above into concrete actions
           p3 = B.mul(p2)
         });
//
//    ? Then p3 = point(5, -5, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('p3 = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('p3 = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('p3 = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('p3 = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('p3 = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('p3 = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('p3 = point\\({float}, {float}, {int})', function (float, float2, int) {
         Then('p3 = point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(p3, point(float, float2, float3)))
         });
//
//    ? When p4 ← C * p3
//        Undefined. Implement with the following snippet:
//
         When('p4 ← C * p3', function () {
           // Write code here that turns the phrase above into concrete actions
           p4 = C.mul(p3)
         });
//
//    ? Then p4 = point(15, 0, 7)
//        Undefined. Implement with the following snippet:
//
//          Then('p4 = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('p4 = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('p4 = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('p4 = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('p4 = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('p4 = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('p4 = point\\({float}, {float}, {int})', function (float, float2, int) {
         Then('p4 = point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(p4, point(float, float2, float3)))
         });
//
//
//19) Scenario: Chained transformations must be applied in reverse order # ../transformations.feature:112
//    ✔ Given p ← point(1, 0, 1) # tuples_steps.js:127
//    ? And A ← rotation_x(π / 2)
//        Undefined. Implement with the following snippet:
//
        //  Given('A ← rotation_x\\(π \/ {int})', function (int) {
        //  // Given('A ← rotation_x\\(π \\/ {float})', function (float) {
        //    // Write code here that turns the phrase above into concrete actions
        //    A = new transformation().rotation_x(int)
        //  });
//
//    ? And B ← scaling(5, 5, 5)
//        Undefined. Implement with the following snippet:
//
//          Given('B ← scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('B ← scaling\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('B ← scaling\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('B ← scaling\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('B ← scaling\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('B ← scaling\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('B ← scaling\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('B ← scaling\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← translation(10, 5, 7)
//        Undefined. Implement with the following snippet:
//
//          Given('C ← translation\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('C ← translation\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('C ← translation\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('C ← translation\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('C ← translation\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('C ← translation\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('C ← translation\\({float}, {float}, {int})', function (float, float2, int) {
         Given('C ← translation\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           C = new transformation().translation(float, float2, float3)
         });
//
//    ? When T ← C * B * A
//        Undefined. Implement with the following snippet:
//
         When('T ← C * B * A', function () {
           // Write code here that turns the phrase above into concrete actions
           T = new transformation()
                   .rotation_x(Math.PI / 2)
                   .scaling(5, 5, 5)
                   .translation(10, 5, 7)
         });
//
//    ? Then T * p = point(15, 0, 7)
//        Undefined. Implement with the following snippet:
//
//          Then('T * p = point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('T * p = point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('T * p = point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('T * p = point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('T * p = point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('T * p = point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('T * p = point\\({float}, {float}, {int})', function (float, float2, int) {
         Then('T * p = point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(T.mul(p), point(float, float2, float3)))
         });
//
//
//20) Scenario: The transformation matrix for the default orientation # ../transformations.feature:120
//    ? Given from ← point(0, 0, 0)
//        Undefined. Implement with the following snippet:
let from, to
//          Given('from ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('from ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('from ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('from ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('from ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('from ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('from ← point\\({float}, {float}, {int})', function (float, float2, int) {
         Given('from ← point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           from = point(float, float2, float3)
         });
//
//    ? And to ← point(0, 0, -1)
//        Undefined. Implement with the following snippet:
//
//          Given('to ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('to ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('to ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('to ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('to ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('to ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('to ← point\\({float}, {float}, {int})', function (float, float2, int) {
         Given('to ← point\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           to = point(float, float2, float3)
         });
//
//    ? And up ← vector(0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('up ← vector\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('up ← vector\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('up ← vector\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('up ← vector\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('up ← vector\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('up ← vector\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('up ← vector\\({float}, {float}, {int})', function (float, float2, int) {
         Given('up ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           up = vector(float, float2, float3)
         });
//
//    ? When t ← view_transform(from, to, up)
//        Undefined. Implement with the following snippet:
//
//          When('t ← view_transform\\(from, to, up)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then t = identity_matrix
//        Undefined. Implement with the following snippet:
//
         Then('t = identity_matrix', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(t, matrix.IDENTITY))
         });
//
//
//21) Scenario: A view transformation matrix looking in positive z direction # ../transformations.feature:127
//    ? Given from ← point(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('from ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('from ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('from ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('from ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('from ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('from ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('from ← point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('from ← point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And to ← point(0, 0, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('to ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('to ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('to ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('to ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('to ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('to ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('to ← point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('to ← point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And up ← vector(0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('up ← vector\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('up ← vector\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('up ← vector\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('up ← vector\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('up ← vector\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('up ← vector\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('up ← vector\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('up ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When t ← view_transform(from, to, up)
//        Undefined. Implement with the following snippet:
//
//          When('t ← view_transform\\(from, to, up)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then t = scaling(-1, 1, -1)
//        Undefined. Implement with the following snippet:
//
//          Then('t = scaling\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('t = scaling\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('t = scaling\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('t = scaling\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('t = scaling\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('t = scaling\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('t = scaling\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('t = scaling\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//22) Scenario: The view transformation moves the world # ../transformations.feature:134
//    ? Given from ← point(0, 0, 8)
//        Undefined. Implement with the following snippet:
//
//          Given('from ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('from ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('from ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('from ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('from ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('from ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('from ← point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('from ← point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And to ← point(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('to ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('to ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('to ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('to ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('to ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('to ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('to ← point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('to ← point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And up ← vector(0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('up ← vector\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('up ← vector\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('up ← vector\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('up ← vector\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('up ← vector\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('up ← vector\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('up ← vector\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('up ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When t ← view_transform(from, to, up)
//        Undefined. Implement with the following snippet:
//
//          When('t ← view_transform\\(from, to, up)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then t = translation(0, 0, -8)
//        Undefined. Implement with the following snippet:
//
//          Then('t = translation\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('t = translation\\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('t = translation\\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('t = translation\\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('t = translation\\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('t = translation\\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('t = translation\\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('t = translation\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//23) Scenario: An arbitrary view transformation # ../transformations.feature:141
//    ? Given from ← point(1, 3, 2)
//        Undefined. Implement with the following snippet:
//
//          Given('from ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('from ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('from ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('from ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('from ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('from ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('from ← point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('from ← point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And to ← point(4, -2, 8)
//        Undefined. Implement with the following snippet:
//
//          Given('to ← point\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('to ← point\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('to ← point\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('to ← point\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('to ← point\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('to ← point\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('to ← point\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('to ← point\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And up ← vector(1, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('up ← vector\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('up ← vector\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('up ← vector\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('up ← vector\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('up ← vector\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('up ← vector\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('up ← vector\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('up ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When t ← view_transform(from, to, up)
//        Undefined. Implement with the following snippet:
//
//          When('t ← view_transform\\(from, to, up)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then t is the following 4x4 matrix:
//        | -0.50709 | 0.50709 | 0.67612  | -2.36643 |
//        | 0.76772  | 0.60609 | 0.12122  | -2.82843 |
//        | -0.35857 | 0.59761 | -0.71714 | 0.00000  |
//        | 0.00000  | 0.00000 | 0.00000  | 1.00000  |
//        Undefined. Implement with the following snippet:
//
//          Then('t is the following 4x4 matrix:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });