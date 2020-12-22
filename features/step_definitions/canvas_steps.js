const { Before, Given, When, Then } = require('@cucumber/cucumber')
const { canvas } = require('../../canvas')
const { equal } = require('../../utility')
const assert = require('assert')
const _ = require('lodash')
const { color } = require('../../tuple')
//1) Scenario: Creating a canvas # ../features/canvas.feature:3
//   ? Given c ← canvas(10, 20)
//       Undefined. Implement with the following snippet:
let c
        Given('c ← canvas\\({int}, {int})', function (int, int2) {
        // Given('c ← canvas\({int}, {float})', function (int, float) {
        // Given('c ← canvas\({float}, {int})', function (float, int) {
        // Given('c ← canvas\({float}, {float})', function (float, float2) {
          // Write code here that turns the phrase above into concrete actions
          c = new canvas(int, int2)
        });
//
//   ? Then c.width = 10
//       Undefined. Implement with the following snippet:
//
        Then('c.width = {int}', function (int) {
        // Then('c.width = {float}', function (float) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(c.width, int))
        });
//
//   ? And c.height = 20
//       Undefined. Implement with the following snippet:
//
        Then('c.height = {int}', function (int) {
        // Then('c.height = {float}', function (float) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(c.height, int))
        });
//
//   ? And every pixel of c is color(0, 0, 0)
//       Undefined. Implement with the following snippet:
//
        // Then('every pixel of c is color\({int}, {int}, {int})', function (int, int2, int3) {
        // Then('every pixel of c is color\({int}, {int}, {float})', function (int, int2, float) {
        // Then('every pixel of c is color\({int}, {float}, {int})', function (int, float, int2) {
        // Then('every pixel of c is color\({int}, {float}, {float})', function (int, float, float2) {
        // Then('every pixel of c is color\({float}, {int}, {int})', function (float, int, int2) {
        // Then('every pixel of c is color\({float}, {int}, {float})', function (float, int, float2) {
        // Then('every pixel of c is color\({float}, {float}, {int})', function (float, float2, int) {
        Then('every pixel of c is color\\({float}, {float}, {float})', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          let col = color(float, float2, float3)
          _.range(c.height).forEach(i =>
              _.range(c.width).forEach(j =>
                  assert(equal(c.pixel_at(j, i), col))))
        });
//
//2) Scenario: Writing pixels to a canvas # ../features/canvas.feature:9
//   ? Given c ← canvas(10, 20)
//       Undefined. Implement with the following snippet:
//
//         Given('c ← canvas\({int}, {int})', function (int, int2) {
//         // Given('c ← canvas\({int}, {float})', function (int, float) {
//         // Given('c ← canvas\({float}, {int})', function (float, int) {
//         // Given('c ← canvas\({float}, {float})', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And red ← color(1, 0, 0)
//       Undefined. Implement with the following snippet:
let red
//         Given('red ← color\({int}, {int}, {int})', function (int, int2, int3) {
//         // Given('red ← color\({int}, {int}, {float})', function (int, int2, float) {
//         // Given('red ← color\({int}, {float}, {int})', function (int, float, int2) {
//         // Given('red ← color\({int}, {float}, {float})', function (int, float, float2) {
//         // Given('red ← color\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('red ← color\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('red ← color\({float}, {float}, {int})', function (float, float2, int) {
        Given('red ← color\\({float}, {float}, {float})', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          red = color(float, float2, float3)
        });
//
//   ? When write_pixel(c, 2, 3, red)
//       Undefined. Implement with the following snippet:
//
        When('write_pixel\\(c, {int}, {int}, red)', function (int, int2) {
        // When('write_pixel\(c, {int}, {float}, red)', function (int, float) {
        // When('write_pixel\(c, {float}, {int}, red)', function (float, int) {
        // When('write_pixel\(c, {float}, {float}, red)', function (float, float2) {
          // Write code here that turns the phrase above into concrete actions
          c.write_pixel(int, int2, red)
        });
