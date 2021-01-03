const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { sphere } = require('../../sphere')

const { intersection, intersections, hit } = require('../../intersection')
//
//1) Scenario: An intersection encapsulates t and object # ../features/intersections.feature:3
//   ? Given s ← sphere()
//       Undefined. Implement with the following snippet:
//
         Given('s ← new sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
           s = new sphere
         });
//
//   ? When i ← intersection(3.5, s)
//       Undefined. Implement with the following snippet:
let i
         When('i ← intersection\\({float}, s)', function (float) {
           // Write code here that turns the phrase above into concrete actions
           i = intersection(float, s)
         });
//
//   ? Then i.t = 3.5
//       Undefined. Implement with the following snippet:
//
         Then('i.t = {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(i.t, float))
         });
//
//   ? And i.object = s
//       Undefined. Implement with the following snippet:
//
         Then('i.object = s', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(i.object === s)
         });
//
//
//2) Scenario: Precomputing the state of an intersection # ../features/intersections.feature:9
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
//   ? And shape ← sphere()
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← sphere\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
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
//   ? Then comps.t = i.t
//       Undefined. Implement with the following snippet:
//
//         Then('comps.t = i.t', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.object = i.object
//       Undefined. Implement with the following snippet:
//
//         Then('comps.object = i.object', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.point = point(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.point = point\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('comps.point = point\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('comps.point = point\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('comps.point = point\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('comps.point = point\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('comps.point = point\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('comps.point = point\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('comps.point = point\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.eyev = vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.eyev = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('comps.eyev = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('comps.eyev = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('comps.eyev = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('comps.eyev = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('comps.eyev = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('comps.eyev = vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('comps.eyev = vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.normalv = vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.normalv = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('comps.normalv = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('comps.normalv = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('comps.normalv = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('comps.normalv = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('comps.normalv = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('comps.normalv = vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('comps.normalv = vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//3) Scenario: Precomputing the reflection vector # ../features/intersections.feature:20
//   ? Given shape ← plane()
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← plane\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 1, -1), vector(0, -√2/2, √2/2))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, int5, int6, int7) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, int5, int6, float3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, int5, float3, int6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, int5, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, int4, float3, int5, int6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, int4, float3, int5, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, int4, float3, float4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, int4, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, int4, int5, int6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, int4, int5, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, int4, float4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, int4, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, int3, float2, float3, float4, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, int3, float2, float3, float4, int4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, int3, float2, float3, float4, float5, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, int3, float2, float3, float4, float5, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, int4, int5, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, int4, float4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, int4, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, int3, float4, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, int3, float4, int4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, int3, float4, float5, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, int3, float4, float5, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, int3, int4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, int3, float5, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, int3, float5, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, int2, float2, float3, float4, float5, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, int2, float2, float3, float4, float5, int3, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, int2, float2, float3, float4, float5, float6, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, int2, float2, float3, float4, float5, float6, float7) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, int4, int5, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, int4, float4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, int4, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, int3, float4, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, int3, float4, int4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, int3, float4, float5, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, int3, float4, float5, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, int3, int4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, int3, float5, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, int3, float5, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, int2, float3, float4, float5, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, int2, float3, float4, float5, int3, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, int2, float3, float4, float5, float6, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, int2, float3, float4, float5, float6, float7) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, int3, int4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, int3, float5, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, int3, float5, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, int2, float5, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, int2, float5, int3, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, int2, float5, float6, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, int2, float5, float6, float7) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, int2, int3, float6) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, int2, float6, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, int2, float6, float7) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, int, float2, float3, float4, float5, float6, int2, int3) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, int, float2, float3, float4, float5, float6, int2, float7) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, int, float2, float3, float4, float5, float6, float7, int2) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, int, float2, float3, float4, float5, float6, float7, float8) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, int4, int5, int6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, int4, int5, float4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, int4, float4, int5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, int4, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, int3, float4, int4, int5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, int3, float4, int4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, int3, float4, float5, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, int3, float4, float5, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, int3, int4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, int3, float5, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, int3, float5, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, int2, float3, float4, float5, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, int2, float3, float4, float5, int3, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, int2, float3, float4, float5, float6, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, int2, float3, float4, float5, float6, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, int3, int4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, int3, float5, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, int3, float5, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, int2, float5, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, int2, float5, int3, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, int2, float5, float6, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, int2, float5, float6, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, int2, int3, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, int2, float6, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, int2, float6, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, int, float3, float4, float5, float6, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, int, float3, float4, float5, float6, int2, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, int, float3, float4, float5, float6, float7, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, int, float3, float4, float5, float6, float7, float8) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, int3, int4, int5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, int3, int4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, int3, float5, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, int3, float5, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, int2, float5, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, int2, float5, int3, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, int2, float5, float6, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, int2, float5, float6, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, int2, int3, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, int2, float6, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, int2, float6, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, int, float4, float5, float6, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, int, float4, float5, float6, int2, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, int, float4, float5, float6, float7, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({int}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, int, float4, float5, float6, float7, float8) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, int2, int3, int4) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, int2, int3, float6) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, int2, float6, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, int2, float6, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, int, float6, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, int, float6, int2, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, int, float6, float7, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{int}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, int, float6, float7, float8) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, int, int2, int3) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, int, int2, float7) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, int, float7, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{int}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, int, float7, float8) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, int, int2) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{int}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, int, float8) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{int}))', function (float, float2, float3, float4, float5, float6, float7, float8, int) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}√{float}\/{float}, √{float}\/{float}))', function (float, float2, float3, float4, float5, float6, float7, float8, float9) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i ← intersection(√2, shape)
//       Undefined. Implement with the following snippet:
//
//         Given('i ← intersection\(√{int}, shape)', function (int) {
//         // Given('i ← intersection\(√{float}, shape)', function (float) {
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
//   ? Then comps.reflectv = vector(0, √2/2, √2/2)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.reflectv = vector\({int}, √{int}\/{int}, √{int}\/{int})', function (int, int2, int3, int4, int5) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{int}, √{int}\/{float})', function (int, int2, int3, int4, float) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{int}, √{float}\/{int})', function (int, int2, int3, float, int4) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{int}, √{float}\/{float})', function (int, int2, int3, float, float2) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{float}, √{int}\/{int})', function (int, int2, float, int3, int4) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{float}, √{int}\/{float})', function (int, int2, float, int3, float2) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{float}, √{float}\/{int})', function (int, int2, float, float2, int3) {
//         // Then('comps.reflectv = vector\({int}, √{int}\/{float}, √{float}\/{float})', function (int, int2, float, float2, float3) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{int}, √{int}\/{int})', function (int, float, int2, int3, int4) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{int}, √{int}\/{float})', function (int, float, int2, int3, float2) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{int}, √{float}\/{int})', function (int, float, int2, float2, int3) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{int}, √{float}\/{float})', function (int, float, int2, float2, float3) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{float}, √{int}\/{int})', function (int, float, float2, int2, int3) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{float}, √{int}\/{float})', function (int, float, float2, int2, float3) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{float}, √{float}\/{int})', function (int, float, float2, float3, int2) {
//         // Then('comps.reflectv = vector\({int}, √{float}\/{float}, √{float}\/{float})', function (int, float, float2, float3, float4) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{int}, √{int}\/{int})', function (float, int, int2, int3, int4) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{int}, √{int}\/{float})', function (float, int, int2, int3, float2) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{int}, √{float}\/{int})', function (float, int, int2, float2, int3) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{int}, √{float}\/{float})', function (float, int, int2, float2, float3) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{float}, √{int}\/{int})', function (float, int, float2, int2, int3) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{float}, √{int}\/{float})', function (float, int, float2, int2, float3) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{float}, √{float}\/{int})', function (float, int, float2, float3, int2) {
//         // Then('comps.reflectv = vector\({float}, √{int}\/{float}, √{float}\/{float})', function (float, int, float2, float3, float4) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{int}, √{int}\/{int})', function (float, float2, int, int2, int3) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{int}, √{int}\/{float})', function (float, float2, int, int2, float3) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{int}, √{float}\/{int})', function (float, float2, int, float3, int2) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{int}, √{float}\/{float})', function (float, float2, int, float3, float4) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{float}, √{int}\/{int})', function (float, float2, float3, int, int2) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{float}, √{int}\/{float})', function (float, float2, float3, int, float4) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{float}, √{float}\/{int})', function (float, float2, float3, float4, int) {
//         // Then('comps.reflectv = vector\({float}, √{float}\/{float}, √{float}\/{float})', function (float, float2, float3, float4, float5) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//4) Scenario: The hit, when an intersection occurs on the outside # ../features/intersections.feature:27
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
//   ? And shape ← sphere()
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← sphere\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
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
//   ? Then comps.inside = false
//       Undefined. Implement with the following snippet:
//
//         Then('comps.inside = false', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//5) Scenario: The hit, when an intersection occurs on the inside # ../features/intersections.feature:34
//   ? Given r ← ray(point(0, 0, 0), vector(0, 0, 1))
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
//   ? And shape ← sphere()
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← sphere\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i ← intersection(1, shape)
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
//   ? Then comps.point = point(0, 0, 1)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.point = point\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('comps.point = point\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('comps.point = point\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('comps.point = point\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('comps.point = point\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('comps.point = point\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('comps.point = point\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('comps.point = point\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.eyev = vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.eyev = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('comps.eyev = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('comps.eyev = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('comps.eyev = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('comps.eyev = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('comps.eyev = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('comps.eyev = vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('comps.eyev = vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.inside = true
//       Undefined. Implement with the following snippet:
//
//         Then('comps.inside = true', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.normalv = vector(0, 0, -1)
//       Undefined. Implement with the following snippet:
//
//         Then('comps.normalv = vector\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('comps.normalv = vector\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('comps.normalv = vector\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('comps.normalv = vector\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('comps.normalv = vector\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('comps.normalv = vector\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('comps.normalv = vector\({float}, {float}, {int})', function (float, float2, int) {
//         // Then('comps.normalv = vector\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//6) Scenario: The hit should offset the point # ../features/intersections.feature:45
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
//   ? And shape ← sphere() with:
//       | transform | translation(0, 0, 1) |
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← sphere\() with:', function (dataTable) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i ← intersection(5, shape)
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
//   ? Then comps.over_point.z < -EPSILON/2
//       Undefined. Implement with the following snippet:
//
//         Then('comps.over_point.z < -EPSILON\/{int}', function (int) {
//         // Then('comps.over_point.z < -EPSILON\/{float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.point.z > comps.over_point.z
//       Undefined. Implement with the following snippet:
//
//         Then('comps.point.z > comps.over_point.z', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//7) Scenario: The under point is offset below the surface # ../features/intersections.feature:54
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
//   ? And shape ← glass_sphere() with:
//       | transform | translation(0, 0, 1) |
//       Undefined. Implement with the following snippet:
//
//         Given('shape ← glass_sphere\() with:', function (dataTable) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i ← intersection(5, shape)
//       Undefined. Implement with the following snippet:
//
//         Given('i ← intersection\({int}, shape)', function (int) {
//         // Given('i ← intersection\({float}, shape)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs ← intersections(i)
//       Undefined. Implement with the following snippet:
//
//         Given('xs ← intersections\(i)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When comps ← prepare_computations(i, r, xs)
//       Undefined. Implement with the following snippet:
//
//         When('comps ← prepare_computations\(i, r, xs)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then comps.under_point.z > EPSILON/2
//       Undefined. Implement with the following snippet:
//
//         Then('comps.under_point.z > EPSILON\/{int}', function (int) {
//         // Then('comps.under_point.z > EPSILON\/{float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And comps.point.z < comps.under_point.z
//       Undefined. Implement with the following snippet:
//
//         Then('comps.point.z < comps.under_point.z', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//8) Scenario: Aggregating intersections # ../features/intersections.feature:64
//   ? Given s ← sphere()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i1 ← intersection(1, s)
//       Undefined. Implement with the following snippet:
let i1
//         Given('i1 ← intersection\({int}, s)', function (int) {
         Given('i1 ← intersection\\({float}, s)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           i1 = intersection(float, s)
         });
