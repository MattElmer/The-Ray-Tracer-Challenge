const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { equal } = require('../../utility')
const { ray } = require('../../ray')
const { point, vector } = require('../../tuple')
const _ = require('lodash')
//
//Failures:
//
//1) Scenario: A ray intersects a cube # ../features/cubes.feature:13
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
        Given(/^(\w+) ← (\w+)\(\)$/, function (name, func) {
              global[name] = new (require(`../../${func}`).default)
        });
        Given(/^(\w+) ← (\w+)\((.+)\)$/, function (name, func, args) {
          if (eval(`typeof ${func}`) != 'undefined') {
              global[name] = eval(`${func}(${args})`)
          } else {
              global[name] = eval(`${args.replace(/,|$/, `.${func}( `)})`)
          }
        });
//
//   ? And r ← ray(point(5, 0.5, 0), vector(-1, 0, 0))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 6 # ../features/step_definitions/intersections_steps.js:1074
//
//2) Scenario: A ray intersects a cube # ../features/cubes.feature:14
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(-5, 0.5, 0), vector(1, 0, 0))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 6 # ../features/step_definitions/intersections_steps.js:1074
//
//3) Scenario: A ray intersects a cube # ../features/cubes.feature:15
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0.5, 5, 0), vector(0, -1, 0))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 6 # ../features/step_definitions/intersections_steps.js:1074
//
//4) Scenario: A ray intersects a cube # ../features/cubes.feature:16
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0.5, -5, 0), vector(0, 1, 0))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 6 # ../features/step_definitions/intersections_steps.js:1074
//
//5) Scenario: A ray intersects a cube # ../features/cubes.feature:17
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0.5, 0, 5), vector(0, 0, -1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 6 # ../features/step_definitions/intersections_steps.js:1074
//
//6) Scenario: A ray intersects a cube # ../features/cubes.feature:18
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0.5, 0, -5), vector(0, 0, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({float}, {int}, {int}), vector\({int}, {int}, {int}))', function (float, int, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = 4 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 6 # ../features/step_definitions/intersections_steps.js:1074
//
//7) Scenario: A ray intersects a cube # ../features/cubes.feature:19
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, 0.5, 0), vector(0, 0, 1))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {float}, {int}), vector\({int}, {int}, {int}))', function (int, float, int2, int3, int4, int5) {
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
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 2 # ../features/step_definitions/spheres_steps.js:32
//   - And xs[0].t = -1 # ../features/step_definitions/intersections_steps.js:1074
//   - And xs[1].t = 1 # ../features/step_definitions/intersections_steps.js:1074
//
//8) Scenario: A ray misses a cube # ../features/cubes.feature:29
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(-2, 0, 0), vector(0.2673, 0.5345, 0.8018))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 0 # ../features/step_definitions/spheres_steps.js:32
//
//9) Scenario: A ray misses a cube # ../features/cubes.feature:30
//   ? Given c ← cube()
//       Undefined. Implement with the following snippet:
//
//         Given('c ← cube\()', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? And r ← ray(point(0, -2, 0), vector(0.8018, 0.2673, 0.5345))
//       Undefined. Implement with the following snippet:
//
//         Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//         // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//         // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//         // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   ? When xs ← local_intersect(c, r)
//       Undefined. Implement with the following snippet:
//
//         When('xs ← local_intersect\(c, r)', function () {
//           // Write code here that turns the phrase above into concrete actions
//           return 'pending';
//         });
//
//   - Then xs.count = 0 # ../features/step_definitions/spheres_steps.js:32
//
//10) Scenario: A ray misses a cube # ../features/cubes.feature:31
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 0, -2), vector(0.5345, 0.8018, 0.2673))
//        Undefined. Implement with the following snippet:
//
//          Given('r ← ray\(point\({int}, {int}, {int}), vector\({float}, {float}, {float}))', function (int, int2, int3, float, float2, float3) {
//          // Given('r ← ray\(point\({int}, {int}, {float}), vector\({float}, {float}, {float}))', function (int, int2, float, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {int}), vector\({float}, {float}, {float}))', function (int, float, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({int}, {float}, {float}), vector\({float}, {float}, {float}))', function (int, float, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {int}, {int}), vector\({float}, {float}, {float}))', function (float, int, int2, float2, float3, float4) {
//          // Given('r ← ray\(point\({float}, {int}, {float}), vector\({float}, {float}, {float}))', function (float, int, float2, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {int}), vector\({float}, {float}, {float}))', function (float, float2, int, float3, float4, float5) {
//          // Given('r ← ray\(point\({float}, {float}, {float}), vector\({float}, {float}, {float}))', function (float, float2, float3, float4, float5, float6) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? When xs ← local_intersect(c, r)
//        Undefined. Implement with the following snippet:
//
//          When('xs ← local_intersect\(c, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then xs.count = 0 # ../features/step_definitions/spheres_steps.js:32
//
//11) Scenario: A ray misses a cube # ../features/cubes.feature:32
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(2, 0, 2), vector(0, 0, -1))
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
//    ? When xs ← local_intersect(c, r)
//        Undefined. Implement with the following snippet:
//
//          When('xs ← local_intersect\(c, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then xs.count = 0 # ../features/step_definitions/spheres_steps.js:32
//
//12) Scenario: A ray misses a cube # ../features/cubes.feature:33
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(0, 2, 2), vector(0, -1, 0))
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
//    ? When xs ← local_intersect(c, r)
//        Undefined. Implement with the following snippet:
//
//          When('xs ← local_intersect\(c, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then xs.count = 0 # ../features/step_definitions/spheres_steps.js:32
//
//13) Scenario: A ray misses a cube # ../features/cubes.feature:34
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? And r ← ray(point(2, 2, 0), vector(-1, 0, 0))
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
//    ? When xs ← local_intersect(c, r)
//        Undefined. Implement with the following snippet:
//
//          When('xs ← local_intersect\(c, r)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - Then xs.count = 0 # ../features/step_definitions/spheres_steps.js:32
//
//14) Scenario: The normal on the surface of a cube # ../features/cubes.feature:45
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(1, 0.5, -0.8) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
          Then('{word} = vector\\({float}, {float}, {float})', function (word, float, float2, float3) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(global[word], vector(float, float2, float3)))
          });