//
//   ? Then pixel_at(c, 2, 3) = red
//       Undefined. Implement with the following snippet:
//
        Then('pixel_at\\(c, {int}, {int}) = red', function (int, int2) {
        // Then('pixel_at\(c, {int}, {float}) = red', function (int, float) {
        // Then('pixel_at\(c, {float}, {int}) = red', function (float, int) {
        // Then('pixel_at\(c, {float}, {float}) = red', function (float, float2) {
          // Write code here that turns the phrase above into concrete actions
          assert(equal(c.pixel_at(int, int2), red))
        });
//
//
//3) Scenario: Constructing the PPM header # ../features/canvas.feature:15
//   ? Given c ← canvas(5, 3)
//       Undefined. Implement with the following snippet:
//
//         Given('c ← canvas\({int}, {int})', function (int, int2) {
//         // Given('c ← canvas\({int}, {float})', function (int, float) {
//         // Given('c ← canvas\({float}, {int})', function (float, int) {
//         // Given('c ← canvas\({float}, {float})', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When ppm ← canvas_to_ppm(c)
//       Undefined. Implement with the following snippet:
let ppm
        When('ppm ← canvas_to_ppm\\(c)', function () {
          // Write code here that turns the phrase above into concrete actions
          ppm = c.canvas_to_ppm()
        });
//
//   ? Then lines 1-3 of ppm are
//       """
//       P3
//       5 3
//       255
//       """
//       Undefined. Implement with the following snippet:
//
        Then('lines {int}-{int} of ppm are', function (int, int2, docString) {
        // Then('lines {int}-{float} of ppm are', function (int, float, docString) {
        // Then('lines {float}-{int} of ppm are', function (float, int, docString) {
        // Then('lines {float}-{float} of ppm are', function (float, float2, docString) {
          // Write code here that turns the phrase above into concrete actions
          assert(ppm.split('\n').slice(int - 1, int2).join('\n') == docString)
        });
//
//
//4) Scenario: Constructing the PPM pixel data # ../features/canvas.feature:25
//   ? Given c ← canvas(5, 3)
//       Undefined. Implement with the following snippet:
//
//         Given('c ← canvas\({int}, {int})', function (int, int2) {
//         // Given('c ← canvas\({int}, {float})', function (int, float) {
//         // Given('c ← canvas\({float}, {int})', function (float, int) {
//         // Given('c ← canvas\({float}, {float})', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
let c3
//   - And c1 ← color(1.5, 0, 0) # ../features/step_definitions/tuples_steps.js:611
//   - And c2 ← color(0, 0.5, 0) # ../features/step_definitions/tuples_steps.js:619
//   ? And c3 ← color(-0.5, 0, 1)
//       Undefined. Implement with the following snippet:
//
//         Given('c3 ← color\({float}, {int}, {int})', function (float, int, int2) {
//         // Given('c3 ← color\({float}, {int}, {float})', function (float, int, float2) {
//         // Given('c3 ← color\({float}, {float}, {int})', function (float, float2, int) {
        Given('c3 ← color\\({float}, {float}, {float})', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          c3 = color(float, float2, float3)
        });
//
//   ? When write_pixel(c, 0, 0, c1)
//       Undefined. Implement with the following snippet:
//
        When('write_pixel\\(c, {int}, {int}, c1)', function (int, int2) {
        // When('write_pixel\(c, {int}, {float}, c1)', function (int, float) {
        // When('write_pixel\(c, {float}, {int}, c1)', function (float, int) {
        // When('write_pixel\(c, {float}, {float}, c1)', function (float, float2) {
          // Write code here that turns the phrase above into concrete actions
          c.write_pixel(int, int2, c1)
        });
//
//   ? And write_pixel(c, 2, 1, c2)
//       Undefined. Implement with the following snippet:
//
        When('write_pixel\\(c, {int}, {int}, c2)', function (int, int2) {
        // When('write_pixel\(c, {int}, {float}, c2)', function (int, float) {
        // When('write_pixel\(c, {float}, {int}, c2)', function (float, int) {
        // When('write_pixel\(c, {float}, {float}, c2)', function (float, float2) {
          // Write code here that turns the phrase above into concrete actions
          c.write_pixel(int, int2, c2)
        });
