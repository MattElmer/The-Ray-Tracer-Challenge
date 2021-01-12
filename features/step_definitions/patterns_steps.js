const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { color, point } = require('../../tuple')
const { test_pattern, stripe_pattern } = require('../../pattern')
const { sphere } = require('../../sphere')
const { scaling, translation } = require('../../transformation')
const { identity_matrix } = require('../../matrix')
//
//1) Scenario: Creating a stripe pattern # ../features/patterns.feature:7
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
let black
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
         Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           black = color(float, float2, float3)
         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
let white
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
         Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           white = color(float, float2, float3)
         });
//
//   ? Given pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
let pattern
         Given('pattern ← new stripe_pattern\\(white, black)', function () {
           // Write code here that turns the phrase above into concrete actions
           pattern = new stripe_pattern(white, black)
         });
//
//   ? Then pattern.a = white
//       Undefined. Implement with the following snippet:
//
         Then('pattern.a = white', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(pattern.a, white))
         });
//
//   ? And pattern.b = black
//       Undefined. Implement with the following snippet:
//
         Then('pattern.b = black', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(pattern.b, black))
         });
//
//
//2) Scenario: A stripe pattern is constant in y # ../features/patterns.feature:12
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← stripe_pattern\\(white, black)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then stripe_at(pattern, point 0, 0, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
         Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(pattern.stripe_at(point(float, float2, float3)), white))
         });
//
//   ? And stripe_at(pattern, point 0, 1, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point 0, 2, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//3) Scenario: A stripe pattern is constant in z # ../features/patterns.feature:18
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← stripe_pattern\\(white, black)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then stripe_at(pattern, point 0, 0, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point 0, 0, 1) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point 0, 0, 2) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//4) Scenario: A stripe pattern alternates in x # ../features/patterns.feature:24
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← stripe_pattern\\(white, black)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then stripe_at(pattern, point 0, 0, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point 0.9, 0, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point 1, 0, 0) = black
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = black', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = black', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = black', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = black', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = black', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
        Then('stripe_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(pattern.stripe_at(point(float, float2, float3)), black))
        });
//   ? And stripe_at(pattern, point -0.1, 0, 0) = black
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {float}, {int}, {int}) = black', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point -1, 0, 0) = black
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {int}, {int}, {int}) = black', function (int, int2, int3) {
//         // Then('stripe_at\\(pattern, point {int}, {int}, {float}) = black', function (int, int2, float) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {int}) = black', function (int, float, int2) {
//         // Then('stripe_at\\(pattern, point {int}, {float}, {float}) = black', function (int, float, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {int}) = black', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And stripe_at(pattern, point -1.1, 0, 0) = white
//       Undefined. Implement with the following snippet:
//
//         Then('stripe_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//         // Then('stripe_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//         // Then('stripe_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//5) Scenario: Stripes with an object transformation # ../features/patterns.feature:33
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given object ← new sphere
//       Undefined. Implement with the following snippet:
let object
         Given('object ← new sphere', function () {
           // Write code here that turns the phrase above into concrete actions
           object = new sphere
         });
//
//   ? And set_transform(object, scaling 2, 2, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('set_transform\\(object, scaling {int}, {int}, {int})', function (int, int2, int3) {
//         // Given('set_transform\\(object, scaling {int}, {int}, {float})', function (int, int2, float) {
//         // Given('set_transform\\(object, scaling {int}, {float}, {int})', function (int, float, int2) {
//         // Given('set_transform\\(object, scaling {int}, {float}, {float})', function (int, float, float2) {
//         // Given('set_transform\\(object, scaling {float}, {int}, {int})', function (float, int, int2) {
//         // Given('set_transform\\(object, scaling {float}, {int}, {float})', function (float, int, float2) {
//         // Given('set_transform\\(object, scaling {float}, {float}, {int})', function (float, float2, int) {
         Given('set_transform\\(object, scaling {float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           object.set_transform(scaling(float, float2, float3))
         });