//
//
//15) Scenario: The normal on the surface of a cube # ../features/cubes.feature:46
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(-1, -0.2, 0.9) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(-1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//16) Scenario: The normal on the surface of a cube # ../features/cubes.feature:47
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(-0.4, 1, -0.1) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(0, 1, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//17) Scenario: The normal on the surface of a cube # ../features/cubes.feature:48
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(0.3, -1, -0.7) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(0, -1, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//18) Scenario: The normal on the surface of a cube # ../features/cubes.feature:49
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(-0.6, 0.3, 1) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(0, 0, 1)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//19) Scenario: The normal on the surface of a cube # ../features/cubes.feature:50
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(0.4, 0.4, -1) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(0, 0, -1)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//20) Scenario: The normal on the surface of a cube # ../features/cubes.feature:51
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(1, 1, 1) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//
//21) Scenario: The normal on the surface of a cube # ../features/cubes.feature:52
//    ? Given c ← cube()
//        Undefined. Implement with the following snippet:
//
//          Given('c ← cube\()', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    - And p ← point(-1, -1, -1) # ../features/step_definitions/tuples_steps.js:127
//    ? When normal ← local_normal_at(c, p)
//        Undefined. Implement with the following snippet:
//
//          When('normal ← local_normal_at\(c, p)', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//
//    ? Then normal = vector(-1, 0, 0)
//        Undefined. Implement with the following snippet:
//
//          Then('normal = vector\({int}, {int}, {int})', function (int, int2, int3) {
//          // Then('normal = vector\({int}, {int}, {float})', function (int, int2, float) {
//          // Then('normal = vector\({int}, {float}, {int})', function (int, float, int2) {
//          // Then('normal = vector\({int}, {float}, {float})', function (int, float, float2) {
//          // Then('normal = vector\({float}, {int}, {int})', function (float, int, int2) {
//          // Then('normal = vector\({float}, {int}, {float})', function (float, int, float2) {
//          // Then('normal = vector\({float}, {float}, {int})', function (float, float2, int) {
//          // Then('normal = vector\({float}, {float}, {float})', function (float, float2, float3) {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });
//