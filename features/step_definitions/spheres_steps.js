const { Before, Given, When, Then } = require('@cucumber/cucumber')
const ray = require('../../ray')
const assert = require('assert')
const { equal } = require('../../utility')
const { point, vector } = require('../../tuple')
const { sphere, intersect, set_transform } = require('../../sphere')
const matrix = require('../../matrix')
const { transformation } = require('../../transformation')
//
//1) Scenario: A ray intersects a sphere at two points # ../features/spheres.feature:3
//   ✔ Given r ← ray(point 0, 0, -5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//let s
           Given('s ← sphere', function () {
             // Write code here that turns the phrase above into concrete actions
             s = new sphere()
           });
//
//   ? When xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//let xs
         When('xs ← intersect\\(s, r)', function () {
           // Write code here that turns the phrase above into concrete actions
           xs = intersect(s, r)
         });
//
//   ? Then xs.count = 2
//       Undefined. Implement with the following snippet:
//
         Then('xs.count = {int}', function (int) {
         // Then('xs.count = {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           assert(xs.length == int)
         });
//
//   ? And xs[0] = 4.0
//       Undefined. Implement with the following snippet:
//
         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(xs[int], float))
         });
//
//   ? And xs[1] = 6.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//2) Scenario: A ray intersects a sphere at a tangent # ../features/spheres.feature:11
//   ✔ Given r ← ray(point 0, 1, -5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← intersect\(s, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs.count = 2
//       Undefined. Implement with the following snippet:
//
//         Then('xs.count = {int}', function (int) {
//         // Then('xs.count = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[0] = 5.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[1] = 5.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//3) Scenario: A ray misses a sphere # ../features/spheres.feature:19
//   ✔ Given r ← ray(point 0, 2, -5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← intersect\(s, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs.count = 0
//       Undefined. Implement with the following snippet:
//
//         Then('xs.count = {int}', function (int) {
//         // Then('xs.count = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//4) Scenario: A ray originates inside a sphere # ../features/spheres.feature:25
//   ✔ Given r ← ray(point 0, 0, 0, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← intersect\(s, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs.count = 2
//       Undefined. Implement with the following snippet:
//
//         Then('xs.count = {int}', function (int) {
//         // Then('xs.count = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[0] = -1.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[1] = 1.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//5) Scenario: A sphere is behind a ray # ../features/spheres.feature:33
//   ✔ Given r ← ray(point 0, 0, 5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← intersect\(s, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs.count = 2
//       Undefined. Implement with the following snippet:
//
//         Then('xs.count = {int}', function (int) {
//         // Then('xs.count = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[0] = -6.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[1] = -4.0
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}] = {float}', function (int, float) {
//         // Then('xs[{float}] = {float}', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//6) Scenario: Intersect sets the object on the intersection # ../features/spheres.feature:41
//   ✔ Given r ← ray(point 0, 0, -5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← intersect\(s, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs.count = 2
//       Undefined. Implement with the following snippet:
//
//         Then('xs.count = {int}', function (int) {
//         // Then('xs.count = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[0].object = s
//       Undefined. Implement with the following snippet:
//
         Then('xs[{int}].object = s', function (int) {
//         // Then('xs[{float}].object = s', function (float) {
//           // Write code here that turns the phrase above into concrete actions
           assert(xs[int].object === s)
         });
//
//   ? And xs[1].object = s
//       Undefined. Implement with the following snippet:
//
//         Then('xs[{int}].object = s', function (int) {
//         // Then('xs[{float}].object = s', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//7) Scenario: A sphere's default transformation # ../features/spheres.feature:49
//   ? Given s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then s.transform = identity_matrix
//       Undefined. Implement with the following snippet:
//
         Then('s.transform = identity_matrix', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(s.transform.M, matrix.IDENTITY))
         });
//
//
//8) Scenario: Changing a sphere's transformation # ../features/spheres.feature:53
//   ? Given s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And t ← translation(2, 3, 4)
//       Undefined. Implement with the following snippet:
let t
//         Given('t ← translation\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('t ← translation\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('t ← translation\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('t ← translation\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('t ← translation\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('t ← translation\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('t ← translation\({float}, {float}, {int})', function (float, float2, int) {
         Given('t ← translation\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           t = new transformation().translation(float, float2, float3)
         });