//
//   ? And pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← stripe_pattern\\(white, black)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When c ← stripe_at_object(pattern, object, point 1.5, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         When('c ← stripe_at_object\\(pattern, object, point {float}, {int}, {int})', function (float, int, int2) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {int}, {float})', function (float, int, float2) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {float}, {int})', function (float, float2, int) {
         When('c ← stripe_at_object\\(pattern, object, point {float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           c = pattern.stripe_at_object(object, point(float, float2, float3))
         });
//
//   ? Then c = white
//       Undefined. Implement with the following snippet:
//
         Then('c = white', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(c, white))
         });
//
//
//6) Scenario: Stripes with a pattern transformation # ../features/patterns.feature:40
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given object ← new sphere
//       Undefined. Implement with the following snippet:
//
//         Given('object ← new sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← stripe_pattern\\(white, black)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And set_pattern_transform(pattern, scaling 2, 2, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('set_pattern_transform\\(pattern, scaling {int}, {int}, {int})', function (int, int2, int3) {
//         // Given('set_pattern_transform\\(pattern, scaling {int}, {int}, {float})', function (int, int2, float) {
//         // Given('set_pattern_transform\\(pattern, scaling {int}, {float}, {int})', function (int, float, int2) {
//         // Given('set_pattern_transform\\(pattern, scaling {int}, {float}, {float})', function (int, float, float2) {
//         // Given('set_pattern_transform\\(pattern, scaling {float}, {int}, {int})', function (float, int, int2) {
//         // Given('set_pattern_transform\\(pattern, scaling {float}, {int}, {float})', function (float, int, float2) {
//         // Given('set_pattern_transform\\(pattern, scaling {float}, {float}, {int})', function (float, float2, int) {
         Given('set_pattern_transform\\(pattern, scaling {float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           pattern.set_transform(scaling(float, float2, float3))
         });
//
//   ? When c ← stripe_at_object(pattern, object, point 1.5, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         When('c ← stripe_at_object\\(pattern, object, point {float}, {int}, {int})', function (float, int, int2) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {int}, {float})', function (float, int, float2) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {float}, {int})', function (float, float2, int) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = white
//       Undefined. Implement with the following snippet:
//
//         Then('c = white', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//7) Scenario: Stripes with both an object and a pattern transformation # ../features/patterns.feature:47
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given object ← new sphere
//       Undefined. Implement with the following snippet:
//
//         Given('object ← new sphere', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And set_transform(object, scaling 2, 2, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('set_transform\\(object, scaling {int}, {int}, {int})', function (int, int2, int3) {
//         // Given('set_transform\\(object, scaling {int}, {int}, {float})', function (int, int2, float) {
//         // Given('set_transform\\(object, scaling {int}, {float}, {int})', function (int, float, int2) {
//         // Given('set_transform\\(object, scaling {int}, {float}, {float})', function (int, float, float2) {
//         // Given('set_transform\\(object, scaling {float}, {int}, {int})', function (float, int, int2) {
//         // Given('set_transform\\(object, scaling {float}, {int}, {float})', function (float, int, float2) {
//         // Given('set_transform\\(object, scaling {float}, {float}, {int})', function (float, float2, int) {
//         // Given('set_transform\\(object, scaling {float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And pattern ← stripe_pattern(white, black)
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← stripe_pattern\\(white, black)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And set_pattern_transform(pattern, translation 0.5, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('set_pattern_transform\\(pattern, translation {float}, {int}, {int})', function (float, int, int2) {
//         // Given('set_pattern_transform\\(pattern, translation {float}, {int}, {float})', function (float, int, float2) {
//         // Given('set_pattern_transform\\(pattern, translation {float}, {float}, {int})', function (float, float2, int) {
         Given('set_pattern_transform\\(pattern, translation {float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           pattern.set_transform(translation(float, float2, float3))
         });
//
//   ? When c ← stripe_at_object(pattern, object, point 2.5, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         When('c ← stripe_at_object\\(pattern, object, point {float}, {int}, {int})', function (float, int, int2) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {int}, {float})', function (float, int, float2) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {float}, {int})', function (float, float2, int) {
//         // When('c ← stripe_at_object\\(pattern, object, point {float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then c = white
//       Undefined. Implement with the following snippet:
//
//         Then('c = white', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//8) Scenario: The default pattern transformation # ../features/patterns.feature:55
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given pattern ← new test_pattern
//       Undefined. Implement with the following snippet:
//
         Given('pattern ← new test_pattern', function () {
           // Write code here that turns the phrase above into concrete actions
           pattern = new test_pattern
         });
//
//   ? Then pattern.transform = identity_matrix
//       Undefined. Implement with the following snippet:
//
         Then('pattern.transform = identity_matrix', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(pattern.transform, identity_matrix))
         });