//
//   ? And i2 ← intersection(2, s)
//       Undefined. Implement with the following snippet:
let i2
//         Given('i2 ← intersection\({int}, s)', function (int) {
         Given('i2 ← intersection\\({float}, s)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           i2 = intersection(float, s)
         });
//
//   ? When xs ← intersections(i1, i2)
//       Undefined. Implement with the following snippet:
//let xs
         When('xs ← intersections\\(i1, i2)', function () {
//           // Write code here that turns the phrase above into concrete actions
           xs = intersections(i1, i2)
         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:29
//   ? And xs[0].t = 1
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}].t = {int}', function (int, int2) {
         Then('xs[{int}].t = {float}', function (int, float) {
//         // Then('xs[{float}].t = {int}', function (float, int) {
//         // Then('xs[{float}].t = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(xs[int].t, float))
         });
//
//   ? And xs[1].t = 2
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}].t = {int}', function (int, int2) {
//         // Then('xs[{int}].t = {float}', function (int, float) {
//         // Then('xs[{float}].t = {int}', function (float, int) {
//         // Then('xs[{float}].t = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//9) Scenario: The hit, when all intersections have positive t # ../features/intersections.feature:73
//   ? Given s ← sphere()
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i1 ← intersection(1, s)
//       Undefined. Implement with the following snippet:
//
//         Given('i1 ← intersection\({int}, s)', function (int) {
//         // Given('i1 ← intersection\({float}, s)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And i2 ← intersection(2, s)
//       Undefined. Implement with the following snippet:
//
//         Given('i2 ← intersection\({int}, s)', function (int) {
//         // Given('i2 ← intersection\({float}, s)', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs ← intersections(i2, i1)
//       Undefined. Implement with the following snippet:
//
         Given('xs ← intersections\\(i2, i1)', function () {
//           // Write code here that turns the phrase above into concrete actions
           xs = intersections(i2, i1)
         });