//
//   ? When set_transform(s, t)
//       Undefined. Implement with the following snippet:
//
         When('set_transform\\(s, t)', function () {
//           // Write code here that turns the phrase above into concrete actions
           set_transform(s, t)
         });
//
//   ? Then s.transform = t
//       Undefined. Implement with the following snippet:
//
         Then('s.transform = t', function () {
//           // Write code here that turns the phrase above into concrete actions
           assert(equal(s.transform, t))
         });
//
//
//9) Scenario: Intersecting a scaled sphere with a ray # ../features/spheres.feature:59
//   ✔ Given r ← ray(point 0, 0, -5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//   ? And s ← sphere
//       Undefined. Implement with the following snippet:
//
//         Given('s ← sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When set_transform(s, scaling 2, 2, 2)
//       Undefined. Implement with the following snippet:
//
//         When('set_transform\(s, scaling {int}, {int}, {int})', function (int, int2, int3) {
//         // When('set_transform\(s, scaling {int}, {int}, {float})', function (int, int2, float) {
//         // When('set_transform\(s, scaling {int}, {float}, {int})', function (int, float, int2) {
//         // When('set_transform\(s, scaling {int}, {float}, {float})', function (int, float, float2) {
//         // When('set_transform\(s, scaling {float}, {int}, {int})', function (float, int, int2) {
//         // When('set_transform\(s, scaling {float}, {int}, {float})', function (float, int, float2) {
//         // When('set_transform\(s, scaling {float}, {float}, {int})', function (float, float2, int) {
         When('set_transform\\(s, scaling {float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
           set_transform(s, new transformation().scaling(float, float2, float3))
         });
//
//   ? And xs ← intersect(s, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← intersect\(s, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then xs.count = 2
//       Undefined. Implement with the following snippet:
//
//         Then('xs.count = {int}', function (int) {
//         // Then('xs.count = {float}', function (float) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And xs[0].t = 3
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
//   ? And xs[1].t = 7
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
//10) Scenario: Intersecting a translated sphere with a ray # ../features/spheres.feature:68
//    ✔ Given r ← ray(point 0, 0, -5, vector 0, 0, 1) # ../features/step_definitions/rays_steps.js:130
//    ? And s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When set_transform(s, translation 5, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          When('set_transform\(s, translation {int}, {int}, {int})', function (int, int2, int3) {
//          // When('set_transform\(s, translation {int}, {int}, {float})', function (int, int2, float) {
//          // When('set_transform\(s, translation {int}, {float}, {int})', function (int, float, int2) {
//          // When('set_transform\(s, translation {int}, {float}, {float})', function (int, float, float2) {
//          // When('set_transform\(s, translation {float}, {int}, {int})', function (float, int, int2) {
//          // When('set_transform\(s, translation {float}, {int}, {float})', function (float, int, float2) {
//          // When('set_transform\(s, translation {float}, {float}, {int})', function (float, float2, int) {
          When('set_transform\\(s, translation {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
            set_transform(s, new transformation().translation(float, float2, float3))
          });