//
//
//9) Scenario: Assigning a transformation # ../features/patterns.feature:59
//   ? Given black ← color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
//         Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And white ← color(1, 1, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//         // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Given pattern ← new test_pattern
//       Undefined. Implement with the following snippet:
//
//         Given('pattern ← new test_pattern', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When set_pattern_transform(pattern, translation 1, 2, 3)
//       Undefined. Implement with the following snippet:
//
//         When('set_pattern_transform\\(pattern, translation {int}, {int}, {int})', function (int, int2, int3) {
//         // When('set_pattern_transform\\(pattern, translation {int}, {int}, {float})', function (int, int2, float) {
//         // When('set_pattern_transform\\(pattern, translation {int}, {float}, {int})', function (int, float, int2) {
//         // When('set_pattern_transform\\(pattern, translation {int}, {float}, {float})', function (int, float, float2) {
//         // When('set_pattern_transform\\(pattern, translation {float}, {int}, {int})', function (float, int, int2) {
//         // When('set_pattern_transform\\(pattern, translation {float}, {int}, {float})', function (float, int, float2) {
//         // When('set_pattern_transform\\(pattern, translation {float}, {float}, {int})', function (float, float2, int) {
//         // When('set_pattern_transform\\(pattern, translation {float}, {float}, {float})', function (float, float2, float3) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then pattern.transform = translation(1, 2, 3)
//       Undefined. Implement with the following snippet:
//
//         Then('pattern.transform = translation\\({int}, {int}, {int})', function (int, int2, int3) {
//         // Then('pattern.transform = translation\\({int}, {int}, {float})', function (int, int2, float) {
//         // Then('pattern.transform = translation\\({int}, {float}, {int})', function (int, float, int2) {
//         // Then('pattern.transform = translation\\({int}, {float}, {float})', function (int, float, float2) {
//         // Then('pattern.transform = translation\\({float}, {int}, {int})', function (float, int, int2) {
//         // Then('pattern.transform = translation\\({float}, {int}, {float})', function (float, int, float2) {
//         // Then('pattern.transform = translation\\({float}, {float}, {int})', function (float, float2, int) {
         Then('pattern.transform = translation\\({float}, {float}, {float})', function (float, float2, float3) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(pattern.transform, translation(float, float2, float3)))
         });
//
//
//10) Scenario: A pattern with an object transformation # ../features/patterns.feature:64
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Given shape ← new sphere # ../features/step_definitions/intersections_steps.js:117
//    ? And set_transform(shape, scaling 2, 2, 2)
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\\(shape, scaling {int}, {int}, {int})', function (int, int2, int3) {
//          // Given('set_transform\\(shape, scaling {int}, {int}, {float})', function (int, int2, float) {
//          // Given('set_transform\\(shape, scaling {int}, {float}, {int})', function (int, float, int2) {
//          // Given('set_transform\\(shape, scaling {int}, {float}, {float})', function (int, float, float2) {
//          // Given('set_transform\\(shape, scaling {float}, {int}, {int})', function (float, int, int2) {
//          // Given('set_transform\\(shape, scaling {float}, {int}, {float})', function (float, int, float2) {
//          // Given('set_transform\\(shape, scaling {float}, {float}, {int})', function (float, float2, int) {
          Given('set_transform\\(shape, scaling {float}, {float}, {float})', function (float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            shape.set_transform(scaling(float, float2, float3))
          });