//
//   ? And write_pixel(c, 4, 2, c3)
//       Undefined. Implement with the following snippet:
//
        When('write_pixel\\(c, {int}, {int}, c3)', function (int, int2) {
        // When('write_pixel\(c, {int}, {float}, c3)', function (int, float) {
        // When('write_pixel\(c, {float}, {int}, c3)', function (float, int) {
        // When('write_pixel\(c, {float}, {float}, c3)', function (float, float2) {
          // Write code here that turns the phrase above into concrete actions
          c.write_pixel(int, int2, c3)
        });
//
//   ? And ppm ← canvas_to_ppm(c)
//       Undefined. Implement with the following snippet:
//
//         When('ppm ← canvas_to_ppm\(c)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then lines 4-6 of ppm are
//       """
//       255 0 0 0 0 0 0 0 0 0 0 0 0 0 0
//       0 0 0 0 0 0 0 128 0 0 0 0 0 0 0
//       0 0 0 0 0 0 0 0 0 0 0 0 0 0 255
//       """
//       Undefined. Implement with the following snippet:
//
//         Then('lines {int}-{int} of ppm are', function (int, int2, docString) {
//         // Then('lines {int}-{float} of ppm are', function (int, float, docString) {
//         // Then('lines {float}-{int} of ppm are', function (float, int, docString) {
//         // Then('lines {float}-{float} of ppm are', function (float, float2, docString) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//5) Scenario: Splitting long lines in PPM files # ../features/canvas.feature:41
//   ? Given c ← canvas(10, 2)
//       Undefined. Implement with the following snippet:
//
//         Given('c ← canvas\({int}, {int})', function (int, int2) {
//         // Given('c ← canvas\({int}, {float})', function (int, float) {
//         // Given('c ← canvas\({float}, {int})', function (float, int) {
//         // Given('c ← canvas\({float}, {float})', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When every pixel of c is set to color(1, 0.8, 0.6)
//       Undefined. Implement with the following snippet:
//
//         When('every pixel of c is set to color\({int}, {float}, {float})', function (int, float, float2) {
        When('every pixel of c is set to color\\({float}, {float}, {float})', function (float, float2, float3) {
          // Write code here that turns the phrase above into concrete actions
          // c.arr.forEach(row => row.fill(color(float, float2, float3)))
          _.range(c.height).forEach(i =>
              _.range(c.width).forEach(j =>
                  c.write_pixel(j, i, color(float, float2, float3))))
        });
//
//   ? And ppm ← canvas_to_ppm(c)
//       Undefined. Implement with the following snippet:
//
//         When('ppm ← canvas_to_ppm\(c)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then lines 4-7 of ppm are
//       """
//       255 204 153 255 204 153 255 204 153 255 204 153 255 204 153 255 204
//       153 255 204 153 255 204 153 255 204 153 255 204 153
//       255 204 153 255 204 153 255 204 153 255 204 153 255 204 153 255 204
//       153 255 204 153 255 204 153 255 204 153 255 204 153
//       """
//       Undefined. Implement with the following snippet:
//
//         Then('lines {int}-{int} of ppm are', function (int, int2, docString) {
//         // Then('lines {int}-{float} of ppm are', function (int, float, docString) {
//         // Then('lines {float}-{int} of ppm are', function (float, int, docString) {
//         // Then('lines {float}-{float} of ppm are', function (float, float2, docString) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//
//6) Scenario: PPM files are terminated by a newline character # ../features/canvas.feature:53
//   ? Given c ← canvas(5, 3)
//       Undefined. Implement with the following snippet:
//
//         Given('c ← canvas\({int}, {int})', function (int, int2) {
//         // Given('c ← canvas\({int}, {float})', function (int, float) {
//         // Given('c ← canvas\({float}, {int})', function (float, int) {
//         // Given('c ← canvas\({float}, {float})', function (float, float2) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When ppm ← canvas_to_ppm(c)
//       Undefined. Implement with the following snippet:
//
//         When('ppm ← canvas_to_ppm\(c)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? Then ppm ends with a newline character
//       Undefined. Implement with the following snippet:
//
        Then('ppm ends with a newline character', function () {
          // Write code here that turns the phrase above into concrete actions
          assert(ppm.endsWith('\n'))
        });