//
//    ? And xs ← intersect(s, r)
//        Undefined. Implement with the following snippet:
//
//          When('xs ← intersect\(s, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then xs.count = 0
//        Undefined. Implement with the following snippet:
//
//          Then('xs.count = {int}', function (int) {
//          // Then('xs.count = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//11) Scenario: The normal on a sphere at a point on the x axis # ../features/spheres.feature:75
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point 1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point {int}, {int}, {int})', function (int, int2, int3) {
//          // When('n ← normal_at\(s, point {int}, {int}, {float})', function (int, int2, float) {
//          // When('n ← normal_at\(s, point {int}, {float}, {int})', function (int, float, int2) {
//          // When('n ← normal_at\(s, point {int}, {float}, {float})', function (int, float, float2) {
//          // When('n ← normal_at\(s, point {float}, {int}, {int})', function (float, int, int2) {
//          // When('n ← normal_at\(s, point {float}, {int}, {float})', function (float, int, float2) {
//          // When('n ← normal_at\(s, point {float}, {float}, {int})', function (float, float2, int) {
//          // When('n ← normal_at\(s, point {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = vector(1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('n = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('n = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('n = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('n = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('n = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('n = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('n = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('n = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//12) Scenario: The normal on a sphere at a point on the y axis # ../features/spheres.feature:80
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point 0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point {int}, {int}, {int})', function (int, int2, int3) {
//          // When('n ← normal_at\(s, point {int}, {int}, {float})', function (int, int2, float) {
//          // When('n ← normal_at\(s, point {int}, {float}, {int})', function (int, float, int2) {
//          // When('n ← normal_at\(s, point {int}, {float}, {float})', function (int, float, float2) {
//          // When('n ← normal_at\(s, point {float}, {int}, {int})', function (float, int, int2) {
//          // When('n ← normal_at\(s, point {float}, {int}, {float})', function (float, int, float2) {
//          // When('n ← normal_at\(s, point {float}, {float}, {int})', function (float, float2, int) {
//          // When('n ← normal_at\(s, point {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = vector(0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('n = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('n = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('n = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('n = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('n = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('n = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('n = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('n = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//13) Scenario: The normal on a sphere at a point on the z axis # ../features/spheres.feature:85
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point 0, 0, 1)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point {int}, {int}, {int})', function (int, int2, int3) {
//          // When('n ← normal_at\(s, point {int}, {int}, {float})', function (int, int2, float) {
//          // When('n ← normal_at\(s, point {int}, {float}, {int})', function (int, float, int2) {
//          // When('n ← normal_at\(s, point {int}, {float}, {float})', function (int, float, float2) {
//          // When('n ← normal_at\(s, point {float}, {int}, {int})', function (float, int, int2) {
//          // When('n ← normal_at\(s, point {float}, {int}, {float})', function (float, int, float2) {
//          // When('n ← normal_at\(s, point {float}, {float}, {int})', function (float, float2, int) {
//          // When('n ← normal_at\(s, point {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = vector(0, 0, 1)
//        Undefined. Implement with the following snippet:
//
//          Then('n = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('n = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('n = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('n = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('n = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('n = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('n = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('n = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//14) Scenario: The normal on a sphere at a nonaxial point # ../features/spheres.feature:90
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point √3/3, √3/3, √3/3)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{int}\/{int})', function (int, int2, int3, int4, int5, int6) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{int}\/{float})', function (int, int2, int3, int4, int5, float) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{float}\/{int})', function (int, int2, int3, int4, float, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{float}\/{float})', function (int, int2, int3, int4, float, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{int}\/{int})', function (int, int2, int3, float, int4, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{int}\/{float})', function (int, int2, int3, float, int4, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{float}\/{int})', function (int, int2, int3, float, float2, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{float}\/{float})', function (int, int2, int3, float, float2, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{int}\/{int})', function (int, int2, float, int3, int4, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{int}\/{float})', function (int, int2, float, int3, int4, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{float}\/{int})', function (int, int2, float, int3, float2, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{float}\/{float})', function (int, int2, float, int3, float2, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{int}\/{int})', function (int, int2, float, float2, int3, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{int}\/{float})', function (int, int2, float, float2, int3, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{float}\/{int})', function (int, int2, float, float2, float3, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{float}\/{float})', function (int, int2, float, float2, float3, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{int}\/{int})', function (int, float, int2, int3, int4, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{int}\/{float})', function (int, float, int2, int3, int4, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{float}\/{int})', function (int, float, int2, int3, float2, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{float}\/{float})', function (int, float, int2, int3, float2, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{int}\/{int})', function (int, float, int2, float2, int3, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{int}\/{float})', function (int, float, int2, float2, int3, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{float}\/{int})', function (int, float, int2, float2, float3, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{float}\/{float})', function (int, float, int2, float2, float3, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{int}\/{int})', function (int, float, float2, int2, int3, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{int}\/{float})', function (int, float, float2, int2, int3, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{float}\/{int})', function (int, float, float2, int2, float3, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{float}\/{float})', function (int, float, float2, int2, float3, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{int}\/{int})', function (int, float, float2, float3, int2, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{int}\/{float})', function (int, float, float2, float3, int2, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{float}\/{int})', function (int, float, float2, float3, float4, int2) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{float}\/{float})', function (int, float, float2, float3, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{int}\/{int})', function (float, int, int2, int3, int4, int5) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{int}\/{float})', function (float, int, int2, int3, int4, float2) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{float}\/{int})', function (float, int, int2, int3, float2, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{float}\/{float})', function (float, int, int2, int3, float2, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{int}\/{int})', function (float, int, int2, float2, int3, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{int}\/{float})', function (float, int, int2, float2, int3, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{float}\/{int})', function (float, int, int2, float2, float3, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{float}\/{float})', function (float, int, int2, float2, float3, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{int}\/{int})', function (float, int, float2, int2, int3, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{int}\/{float})', function (float, int, float2, int2, int3, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{float}\/{int})', function (float, int, float2, int2, float3, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{float}\/{float})', function (float, int, float2, int2, float3, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{int}\/{int})', function (float, int, float2, float3, int2, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{int}\/{float})', function (float, int, float2, float3, int2, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{float}\/{int})', function (float, int, float2, float3, float4, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{float}\/{float})', function (float, int, float2, float3, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{int}\/{int})', function (float, float2, int, int2, int3, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{int}\/{float})', function (float, float2, int, int2, int3, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{float}\/{int})', function (float, float2, int, int2, float3, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{float}\/{float})', function (float, float2, int, int2, float3, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{int}\/{int})', function (float, float2, int, float3, int2, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{int}\/{float})', function (float, float2, int, float3, int2, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{float}\/{int})', function (float, float2, int, float3, float4, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{float}\/{float})', function (float, float2, int, float3, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{int}\/{int})', function (float, float2, float3, int, int2, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{int}\/{float})', function (float, float2, float3, int, int2, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{float}\/{int})', function (float, float2, float3, int, float4, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{float}\/{float})', function (float, float2, float3, int, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{int}\/{int})', function (float, float2, float3, float4, int, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{int}\/{float})', function (float, float2, float3, float4, int, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{float}\/{int})', function (float, float2, float3, float4, float5, int) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{float}\/{float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = vector(√3/3, √3/3, √3/3)
//        Undefined. Implement with the following snippet:
//
//          Then('n = vector\(√{int}\/{int}, √{int}\/{int}, √{int}\/{int})', function (int, int2, int3, int4, int5, int6) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{int}, √{int}\/{float})', function (int, int2, int3, int4, int5, float) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{int}, √{float}\/{int})', function (int, int2, int3, int4, float, int5) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{int}, √{float}\/{float})', function (int, int2, int3, int4, float, float2) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{float}, √{int}\/{int})', function (int, int2, int3, float, int4, int5) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{float}, √{int}\/{float})', function (int, int2, int3, float, int4, float2) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{float}, √{float}\/{int})', function (int, int2, int3, float, float2, int4) {
//          // Then('n = vector\(√{int}\/{int}, √{int}\/{float}, √{float}\/{float})', function (int, int2, int3, float, float2, float3) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{int}, √{int}\/{int})', function (int, int2, float, int3, int4, int5) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{int}, √{int}\/{float})', function (int, int2, float, int3, int4, float2) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{int}, √{float}\/{int})', function (int, int2, float, int3, float2, int4) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{int}, √{float}\/{float})', function (int, int2, float, int3, float2, float3) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{float}, √{int}\/{int})', function (int, int2, float, float2, int3, int4) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{float}, √{int}\/{float})', function (int, int2, float, float2, int3, float3) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{float}, √{float}\/{int})', function (int, int2, float, float2, float3, int3) {
//          // Then('n = vector\(√{int}\/{int}, √{float}\/{float}, √{float}\/{float})', function (int, int2, float, float2, float3, float4) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{int}, √{int}\/{int})', function (int, float, int2, int3, int4, int5) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{int}, √{int}\/{float})', function (int, float, int2, int3, int4, float2) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{int}, √{float}\/{int})', function (int, float, int2, int3, float2, int4) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{int}, √{float}\/{float})', function (int, float, int2, int3, float2, float3) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{float}, √{int}\/{int})', function (int, float, int2, float2, int3, int4) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{float}, √{int}\/{float})', function (int, float, int2, float2, int3, float3) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{float}, √{float}\/{int})', function (int, float, int2, float2, float3, int3) {
//          // Then('n = vector\(√{int}\/{float}, √{int}\/{float}, √{float}\/{float})', function (int, float, int2, float2, float3, float4) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{int}, √{int}\/{int})', function (int, float, float2, int2, int3, int4) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{int}, √{int}\/{float})', function (int, float, float2, int2, int3, float3) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{int}, √{float}\/{int})', function (int, float, float2, int2, float3, int3) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{int}, √{float}\/{float})', function (int, float, float2, int2, float3, float4) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{float}, √{int}\/{int})', function (int, float, float2, float3, int2, int3) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{float}, √{int}\/{float})', function (int, float, float2, float3, int2, float4) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{float}, √{float}\/{int})', function (int, float, float2, float3, float4, int2) {
//          // Then('n = vector\(√{int}\/{float}, √{float}\/{float}, √{float}\/{float})', function (int, float, float2, float3, float4, float5) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{int}, √{int}\/{int})', function (float, int, int2, int3, int4, int5) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{int}, √{int}\/{float})', function (float, int, int2, int3, int4, float2) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{int}, √{float}\/{int})', function (float, int, int2, int3, float2, int4) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{int}, √{float}\/{float})', function (float, int, int2, int3, float2, float3) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{float}, √{int}\/{int})', function (float, int, int2, float2, int3, int4) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{float}, √{int}\/{float})', function (float, int, int2, float2, int3, float3) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{float}, √{float}\/{int})', function (float, int, int2, float2, float3, int3) {
//          // Then('n = vector\(√{float}\/{int}, √{int}\/{float}, √{float}\/{float})', function (float, int, int2, float2, float3, float4) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{int}, √{int}\/{int})', function (float, int, float2, int2, int3, int4) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{int}, √{int}\/{float})', function (float, int, float2, int2, int3, float3) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{int}, √{float}\/{int})', function (float, int, float2, int2, float3, int3) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{int}, √{float}\/{float})', function (float, int, float2, int2, float3, float4) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{float}, √{int}\/{int})', function (float, int, float2, float3, int2, int3) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{float}, √{int}\/{float})', function (float, int, float2, float3, int2, float4) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{float}, √{float}\/{int})', function (float, int, float2, float3, float4, int2) {
//          // Then('n = vector\(√{float}\/{int}, √{float}\/{float}, √{float}\/{float})', function (float, int, float2, float3, float4, float5) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{int}, √{int}\/{int})', function (float, float2, int, int2, int3, int4) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{int}, √{int}\/{float})', function (float, float2, int, int2, int3, float3) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{int}, √{float}\/{int})', function (float, float2, int, int2, float3, int3) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{int}, √{float}\/{float})', function (float, float2, int, int2, float3, float4) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{float}, √{int}\/{int})', function (float, float2, int, float3, int2, int3) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{float}, √{int}\/{float})', function (float, float2, int, float3, int2, float4) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{float}, √{float}\/{int})', function (float, float2, int, float3, float4, int2) {
//          // Then('n = vector\(√{float}\/{float}, √{int}\/{float}, √{float}\/{float})', function (float, float2, int, float3, float4, float5) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{int}, √{int}\/{int})', function (float, float2, float3, int, int2, int3) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{int}, √{int}\/{float})', function (float, float2, float3, int, int2, float4) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{int}, √{float}\/{int})', function (float, float2, float3, int, float4, int2) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{int}, √{float}\/{float})', function (float, float2, float3, int, float4, float5) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{float}, √{int}\/{int})', function (float, float2, float3, float4, int, int2) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{float}, √{int}\/{float})', function (float, float2, float3, float4, int, float5) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{float}, √{float}\/{int})', function (float, float2, float3, float4, float5, int) {
//          // Then('n = vector\(√{float}\/{float}, √{float}\/{float}, √{float}\/{float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//15) Scenario: The normal is a normalized vector # ../features/spheres.feature:95
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point √3/3, √3/3, √3/3)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{int}\/{int})', function (int, int2, int3, int4, int5, int6) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{int}\/{float})', function (int, int2, int3, int4, int5, float) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{float}\/{int})', function (int, int2, int3, int4, float, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{int}, √{float}\/{float})', function (int, int2, int3, int4, float, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{int}\/{int})', function (int, int2, int3, float, int4, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{int}\/{float})', function (int, int2, int3, float, int4, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{float}\/{int})', function (int, int2, int3, float, float2, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{int}\/{float}, √{float}\/{float})', function (int, int2, int3, float, float2, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{int}\/{int})', function (int, int2, float, int3, int4, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{int}\/{float})', function (int, int2, float, int3, int4, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{float}\/{int})', function (int, int2, float, int3, float2, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{int}, √{float}\/{float})', function (int, int2, float, int3, float2, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{int}\/{int})', function (int, int2, float, float2, int3, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{int}\/{float})', function (int, int2, float, float2, int3, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{float}\/{int})', function (int, int2, float, float2, float3, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{int}, √{float}\/{float}, √{float}\/{float})', function (int, int2, float, float2, float3, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{int}\/{int})', function (int, float, int2, int3, int4, int5) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{int}\/{float})', function (int, float, int2, int3, int4, float2) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{float}\/{int})', function (int, float, int2, int3, float2, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{int}, √{float}\/{float})', function (int, float, int2, int3, float2, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{int}\/{int})', function (int, float, int2, float2, int3, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{int}\/{float})', function (int, float, int2, float2, int3, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{float}\/{int})', function (int, float, int2, float2, float3, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{int}\/{float}, √{float}\/{float})', function (int, float, int2, float2, float3, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{int}\/{int})', function (int, float, float2, int2, int3, int4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{int}\/{float})', function (int, float, float2, int2, int3, float3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{float}\/{int})', function (int, float, float2, int2, float3, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{int}, √{float}\/{float})', function (int, float, float2, int2, float3, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{int}\/{int})', function (int, float, float2, float3, int2, int3) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{int}\/{float})', function (int, float, float2, float3, int2, float4) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{float}\/{int})', function (int, float, float2, float3, float4, int2) {
//          // When('n ← normal_at\(s, point √{int}\/{float}, √{float}\/{float}, √{float}\/{float})', function (int, float, float2, float3, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{int}\/{int})', function (float, int, int2, int3, int4, int5) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{int}\/{float})', function (float, int, int2, int3, int4, float2) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{float}\/{int})', function (float, int, int2, int3, float2, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{int}, √{float}\/{float})', function (float, int, int2, int3, float2, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{int}\/{int})', function (float, int, int2, float2, int3, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{int}\/{float})', function (float, int, int2, float2, int3, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{float}\/{int})', function (float, int, int2, float2, float3, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{int}\/{float}, √{float}\/{float})', function (float, int, int2, float2, float3, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{int}\/{int})', function (float, int, float2, int2, int3, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{int}\/{float})', function (float, int, float2, int2, int3, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{float}\/{int})', function (float, int, float2, int2, float3, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{int}, √{float}\/{float})', function (float, int, float2, int2, float3, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{int}\/{int})', function (float, int, float2, float3, int2, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{int}\/{float})', function (float, int, float2, float3, int2, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{float}\/{int})', function (float, int, float2, float3, float4, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{int}, √{float}\/{float}, √{float}\/{float})', function (float, int, float2, float3, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{int}\/{int})', function (float, float2, int, int2, int3, int4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{int}\/{float})', function (float, float2, int, int2, int3, float3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{float}\/{int})', function (float, float2, int, int2, float3, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{int}, √{float}\/{float})', function (float, float2, int, int2, float3, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{int}\/{int})', function (float, float2, int, float3, int2, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{int}\/{float})', function (float, float2, int, float3, int2, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{float}\/{int})', function (float, float2, int, float3, float4, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{int}\/{float}, √{float}\/{float})', function (float, float2, int, float3, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{int}\/{int})', function (float, float2, float3, int, int2, int3) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{int}\/{float})', function (float, float2, float3, int, int2, float4) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{float}\/{int})', function (float, float2, float3, int, float4, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{int}, √{float}\/{float})', function (float, float2, float3, int, float4, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{int}\/{int})', function (float, float2, float3, float4, int, int2) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{int}\/{float})', function (float, float2, float3, float4, int, float5) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{float}\/{int})', function (float, float2, float3, float4, float5, int) {
//          // When('n ← normal_at\(s, point √{float}\/{float}, √{float}\/{float}, √{float}\/{float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = normalize(n)
//        Undefined. Implement with the following snippet:
//
//          Then('n = normalize\(n)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//16) Scenario: Computing the normal on a translated sphere # ../features/spheres.feature:100
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(s, translation 0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(s, translation {int}, {int}, {int})', function (int, int2, int3) {
//          // Given('set_transform\(s, translation {int}, {int}, {float})', function (int, int2, float) {
//          // Given('set_transform\(s, translation {int}, {float}, {int})', function (int, float, int2) {
//          // Given('set_transform\(s, translation {int}, {float}, {float})', function (int, float, float2) {
//          // Given('set_transform\(s, translation {float}, {int}, {int})', function (float, int, int2) {
//          // Given('set_transform\(s, translation {float}, {int}, {float})', function (float, int, float2) {
//          // Given('set_transform\(s, translation {float}, {float}, {int})', function (float, float2, int) {
//          // Given('set_transform\(s, translation {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point 0, 1.70711, -0.70711)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point {int}, {float}, {float})', function (int, float, float2) {
//          // When('n ← normal_at\(s, point {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = vector(0, 0.70711, -0.70711)
//        Undefined. Implement with the following snippet:
//
//          Then('n = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('n = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//17) Scenario: Computing the normal on a transformed sphere # ../features/spheres.feature:106
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And m ← scaling(1, 0.5, 1) * rotation_z(π/5)
//        Undefined. Implement with the following snippet:
//
//          Given('m ← scaling\({int}, {float}, {int}) * rotation_z\(π\/{int})', function (int, float, int2, int3) {
//          // Given('m ← scaling\({int}, {float}, {int}) * rotation_z\(π\/{float})', function (int, float, int2, float2) {
//          // Given('m ← scaling\({int}, {float}, {float}) * rotation_z\(π\/{int})', function (int, float, float2, int2) {
//          // Given('m ← scaling\({int}, {float}, {float}) * rotation_z\(π\/{float})', function (int, float, float2, float3) {
//          // Given('m ← scaling\({float}, {float}, {int}) * rotation_z\(π\/{int})', function (float, float2, int, int2) {
//          // Given('m ← scaling\({float}, {float}, {int}) * rotation_z\(π\/{float})', function (float, float2, int, float3) {
//          // Given('m ← scaling\({float}, {float}, {float}) * rotation_z\(π\/{int})', function (float, float2, float3, int) {
//          // Given('m ← scaling\({float}, {float}, {float}) * rotation_z\(π\/{float})', function (float, float2, float3, float4) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_transform(s, m)
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\(s, m)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When n ← normal_at(s, point 0, √2/2, -√2/2)
//        Undefined. Implement with the following snippet:
//
//          When('n ← normal_at\(s, point {int}, √{int}\/{int}, {float}√{int}\/{int})', function (int, int2, int3, float, int4, int5) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{int}, {float}√{int}\/{float})', function (int, int2, int3, float, int4, float2) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{int}, {float}√{float}\/{int})', function (int, int2, int3, float, float2, int4) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{int}, {float}√{float}\/{float})', function (int, int2, int3, float, float2, float3) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{float}, {float}√{int}\/{int})', function (int, int2, float, float2, int3, int4) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{float}, {float}√{int}\/{float})', function (int, int2, float, float2, int3, float3) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{float}, {float}√{float}\/{int})', function (int, int2, float, float2, float3, int3) {
//          // When('n ← normal_at\(s, point {int}, √{int}\/{float}, {float}√{float}\/{float})', function (int, int2, float, float2, float3, float4) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{int}, {float}√{int}\/{int})', function (int, float, int2, float2, int3, int4) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{int}, {float}√{int}\/{float})', function (int, float, int2, float2, int3, float3) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{int}, {float}√{float}\/{int})', function (int, float, int2, float2, float3, int3) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{int}, {float}√{float}\/{float})', function (int, float, int2, float2, float3, float4) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{float}, {float}√{int}\/{int})', function (int, float, float2, float3, int2, int3) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{float}, {float}√{int}\/{float})', function (int, float, float2, float3, int2, float4) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{float}, {float}√{float}\/{int})', function (int, float, float2, float3, float4, int2) {
//          // When('n ← normal_at\(s, point {int}, √{float}\/{float}, {float}√{float}\/{float})', function (int, float, float2, float3, float4, float5) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{int}, {float}√{int}\/{int})', function (float, int, int2, float2, int3, int4) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{int}, {float}√{int}\/{float})', function (float, int, int2, float2, int3, float3) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{int}, {float}√{float}\/{int})', function (float, int, int2, float2, float3, int3) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{int}, {float}√{float}\/{float})', function (float, int, int2, float2, float3, float4) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{float}, {float}√{int}\/{int})', function (float, int, float2, float3, int2, int3) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{float}, {float}√{int}\/{float})', function (float, int, float2, float3, int2, float4) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{float}, {float}√{float}\/{int})', function (float, int, float2, float3, float4, int2) {
//          // When('n ← normal_at\(s, point {float}, √{int}\/{float}, {float}√{float}\/{float})', function (float, int, float2, float3, float4, float5) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{int}, {float}√{int}\/{int})', function (float, float2, int, float3, int2, int3) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{int}, {float}√{int}\/{float})', function (float, float2, int, float3, int2, float4) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{int}, {float}√{float}\/{int})', function (float, float2, int, float3, float4, int2) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{int}, {float}√{float}\/{float})', function (float, float2, int, float3, float4, float5) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{float}, {float}√{int}\/{int})', function (float, float2, float3, float4, int, int2) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{float}, {float}√{int}\/{float})', function (float, float2, float3, float4, int, float5) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{float}, {float}√{float}\/{int})', function (float, float2, float3, float4, float5, int) {
//          // When('n ← normal_at\(s, point {float}, √{float}\/{float}, {float}√{float}\/{float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then n = vector(0, 0.97014, -0.24254)
//        Undefined. Implement with the following snippet:
//
//          Then('n = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('n = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//18) Scenario: A sphere has a default material # ../features/spheres.feature:113
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When m ← s.material
//        Undefined. Implement with the following snippet:
//
//          When('m ← s.material', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then m = material()
//        Undefined. Implement with the following snippet:
//
//          Then('m = material\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//19) Scenario: A sphere may be assigned a material # ../features/spheres.feature:118
//    ? Given s ← sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And m ← material()
//        Undefined. Implement with the following snippet:
//
//          Given('m ← material\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And m.ambient ← 1
//        Undefined. Implement with the following snippet:
//
//          Given('m.ambient ← {int}', function (int) {
//          // Given('m.ambient ← {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When s.material ← m
//        Undefined. Implement with the following snippet:
//
//          When('s.material ← m', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then s.material = m
//        Undefined. Implement with the following snippet:
//
//          Then('s.material = m', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//20) Scenario: A helper for producing a sphere with a glassy material # ../features/spheres.feature:125
//    ? Given s ← glass_sphere
//        Undefined. Implement with the following snippet:
//
//          Given('s ← glass_sphere', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then s.transform = identity_matrix
//        Undefined. Implement with the following snippet:
//
//          Then('s.transform = identity_matrix', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s.material.transparency = 1.0
//        Undefined. Implement with the following snippet:
//
//          Then('s.material.transparency = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And s.material.refractive_index = 1.5
//        Undefined. Implement with the following snippet:
//
//          Then('s.material.refractive_index = {float}', function (float) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//