//
//    ? And pattern ← new test_pattern
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← new test_pattern', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When c ← pattern_at_shape(pattern, shape, point 2, 3, 4)
//        Undefined. Implement with the following snippet:
//
//          When('c ← pattern_at_shape\\(pattern, shape, point {int}, {int}, {int})', function (int, int2, int3) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {int}, {int}, {float})', function (int, int2, float) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {int}, {float}, {int})', function (int, float, int2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {int}, {float}, {float})', function (int, float, float2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {int}, {int})', function (float, int, int2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {int}, {float})', function (float, int, float2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {float}, {int})', function (float, float2, int) {
          When('c ← pattern_at_shape\\(pattern, shape, point {float}, {float}, {float})', function (float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            c = pattern.pattern_at_shape(shape, point(float, float2, float3))
          });
//
//    - Then c = color(1, 1.5, 2) # ../features/step_definitions/world_steps.js:379
//
//11) Scenario: A pattern with a pattern transformation # ../features/patterns.feature:71
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Given shape ← new sphere # ../features/step_definitions/intersections_steps.js:117
//    ? And pattern ← new test_pattern
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← new test_pattern', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_pattern_transform(pattern, scaling 2, 2, 2)
//        Undefined. Implement with the following snippet:
//
//          Given('set_pattern_transform\\(pattern, scaling {int}, {int}, {int})', function (int, int2, int3) {
//          // Given('set_pattern_transform\\(pattern, scaling {int}, {int}, {float})', function (int, int2, float) {
//          // Given('set_pattern_transform\\(pattern, scaling {int}, {float}, {int})', function (int, float, int2) {
//          // Given('set_pattern_transform\\(pattern, scaling {int}, {float}, {float})', function (int, float, float2) {
//          // Given('set_pattern_transform\\(pattern, scaling {float}, {int}, {int})', function (float, int, int2) {
//          // Given('set_pattern_transform\\(pattern, scaling {float}, {int}, {float})', function (float, int, float2) {
//          // Given('set_pattern_transform\\(pattern, scaling {float}, {float}, {int})', function (float, float2, int) {
//          // Given('set_pattern_transform\\(pattern, scaling {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When c ← pattern_at_shape(pattern, shape, point 2, 3, 4)
//        Undefined. Implement with the following snippet:
//
//          When('c ← pattern_at_shape\\(pattern, shape, point {int}, {int}, {int})', function (int, int2, int3) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {int}, {int}, {float})', function (int, int2, float) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {int}, {float}, {int})', function (int, float, int2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {int}, {float}, {float})', function (int, float, float2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {int}, {int})', function (float, int, int2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {int}, {float})', function (float, int, float2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {float}, {int})', function (float, float2, int) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then c = color(1, 1.5, 2) # ../features/step_definitions/world_steps.js:379
//
//12) Scenario: A pattern with both an object and a pattern transformation # ../features/patterns.feature:78
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Given shape ← new sphere # ../features/step_definitions/intersections_steps.js:117
//    ? And set_transform(shape, scaling 2, 2, 2)
//        Undefined. Implement with the following snippet:
//
//          Given('set_transform\\(shape, scaling {int}, {int}, {int})', function (int, int2, int3) {
//          // Given('set_transform\\(shape, scaling {int}, {int}, {float})', function (int, int2, float) {
//          // Given('set_transform\\(shape, scaling {int}, {float}, {int})', function (int, float, int2) {
//          // Given('set_transform\\(shape, scaling {int}, {float}, {float})', function (int, float, float2) {
//          // Given('set_transform\\(shape, scaling {float}, {int}, {int})', function (float, int, int2) {
//          // Given('set_transform\\(shape, scaling {float}, {int}, {float})', function (float, int, float2) {
//          // Given('set_transform\\(shape, scaling {float}, {float}, {int})', function (float, float2, int) {
//          // Given('set_transform\\(shape, scaling {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern ← new test_pattern
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← new test_pattern', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And set_pattern_transform(pattern, translation 0.5, 1, 1.5)
//        Undefined. Implement with the following snippet:
//
//          Given('set_pattern_transform\\(pattern, translation {float}, {int}, {float})', function (float, int, float2) {
//          // Given('set_pattern_transform\\(pattern, translation {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When c ← pattern_at_shape(pattern, shape, point 2.5, 3, 3.5)
//        Undefined. Implement with the following snippet:
//
//          When('c ← pattern_at_shape\\(pattern, shape, point {float}, {int}, {float})', function (float, int, float2) {
//          // When('c ← pattern_at_shape\\(pattern, shape, point {float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then c = color(0.75, 0.5, 0.25) # ../features/step_definitions/world_steps.js:379
//
//13) Scenario: A gradient linearly interpolates between colors # ../features/patterns.feature:86
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Given pattern ← gradient_pattern(white, black)
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← gradient_pattern\\(white, black)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then pattern_at(pattern, point 0, 0, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0.25, 0, 0) = color(0.75, 0.75, 0.75)
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {float}, {int}, {int}) = color\\({float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = color\\({float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = color\\({float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = color\\({float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0.5, 0, 0) = color(0.5, 0.5, 0.5)
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {float}, {int}, {int}) = color\\({float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = color\\({float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = color\\({float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = color\\({float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0.75, 0, 0) = color(0.25, 0.25, 0.25)
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {float}, {int}, {int}) = color\\({float}, {float}, {float})', function (float, int, int2, float2, float3, float4) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = color\\({float}, {float}, {float})', function (float, int, float2, float3, float4, float5) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = color\\({float}, {float}, {float})', function (float, float2, int, float3, float4, float5) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = color\\({float}, {float}, {float})', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//14) Scenario: A ring should extend in both x and z # ../features/patterns.feature:93
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Given pattern ← ring_pattern(white, black)
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← ring_pattern\\(white, black)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then pattern_at(pattern, point 0, 0, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 1, 0, 0) = black
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = black', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = black', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = black', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = black', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = black', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0, 0, 1) = black
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = black', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = black', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = black', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = black', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = black', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0.708, 0, 0.708) = black
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//15) Scenario: Checkers should repeat in x # ../features/patterns.feature:101
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Given pattern ← checkers_pattern(white, black)
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← checkers_pattern\\(white, black)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then pattern_at(pattern, point 0, 0, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0.99, 0, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 1.01, 0, 0) = black
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {float}, {int}, {int}) = black', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//16) Scenario: Checkers should repeat in y # ../features/patterns.feature:107
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Given pattern ← checkers_pattern(white, black)
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← checkers_pattern\\(white, black)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then pattern_at(pattern, point 0, 0, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0, 0.99, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0, 1.01, 0) = black
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {float}, {int}) = black', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = black', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = black', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//17) Scenario: Checkers should repeat in z # ../features/patterns.feature:113
//    ? Given black ← color(0, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Given('black ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('black ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('black ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('black ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('black ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('black ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('black ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('black ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And white ← color(1, 1, 1)
//        Undefined. Implement with the following snippet:
//
//          Given('white ← color\\({int}, {int}, {int})', function (int, int2, int3) {
//          // Given('white ← color\\({int}, {int}, {float})', function (int, int2, float) {
//          // Given('white ← color\\({int}, {float}, {int})', function (int, float, int2) {
//          // Given('white ← color\\({int}, {float}, {float})', function (int, float, float2) {
//          // Given('white ← color\\({float}, {int}, {int})', function (float, int, int2) {
//          // Given('white ← color\\({float}, {int}, {float})', function (float, int, float2) {
//          // Given('white ← color\\({float}, {float}, {int})', function (float, float2, int) {
//          // Given('white ← color\\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Given pattern ← checkers_pattern(white, black)
//        Undefined. Implement with the following snippet:
//
//          Given('pattern ← checkers_pattern\\(white, black)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then pattern_at(pattern, point 0, 0, 0) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {int}) = white', function (int, int2, int3) {
//          // Then('pattern_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {int}) = white', function (int, float, int2) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {int}) = white', function (float, int, int2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {int}) = white', function (float, float2, int) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0, 0, 0.99) = white
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {float}) = white', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = white', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = white', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = white', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And pattern_at(pattern, point 0, 0, 1.01) = black
//        Undefined. Implement with the following snippet:
//
//          Then('pattern_at\\(pattern, point {int}, {int}, {float}) = black', function (int, int2, float) {
//          // Then('pattern_at\\(pattern, point {int}, {float}, {float}) = black', function (int, float, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {int}, {float}) = black', function (float, int, float2) {
//          // Then('pattern_at\\(pattern, point {float}, {float}, {float}) = black', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