//
//   ? When i ← hit(xs)
//       Undefined. Implement with the following snippet:
//
         When('i ← hit\\(xs)', function () {
//           // Write code here that turns the phrase above into concrete actions
           i = hit(xs)
         });
//
//   ? Then i = i1
//       Undefined. Implement with the following snippet:
//
         Then('i = i1', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(i === i1)
         });
//
//
//10) Scenario: The hit, when some intersections have negative t # ../features/intersections.feature:81
//    ? Given s ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i1 ← intersection(-1, s)
//        Undefined. Implement with the following snippet:
//
//          Given('i1 ← intersection\({int}, s)', function (int) {
//          // Given('i1 ← intersection\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i2 ← intersection(1, s)
//        Undefined. Implement with the following snippet:
//
//          Given('i2 ← intersection\({int}, s)', function (int) {
//          // Given('i2 ← intersection\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(i2, i1)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\(i2, i1)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When i ← hit(xs)
//        Undefined. Implement with the following snippet:
//
//          When('i ← hit\(xs)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then i = i2
//        Undefined. Implement with the following snippet:
//
          Then('i = i2', function () {
//            // Write code here that turns the phrase above into concrete actions
            assert(i === i2)
          });
//
//
//11) Scenario: The hit, when all intersections have negative t # ../features/intersections.feature:89
//    ? Given s ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i1 ← intersection(-2, s)
//        Undefined. Implement with the following snippet:
//
//          Given('i1 ← intersection\({int}, s)', function (int) {
//          // Given('i1 ← intersection\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i2 ← intersection(-1, s)
//        Undefined. Implement with the following snippet:
//
//          Given('i2 ← intersection\({int}, s)', function (int) {
//          // Given('i2 ← intersection\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And xs ← intersections(i2, i1)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\(i2, i1)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When i ← hit(xs)
//        Undefined. Implement with the following snippet:
//
//          When('i ← hit\(xs)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then i is nothing
//        Undefined. Implement with the following snippet:
//
          Then('i is nothing', function () {
//            // Write code here that turns the phrase above into concrete actions
            assert(i === undefined)
          });
//
//
//12) Scenario: The hit is always the lowest nonnegative intersection # ../features/intersections.feature:97
//    ? Given s ← sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i1 ← intersection(5, s)
//        Undefined. Implement with the following snippet:
//
//          Given('i1 ← intersection\({int}, s)', function (int) {
//          // Given('i1 ← intersection\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i2 ← intersection(7, s)
//        Undefined. Implement with the following snippet:
//
//          Given('i2 ← intersection\({int}, s)', function (int) {
//          // Given('i2 ← intersection\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i3 ← intersection(-3, s)
//        Undefined. Implement with the following snippet:
let i3
//          Given('i3 ← intersection\({int}, s)', function (int) {
          Given('i3 ← intersection\\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
            i3 = intersection(float, s)
          });
//
//    ? And i4 ← intersection(2, s)
//        Undefined. Implement with the following snippet:
let i4
//          Given('i4 ← intersection\({int}, s)', function (int) {
          Given('i4 ← intersection\\({float}, s)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
            i4 = intersection(float, s)
          });
//
//    ? And xs ← intersections(i1, i2, i3, i4)
//        Undefined. Implement with the following snippet:
//
          Given('xs ← intersections\\(i1, i2, i3, i4)', function () {
//            // Write code here that turns the phrase above into concrete actions
            xs = intersections(i1, i2, i3, i4)
          });
//
//    ? When i ← hit(xs)
//        Undefined. Implement with the following snippet:
//
//          When('i ← hit\(xs)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then i = i4
//        Undefined. Implement with the following snippet:
//
          Then('i = i4', function () {
//            // Write code here that turns the phrase above into concrete actions
            assert(i === i4)
          });
