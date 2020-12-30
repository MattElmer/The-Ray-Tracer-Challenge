const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const { color, point } = require('../../tuple')
const { point_light } = require('../../lighting')
const { equal } = require('../../utility')
let intensity
Given('intensity ← color\\({float}, {float}, {float})', function(float, float2, float3) {
    intensity = color(float, float2, float3)
})
Given('position ← point\\({float}, {float}, {float})', function(float, float2, float3) {
    position = point(float, float2, float3)
})
When('light ← point_light\\(position, intensity)', function() {
    light = new point_light(position, intensity)
})
Then('light.position = position', function() {
     assert(equal(light.position, position))
})
Then('light.intensity = intensity', function() {
     assert(equal(light.intensity, intensity))
})