//
//
//13) Scenario: Finding n1 and n2 at various intersections # ../features/intersections.feature:125
//    ? Given A ← glass_sphere() with:
//        | transform                 | scaling(2, 2, 2) |
//        | material.refractive_index | 1.5              |
//        Undefined. Implement with the following snippet:
//
//          Given('A ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← glass_sphere() with:
//        | transform                 | translation(0, 0, -0.25) |
//        | material.refractive_index | 2.0                      |
//        Undefined. Implement with the following snippet:
//
//          Given('B ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← glass_sphere() with:
//        | transform                 | translation(0, 0, 0.25) |
//        | material.refractive_index | 2.5                     |
//        Undefined. Implement with the following snippet:
//
//          Given('C ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -4), vector(0, 0, 1))
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
//    ? And xs ← intersections(2:A, 2.75:B, 3.25:C, 4.75:B, 5.25:C, 6:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (int, float, float2, float3, float4, int2) {
//          // Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (int, float, float2, float3, float4, float5) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (float, float2, float3, float4, float5, int) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (float, float2, float3, float4, float5, float6) {
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
//    ? Then comps.n1 = 1.0
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n1 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And comps.n2 = 1.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n2 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//14) Scenario: Finding n1 and n2 at various intersections # ../features/intersections.feature:126
//    ? Given A ← glass_sphere() with:
//        | transform                 | scaling(2, 2, 2) |
//        | material.refractive_index | 1.5              |
//        Undefined. Implement with the following snippet:
//
//          Given('A ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← glass_sphere() with:
//        | transform                 | translation(0, 0, -0.25) |
//        | material.refractive_index | 2.0                      |
//        Undefined. Implement with the following snippet:
//
//          Given('B ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← glass_sphere() with:
//        | transform                 | translation(0, 0, 0.25) |
//        | material.refractive_index | 2.5                     |
//        Undefined. Implement with the following snippet:
//
//          Given('C ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -4), vector(0, 0, 1))
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
//    ? And xs ← intersections(2:A, 2.75:B, 3.25:C, 4.75:B, 5.25:C, 6:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (int, float, float2, float3, float4, int2) {
//          // Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (int, float, float2, float3, float4, float5) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (float, float2, float3, float4, float5, int) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (float, float2, float3, float4, float5, float6) {
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
//    ? Then comps.n1 = 1.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n1 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And comps.n2 = 2.0
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n2 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//15) Scenario: Finding n1 and n2 at various intersections # ../features/intersections.feature:127
//    ? Given A ← glass_sphere() with:
//        | transform                 | scaling(2, 2, 2) |
//        | material.refractive_index | 1.5              |
//        Undefined. Implement with the following snippet:
//
//          Given('A ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← glass_sphere() with:
//        | transform                 | translation(0, 0, -0.25) |
//        | material.refractive_index | 2.0                      |
//        Undefined. Implement with the following snippet:
//
//          Given('B ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← glass_sphere() with:
//        | transform                 | translation(0, 0, 0.25) |
//        | material.refractive_index | 2.5                     |
//        Undefined. Implement with the following snippet:
//
//          Given('C ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -4), vector(0, 0, 1))
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
//    ? And xs ← intersections(2:A, 2.75:B, 3.25:C, 4.75:B, 5.25:C, 6:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (int, float, float2, float3, float4, int2) {
//          // Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (int, float, float2, float3, float4, float5) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (float, float2, float3, float4, float5, int) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (float, float2, float3, float4, float5, float6) {
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
//    ? Then comps.n1 = 2.0
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n1 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And comps.n2 = 2.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n2 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//16) Scenario: Finding n1 and n2 at various intersections # ../features/intersections.feature:128
//    ? Given A ← glass_sphere() with:
//        | transform                 | scaling(2, 2, 2) |
//        | material.refractive_index | 1.5              |
//        Undefined. Implement with the following snippet:
//
//          Given('A ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← glass_sphere() with:
//        | transform                 | translation(0, 0, -0.25) |
//        | material.refractive_index | 2.0                      |
//        Undefined. Implement with the following snippet:
//
//          Given('B ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← glass_sphere() with:
//        | transform                 | translation(0, 0, 0.25) |
//        | material.refractive_index | 2.5                     |
//        Undefined. Implement with the following snippet:
//
//          Given('C ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -4), vector(0, 0, 1))
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
//    ? And xs ← intersections(2:A, 2.75:B, 3.25:C, 4.75:B, 5.25:C, 6:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (int, float, float2, float3, float4, int2) {
//          // Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (int, float, float2, float3, float4, float5) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (float, float2, float3, float4, float5, int) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[3], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then comps.n1 = 2.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n1 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And comps.n2 = 2.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n2 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//17) Scenario: Finding n1 and n2 at various intersections # ../features/intersections.feature:129
//    ? Given A ← glass_sphere() with:
//        | transform                 | scaling(2, 2, 2) |
//        | material.refractive_index | 1.5              |
//        Undefined. Implement with the following snippet:
//
//          Given('A ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← glass_sphere() with:
//        | transform                 | translation(0, 0, -0.25) |
//        | material.refractive_index | 2.0                      |
//        Undefined. Implement with the following snippet:
//
//          Given('B ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← glass_sphere() with:
//        | transform                 | translation(0, 0, 0.25) |
//        | material.refractive_index | 2.5                     |
//        Undefined. Implement with the following snippet:
//
//          Given('C ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -4), vector(0, 0, 1))
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
//    ? And xs ← intersections(2:A, 2.75:B, 3.25:C, 4.75:B, 5.25:C, 6:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (int, float, float2, float3, float4, int2) {
//          // Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (int, float, float2, float3, float4, float5) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (float, float2, float3, float4, float5, int) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[4], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then comps.n1 = 2.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n1 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And comps.n2 = 1.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n2 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//18) Scenario: Finding n1 and n2 at various intersections # ../features/intersections.feature:130
//    ? Given A ← glass_sphere() with:
//        | transform                 | scaling(2, 2, 2) |
//        | material.refractive_index | 1.5              |
//        Undefined. Implement with the following snippet:
//
//          Given('A ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And B ← glass_sphere() with:
//        | transform                 | translation(0, 0, -0.25) |
//        | material.refractive_index | 2.0                      |
//        Undefined. Implement with the following snippet:
//
//          Given('B ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And C ← glass_sphere() with:
//        | transform                 | translation(0, 0, 0.25) |
//        | material.refractive_index | 2.5                     |
//        Undefined. Implement with the following snippet:
//
//          Given('C ← glass_sphere\() with:', function (dataTable) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -4), vector(0, 0, 1))
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
//    ? And xs ← intersections(2:A, 2.75:B, 3.25:C, 4.75:B, 5.25:C, 6:A)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (int, float, float2, float3, float4, int2) {
//          // Given('xs ← intersections\({int}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (int, float, float2, float3, float4, float5) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {int}:A)', function (float, float2, float3, float4, float5, int) {
//          // Given('xs ← intersections\({float}:A, {float}:B, {float}:C, {float}:B, {float}:C, {float}:A)', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When comps ← prepare_computations(xs[5], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then comps.n1 = 1.5
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n1 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And comps.n2 = 1.0
//        Undefined. Implement with the following snippet:
//
//          Then('comps.n2 = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//19) Scenario: The Schlick approximation under total internal reflection # ../features/intersections.feature:132
//    ? Given shape ← glass_sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← glass_sphere\()', function () {
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
//    ? And reflectance ← schlick(comps)
//        Undefined. Implement with the following snippet:
//
//          When('reflectance ← schlick\(comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then reflectance = 1.0
//        Undefined. Implement with the following snippet:
//
//          Then('reflectance = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//20) Scenario: The Schlick approximation with a perpendicular viewing angle # ../features/intersections.feature:140
//    ? Given shape ← glass_sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← glass_sphere\()', function () {
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
//    ? And xs ← intersections(-1:shape, 1:shape)
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
//    ? When comps ← prepare_computations(xs[1], r, xs)
//        Undefined. Implement with the following snippet:
//
//          When('comps ← prepare_computations\(xs[{int}], r, xs)', function (int) {
//          // When('comps ← prepare_computations\(xs[{float}], r, xs)', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And reflectance ← schlick(comps)
//        Undefined. Implement with the following snippet:
//
//          When('reflectance ← schlick\(comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then reflectance = 0.04
//        Undefined. Implement with the following snippet:
//
//          Then('reflectance = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//21) Scenario: The Schlick approximation with small angle and n2 > n1 # ../features/intersections.feature:148
//    ? Given shape ← glass_sphere()
//        Undefined. Implement with the following snippet:
//
//          Given('shape ← glass_sphere\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0.99, -2), vector(0, 0, 1))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
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
//    ? And xs ← intersections(1.8589:shape)
//        Undefined. Implement with the following snippet:
//
//          Given('xs ← intersections\({float}:shape)', function (float) {
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
//    ? And reflectance ← schlick(comps)
//        Undefined. Implement with the following snippet:
//
//          When('reflectance ← schlick\(comps)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then reflectance = 0.48873
//        Undefined. Implement with the following snippet:
//
//          Then('reflectance = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//22) Scenario: An intersection can encapsulate `u` and `v` # ../features/intersections.feature:156
//    ? Given s ← triangle(point(0, 1, 0), point(-1, 0, 0), point(1, 0, 0))
//        Undefined. Implement with the following snippet:
//
//          Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, int6, int7, int8, int9) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, int6, int7, int8, float) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({int}, {float}, {int}))', function (int, int2, int3, int4, int5, int6, int7, float, int8) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({int}, {float}, {float}))', function (int, int2, int3, int4, int5, int6, int7, float, float2) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({float}, {int}, {int}))', function (int, int2, int3, int4, int5, int6, float, int7, int8) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({float}, {int}, {float}))', function (int, int2, int3, int4, int5, int6, float, int7, float2) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({float}, {float}, {int}))', function (int, int2, int3, int4, int5, int6, float, float2, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {int}), point\({float}, {float}, {float}))', function (int, int2, int3, int4, int5, int6, float, float2, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({int}, {int}, {int}))', function (int, int2, int3, int4, int5, float, int6, int7, int8) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({int}, {int}, {float}))', function (int, int2, int3, int4, int5, float, int6, int7, float2) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({int}, {float}, {int}))', function (int, int2, int3, int4, int5, float, int6, float2, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({int}, {float}, {float}))', function (int, int2, int3, int4, int5, float, int6, float2, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({float}, {int}, {int}))', function (int, int2, int3, int4, int5, float, float2, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({float}, {int}, {float}))', function (int, int2, int3, int4, int5, float, float2, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({float}, {float}, {int}))', function (int, int2, int3, int4, int5, float, float2, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {int}, {float}), point\({float}, {float}, {float}))', function (int, int2, int3, int4, int5, float, float2, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({int}, {int}, {int}))', function (int, int2, int3, int4, float, int5, int6, int7, int8) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({int}, {int}, {float}))', function (int, int2, int3, int4, float, int5, int6, int7, float2) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({int}, {float}, {int}))', function (int, int2, int3, int4, float, int5, int6, float2, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({int}, {float}, {float}))', function (int, int2, int3, int4, float, int5, int6, float2, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({float}, {int}, {int}))', function (int, int2, int3, int4, float, int5, float2, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({float}, {int}, {float}))', function (int, int2, int3, int4, float, int5, float2, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({float}, {float}, {int}))', function (int, int2, int3, int4, float, int5, float2, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {int}), point\({float}, {float}, {float}))', function (int, int2, int3, int4, float, int5, float2, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({int}, {int}, {int}))', function (int, int2, int3, int4, float, float2, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({int}, {int}, {float}))', function (int, int2, int3, int4, float, float2, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({int}, {float}, {int}))', function (int, int2, int3, int4, float, float2, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({int}, {float}, {float}))', function (int, int2, int3, int4, float, float2, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({float}, {int}, {int}))', function (int, int2, int3, int4, float, float2, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({float}, {int}, {float}))', function (int, int2, int3, int4, float, float2, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({float}, {float}, {int}))', function (int, int2, int3, int4, float, float2, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({int}, {float}, {float}), point\({float}, {float}, {float}))', function (int, int2, int3, int4, float, float2, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({int}, {int}, {int}))', function (int, int2, int3, float, int4, int5, int6, int7, int8) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({int}, {int}, {float}))', function (int, int2, int3, float, int4, int5, int6, int7, float2) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({int}, {float}, {int}))', function (int, int2, int3, float, int4, int5, int6, float2, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({int}, {float}, {float}))', function (int, int2, int3, float, int4, int5, int6, float2, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({float}, {int}, {int}))', function (int, int2, int3, float, int4, int5, float2, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({float}, {int}, {float}))', function (int, int2, int3, float, int4, int5, float2, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({float}, {float}, {int}))', function (int, int2, int3, float, int4, int5, float2, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {int}), point\({float}, {float}, {float}))', function (int, int2, int3, float, int4, int5, float2, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({int}, {int}, {int}))', function (int, int2, int3, float, int4, float2, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({int}, {int}, {float}))', function (int, int2, int3, float, int4, float2, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({int}, {float}, {int}))', function (int, int2, int3, float, int4, float2, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({int}, {float}, {float}))', function (int, int2, int3, float, int4, float2, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({float}, {int}, {int}))', function (int, int2, int3, float, int4, float2, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({float}, {int}, {float}))', function (int, int2, int3, float, int4, float2, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({float}, {float}, {int}))', function (int, int2, int3, float, int4, float2, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {int}, {float}), point\({float}, {float}, {float}))', function (int, int2, int3, float, int4, float2, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({int}, {int}, {int}))', function (int, int2, int3, float, float2, int4, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({int}, {int}, {float}))', function (int, int2, int3, float, float2, int4, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({int}, {float}, {int}))', function (int, int2, int3, float, float2, int4, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({int}, {float}, {float}))', function (int, int2, int3, float, float2, int4, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({float}, {int}, {int}))', function (int, int2, int3, float, float2, int4, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({float}, {int}, {float}))', function (int, int2, int3, float, float2, int4, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({float}, {float}, {int}))', function (int, int2, int3, float, float2, int4, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {int}), point\({float}, {float}, {float}))', function (int, int2, int3, float, float2, int4, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({int}, {int}, {int}))', function (int, int2, int3, float, float2, float3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({int}, {int}, {float}))', function (int, int2, int3, float, float2, float3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({int}, {float}, {int}))', function (int, int2, int3, float, float2, float3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({int}, {float}, {float}))', function (int, int2, int3, float, float2, float3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({float}, {int}, {int}))', function (int, int2, int3, float, float2, float3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({float}, {int}, {float}))', function (int, int2, int3, float, float2, float3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({float}, {float}, {int}))', function (int, int2, int3, float, float2, float3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {int}, {int}), point\({float}, {float}, {float}), point\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({int}, {int}, {int}))', function (int, int2, float, int3, int4, int5, int6, int7, int8) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({int}, {int}, {float}))', function (int, int2, float, int3, int4, int5, int6, int7, float2) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({int}, {float}, {int}))', function (int, int2, float, int3, int4, int5, int6, float2, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({int}, {float}, {float}))', function (int, int2, float, int3, int4, int5, int6, float2, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({float}, {int}, {int}))', function (int, int2, float, int3, int4, int5, float2, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({float}, {int}, {float}))', function (int, int2, float, int3, int4, int5, float2, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({float}, {float}, {int}))', function (int, int2, float, int3, int4, int5, float2, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {int}), point\({float}, {float}, {float}))', function (int, int2, float, int3, int4, int5, float2, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({int}, {int}, {int}))', function (int, int2, float, int3, int4, float2, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({int}, {int}, {float}))', function (int, int2, float, int3, int4, float2, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({int}, {float}, {int}))', function (int, int2, float, int3, int4, float2, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({int}, {float}, {float}))', function (int, int2, float, int3, int4, float2, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({float}, {int}, {int}))', function (int, int2, float, int3, int4, float2, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({float}, {int}, {float}))', function (int, int2, float, int3, int4, float2, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({float}, {float}, {int}))', function (int, int2, float, int3, int4, float2, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {int}, {float}), point\({float}, {float}, {float}))', function (int, int2, float, int3, int4, float2, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({int}, {int}, {int}))', function (int, int2, float, int3, float2, int4, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({int}, {int}, {float}))', function (int, int2, float, int3, float2, int4, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({int}, {float}, {int}))', function (int, int2, float, int3, float2, int4, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({int}, {float}, {float}))', function (int, int2, float, int3, float2, int4, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({float}, {int}, {int}))', function (int, int2, float, int3, float2, int4, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({float}, {int}, {float}))', function (int, int2, float, int3, float2, int4, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({float}, {float}, {int}))', function (int, int2, float, int3, float2, int4, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {int}), point\({float}, {float}, {float}))', function (int, int2, float, int3, float2, int4, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({int}, {int}, {int}))', function (int, int2, float, int3, float2, float3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({int}, {int}, {float}))', function (int, int2, float, int3, float2, float3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({int}, {float}, {int}))', function (int, int2, float, int3, float2, float3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({int}, {float}, {float}))', function (int, int2, float, int3, float2, float3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({float}, {int}, {int}))', function (int, int2, float, int3, float2, float3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({float}, {int}, {float}))', function (int, int2, float, int3, float2, float3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({float}, {float}, {int}))', function (int, int2, float, int3, float2, float3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({int}, {float}, {float}), point\({float}, {float}, {float}))', function (int, int2, float, int3, float2, float3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({int}, {int}, {int}))', function (int, int2, float, float2, int3, int4, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({int}, {int}, {float}))', function (int, int2, float, float2, int3, int4, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({int}, {float}, {int}))', function (int, int2, float, float2, int3, int4, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({int}, {float}, {float}))', function (int, int2, float, float2, int3, int4, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({float}, {int}, {int}))', function (int, int2, float, float2, int3, int4, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({float}, {int}, {float}))', function (int, int2, float, float2, int3, int4, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({float}, {float}, {int}))', function (int, int2, float, float2, int3, int4, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {int}), point\({float}, {float}, {float}))', function (int, int2, float, float2, int3, int4, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({int}, {int}, {int}))', function (int, int2, float, float2, int3, float3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({int}, {int}, {float}))', function (int, int2, float, float2, int3, float3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({int}, {float}, {int}))', function (int, int2, float, float2, int3, float3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({int}, {float}, {float}))', function (int, int2, float, float2, int3, float3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({float}, {int}, {int}))', function (int, int2, float, float2, int3, float3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({float}, {int}, {float}))', function (int, int2, float, float2, int3, float3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({float}, {float}, {int}))', function (int, int2, float, float2, int3, float3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {int}, {float}), point\({float}, {float}, {float}))', function (int, int2, float, float2, int3, float3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({int}, {int}, {int}))', function (int, int2, float, float2, float3, int3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({int}, {int}, {float}))', function (int, int2, float, float2, float3, int3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({int}, {float}, {int}))', function (int, int2, float, float2, float3, int3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({int}, {float}, {float}))', function (int, int2, float, float2, float3, int3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({float}, {int}, {int}))', function (int, int2, float, float2, float3, int3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({float}, {int}, {float}))', function (int, int2, float, float2, float3, int3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({float}, {float}, {int}))', function (int, int2, float, float2, float3, int3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {int}), point\({float}, {float}, {float}))', function (int, int2, float, float2, float3, int3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({int}, {int}, {int}))', function (int, int2, float, float2, float3, float4, int3, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({int}, {int}, {float}))', function (int, int2, float, float2, float3, float4, int3, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({int}, {float}, {int}))', function (int, int2, float, float2, float3, float4, int3, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({int}, {float}, {float}))', function (int, int2, float, float2, float3, float4, int3, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({float}, {int}, {int}))', function (int, int2, float, float2, float3, float4, float5, int3, int4) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({float}, {int}, {float}))', function (int, int2, float, float2, float3, float4, float5, int3, float6) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({float}, {float}, {int}))', function (int, int2, float, float2, float3, float4, float5, float6, int3) {
//          // Given('s ← triangle\(point\({int}, {int}, {float}), point\({float}, {float}, {float}), point\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4, float5, float6, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5, int6, int7, int8) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({int}, {int}, {float}))', function (int, float, int2, int3, int4, int5, int6, int7, float2) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({int}, {float}, {int}))', function (int, float, int2, int3, int4, int5, int6, float2, int7) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({int}, {float}, {float}))', function (int, float, int2, int3, int4, int5, int6, float2, float3) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({float}, {int}, {int}))', function (int, float, int2, int3, int4, int5, float2, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({float}, {int}, {float}))', function (int, float, int2, int3, int4, int5, float2, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({float}, {float}, {int}))', function (int, float, int2, int3, int4, int5, float2, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {int}), point\({float}, {float}, {float}))', function (int, float, int2, int3, int4, int5, float2, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({int}, {int}, {int}))', function (int, float, int2, int3, int4, float2, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({int}, {int}, {float}))', function (int, float, int2, int3, int4, float2, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({int}, {float}, {int}))', function (int, float, int2, int3, int4, float2, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({int}, {float}, {float}))', function (int, float, int2, int3, int4, float2, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({float}, {int}, {int}))', function (int, float, int2, int3, int4, float2, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({float}, {int}, {float}))', function (int, float, int2, int3, int4, float2, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({float}, {float}, {int}))', function (int, float, int2, int3, int4, float2, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {int}, {float}), point\({float}, {float}, {float}))', function (int, float, int2, int3, int4, float2, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({int}, {int}, {int}))', function (int, float, int2, int3, float2, int4, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({int}, {int}, {float}))', function (int, float, int2, int3, float2, int4, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({int}, {float}, {int}))', function (int, float, int2, int3, float2, int4, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({int}, {float}, {float}))', function (int, float, int2, int3, float2, int4, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({float}, {int}, {int}))', function (int, float, int2, int3, float2, int4, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({float}, {int}, {float}))', function (int, float, int2, int3, float2, int4, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({float}, {float}, {int}))', function (int, float, int2, int3, float2, int4, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {int}), point\({float}, {float}, {float}))', function (int, float, int2, int3, float2, int4, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({int}, {int}, {int}))', function (int, float, int2, int3, float2, float3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({int}, {int}, {float}))', function (int, float, int2, int3, float2, float3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({int}, {float}, {int}))', function (int, float, int2, int3, float2, float3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({int}, {float}, {float}))', function (int, float, int2, int3, float2, float3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({float}, {int}, {int}))', function (int, float, int2, int3, float2, float3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({float}, {int}, {float}))', function (int, float, int2, int3, float2, float3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({float}, {float}, {int}))', function (int, float, int2, int3, float2, float3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({int}, {float}, {float}), point\({float}, {float}, {float}))', function (int, float, int2, int3, float2, float3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({int}, {int}, {int}))', function (int, float, int2, float2, int3, int4, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({int}, {int}, {float}))', function (int, float, int2, float2, int3, int4, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({int}, {float}, {int}))', function (int, float, int2, float2, int3, int4, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({int}, {float}, {float}))', function (int, float, int2, float2, int3, int4, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({float}, {int}, {int}))', function (int, float, int2, float2, int3, int4, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({float}, {int}, {float}))', function (int, float, int2, float2, int3, int4, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({float}, {float}, {int}))', function (int, float, int2, float2, int3, int4, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {int}), point\({float}, {float}, {float}))', function (int, float, int2, float2, int3, int4, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({int}, {int}, {int}))', function (int, float, int2, float2, int3, float3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({int}, {int}, {float}))', function (int, float, int2, float2, int3, float3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({int}, {float}, {int}))', function (int, float, int2, float2, int3, float3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({int}, {float}, {float}))', function (int, float, int2, float2, int3, float3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({float}, {int}, {int}))', function (int, float, int2, float2, int3, float3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({float}, {int}, {float}))', function (int, float, int2, float2, int3, float3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({float}, {float}, {int}))', function (int, float, int2, float2, int3, float3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {int}, {float}), point\({float}, {float}, {float}))', function (int, float, int2, float2, int3, float3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({int}, {int}, {int}))', function (int, float, int2, float2, float3, int3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({int}, {int}, {float}))', function (int, float, int2, float2, float3, int3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({int}, {float}, {int}))', function (int, float, int2, float2, float3, int3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({int}, {float}, {float}))', function (int, float, int2, float2, float3, int3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({float}, {int}, {int}))', function (int, float, int2, float2, float3, int3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({float}, {int}, {float}))', function (int, float, int2, float2, float3, int3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({float}, {float}, {int}))', function (int, float, int2, float2, float3, int3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {int}), point\({float}, {float}, {float}))', function (int, float, int2, float2, float3, int3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({int}, {int}, {int}))', function (int, float, int2, float2, float3, float4, int3, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({int}, {int}, {float}))', function (int, float, int2, float2, float3, float4, int3, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({int}, {float}, {int}))', function (int, float, int2, float2, float3, float4, int3, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({int}, {float}, {float}))', function (int, float, int2, float2, float3, float4, int3, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({float}, {int}, {int}))', function (int, float, int2, float2, float3, float4, float5, int3, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({float}, {int}, {float}))', function (int, float, int2, float2, float3, float4, float5, int3, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({float}, {float}, {int}))', function (int, float, int2, float2, float3, float4, float5, float6, int3) {
//          // Given('s ← triangle\(point\({int}, {float}, {int}), point\({float}, {float}, {float}), point\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4, float5, float6, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({int}, {int}, {int}))', function (int, float, float2, int2, int3, int4, int5, int6, int7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({int}, {int}, {float}))', function (int, float, float2, int2, int3, int4, int5, int6, float3) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({int}, {float}, {int}))', function (int, float, float2, int2, int3, int4, int5, float3, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({int}, {float}, {float}))', function (int, float, float2, int2, int3, int4, int5, float3, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({float}, {int}, {int}))', function (int, float, float2, int2, int3, int4, float3, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({float}, {int}, {float}))', function (int, float, float2, int2, int3, int4, float3, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({float}, {float}, {int}))', function (int, float, float2, int2, int3, int4, float3, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {int}), point\({float}, {float}, {float}))', function (int, float, float2, int2, int3, int4, float3, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({int}, {int}, {int}))', function (int, float, float2, int2, int3, float3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({int}, {int}, {float}))', function (int, float, float2, int2, int3, float3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({int}, {float}, {int}))', function (int, float, float2, int2, int3, float3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({int}, {float}, {float}))', function (int, float, float2, int2, int3, float3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({float}, {int}, {int}))', function (int, float, float2, int2, int3, float3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({float}, {int}, {float}))', function (int, float, float2, int2, int3, float3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({float}, {float}, {int}))', function (int, float, float2, int2, int3, float3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {int}, {float}), point\({float}, {float}, {float}))', function (int, float, float2, int2, int3, float3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({int}, {int}, {int}))', function (int, float, float2, int2, float3, int3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({int}, {int}, {float}))', function (int, float, float2, int2, float3, int3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({int}, {float}, {int}))', function (int, float, float2, int2, float3, int3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({int}, {float}, {float}))', function (int, float, float2, int2, float3, int3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({float}, {int}, {int}))', function (int, float, float2, int2, float3, int3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({float}, {int}, {float}))', function (int, float, float2, int2, float3, int3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({float}, {float}, {int}))', function (int, float, float2, int2, float3, int3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {int}), point\({float}, {float}, {float}))', function (int, float, float2, int2, float3, int3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({int}, {int}, {int}))', function (int, float, float2, int2, float3, float4, int3, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({int}, {int}, {float}))', function (int, float, float2, int2, float3, float4, int3, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({int}, {float}, {int}))', function (int, float, float2, int2, float3, float4, int3, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({int}, {float}, {float}))', function (int, float, float2, int2, float3, float4, int3, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({float}, {int}, {int}))', function (int, float, float2, int2, float3, float4, float5, int3, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({float}, {int}, {float}))', function (int, float, float2, int2, float3, float4, float5, int3, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({float}, {float}, {int}))', function (int, float, float2, int2, float3, float4, float5, float6, int3) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({int}, {float}, {float}), point\({float}, {float}, {float}))', function (int, float, float2, int2, float3, float4, float5, float6, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({int}, {int}, {int}))', function (int, float, float2, float3, int2, int3, int4, int5, int6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({int}, {int}, {float}))', function (int, float, float2, float3, int2, int3, int4, int5, float4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({int}, {float}, {int}))', function (int, float, float2, float3, int2, int3, int4, float4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({int}, {float}, {float}))', function (int, float, float2, float3, int2, int3, int4, float4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({float}, {int}, {int}))', function (int, float, float2, float3, int2, int3, float4, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({float}, {int}, {float}))', function (int, float, float2, float3, int2, int3, float4, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({float}, {float}, {int}))', function (int, float, float2, float3, int2, int3, float4, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {int}), point\({float}, {float}, {float}))', function (int, float, float2, float3, int2, int3, float4, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({int}, {int}, {int}))', function (int, float, float2, float3, int2, float4, int3, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({int}, {int}, {float}))', function (int, float, float2, float3, int2, float4, int3, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({int}, {float}, {int}))', function (int, float, float2, float3, int2, float4, int3, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({int}, {float}, {float}))', function (int, float, float2, float3, int2, float4, int3, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({float}, {int}, {int}))', function (int, float, float2, float3, int2, float4, float5, int3, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({float}, {int}, {float}))', function (int, float, float2, float3, int2, float4, float5, int3, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({float}, {float}, {int}))', function (int, float, float2, float3, int2, float4, float5, float6, int3) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {int}, {float}), point\({float}, {float}, {float}))', function (int, float, float2, float3, int2, float4, float5, float6, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({int}, {int}, {int}))', function (int, float, float2, float3, float4, int2, int3, int4, int5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({int}, {int}, {float}))', function (int, float, float2, float3, float4, int2, int3, int4, float5) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({int}, {float}, {int}))', function (int, float, float2, float3, float4, int2, int3, float5, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({int}, {float}, {float}))', function (int, float, float2, float3, float4, int2, int3, float5, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({float}, {int}, {int}))', function (int, float, float2, float3, float4, int2, float5, int3, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({float}, {int}, {float}))', function (int, float, float2, float3, float4, int2, float5, int3, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({float}, {float}, {int}))', function (int, float, float2, float3, float4, int2, float5, float6, int3) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {int}), point\({float}, {float}, {float}))', function (int, float, float2, float3, float4, int2, float5, float6, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({int}, {int}, {int}))', function (int, float, float2, float3, float4, float5, int2, int3, int4) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({int}, {int}, {float}))', function (int, float, float2, float3, float4, float5, int2, int3, float6) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({int}, {float}, {int}))', function (int, float, float2, float3, float4, float5, int2, float6, int3) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({int}, {float}, {float}))', function (int, float, float2, float3, float4, float5, int2, float6, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({float}, {int}, {int}))', function (int, float, float2, float3, float4, float5, float6, int2, int3) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({float}, {int}, {float}))', function (int, float, float2, float3, float4, float5, float6, int2, float7) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({float}, {float}, {int}))', function (int, float, float2, float3, float4, float5, float6, float7, int2) {
//          // Given('s ← triangle\(point\({int}, {float}, {float}), point\({float}, {float}, {float}), point\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5, float6, float7, float8) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When i ← intersection_with_uv(3.5, s, 0.2, 0.4)
//        Undefined. Implement with the following snippet:
//
//          When('i ← intersection_with_uv\({float}, s, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then i.u = 0.2
//        Undefined. Implement with the following snippet:
//
//          Then('i.u = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And i.v = 0.4
//        Undefined. Implement with the following snippet:
//
//          Then('i.v = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//