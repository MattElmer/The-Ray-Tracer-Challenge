const { Before, Given, When, Then } = require('@cucumber/cucumber')
const { equal, tuple, POINT_W, point, VECTOR_W, vector, add, sub, neg, mul, div, dot, magnitude, normalize, cross, color, reflect } = require('../../tuple')
const assert = require('assert')

//let a
// Scenario: A tuple with w=1.0 is a point # features/tuples.feature:3
   // Given a ← tuple(4.3, -4.2, 3.1, 1.0)
       // Implement with the following snippet:

         Given('a ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           // Write code here that turns the phrase above into concrete actions
           a = new tuple(x, y, z, w)
         });

   // Then a.x = 4.3
       // Implement with the following snippet:

         Then('a.x = {float}', function (x) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(a.x, x))
         });

   // And a.y = -4.2
       // Implement with the following snippet:

         Then('a.y = {float}', function (y) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(a.y, y))
         });

   // And a.z = 3.1k
       // Implement with the following snippet:

         Then('a.z = {float}', function (z) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(a.z, z))
         });

   // And a.w = 1.0
       // Implement with the following snippet:

         Then('a.w = {float}', function (w) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(a.w, w))
         });

   // And a is a point
       // Implement with the following snippet:

         Then('a is a point', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(a.w, POINT_W))
         });

   // And a is not a vector
       // Implement with the following snippet:

         Then('a is not a vector', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(!equal(a.w, VECTOR_W))
         });


// Scenario: A tuple with w=0 is a vector # features/tuples.feature:12
   // Given a ← tuple(4.3, -4.2, 3.1, 0.0)
       // Implement with the following snippet:

        //  Given('a ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
        //    // Write code here that turns the phrase above into concrete actions
        //    a = new tuple(x, y, z, w)
        //  });

   // Then a.x = 4.3
       // Implement with the following snippet:

        //  Then('a.x = {float}', function (x) {
        //    // Write code here that turns the phrase above into concrete actions
        //    assert(equal(a.x , x))
        //  });

   // And a.y = -4.2
       // Implement with the following snippet:

        //  Then('a.y = {float}', function (y) {
        //    // Write code here that turns the phrase above into concrete actions
        //    assert(equal(a.y, y))
        //  });

   // And a.z = 3.1
       // Implement with the following snippet:

        //  Then('a.z = {float}', function (z) {
        //    // Write code here that turns the phrase above into concrete actions
        //    assert(equal(a.z, z))
        //  });

   // And a.w = 0.0
       // Implement with the following snippet:

        //  Then('a.w = {float}', function (w) {
        //    // Write code here that turns the phrase above into concrete actions
        //    assert(equal(a.w, w))
        //  });

   // And a is not a point
       // Implement with the following snippet:

         Then('a is not a point', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(!equal(a.w, POINT_W))
         });

   // And a is a vector
       // Implement with the following snippet:

         Then('a is a vector', function () {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(a.w, VECTOR_W))
         });

let p
// Scenario: point() creates tuples with w=1 # features/tuples.feature:21
   // Given p ← point(4, -4, 3)
       // Implement with the following snippet:

         Given('p ← point\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           p = point(x, y, z)
         });

   // Then p = tuple(4, -4, 3, 1)
       // Implement with the following snippet:

         Then('p = tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(p, new tuple(x, y, z, w)))
         });

let v
// Scenario: vector() creates tuples with w=0 # features/tuples.feature:25
   // Given v ← vector(4, -4, 3)
       // Implement with the following snippet:

         Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           v = vector(x, y, z)
         });

   // Then v = tuple(4, -4, 3, 0)
       // Implement with the following snippet:

         Then('v = tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(v, new tuple(x, y, z, w)))
         });

let a1, a2
// Scenario: Adding two tuples # features/tuples.feature:29
   // Given a1 ← tuple(3, -2, 5, 1)
       // Implement with the following snippet:

         Given('a1 ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           // Write code here that turns the phrase above into concrete actions
           a1 = new tuple(x, y, z, w)
         });

   // And a2 ← tuple(-2, 3, 1, 0)
       // Implement with the following snippet:

         Given('a2 ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           // Write code here that turns the phrase above into concrete actions
           a2 = new tuple(x, y, z, w)
         });

   // Then a1 + a2 = tuple(1, 1, 6, 1)
       // Implement with the following snippet:

         Then('a1 + a2 = tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(add(a1, a2), new tuple(x, y, z, w)))
         });

let p1, p2
// Scenario: Subtracting two points # features/tuples.feature:34
   // Given p1 ← point(3, 2, 1)
       // Implement with the following snippet:

         Given('p1 ← point\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           p1 = point(x, y, z)
         });

   // And p2 ← point(5, 6, 7)
       // Implement with the following snippet:

         Given('p2 ← point\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           p2 = point(x, y, z)
         });

   // Then p1 - p2 = vector(-2, -4, -6)
       // Implement with the following snippet:

         Then('p1 - p2 = vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(sub(p1, p2), vector(x, y, z)))
         });


// Scenario: Subtracting a vector from a point # features/tuples.feature:39
   // Given p ← point(3, 2, 1)
       // Implement with the following snippet:

        //  Given('p ← point\\({float}, {float}, {float})', function (x, y, z) {
        //    // Write code here that turns the phrase above into concrete actions
        //    p = point(x, y, z)
        //  });

   // And v ← vector(5, 6, 7)
       // Implement with the following snippet:

        //  Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //    // Write code here that turns the phrase above into concrete actions
        //    v = vector(x, y, z)
        //  });

   // Then p - v = point(-2, -4, -6)
       // Implement with the following snippet:

         Then('p - v = point\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(sub(p, v), point(x, y, z)))
         });

let v1, v2
// Scenario: Subtracting two vectors # features/tuples.feature:44
   // Given v1 ← vector(3, 2, 1)
       // Implement with the following snippet:

         Given('v1 ← vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           v1 = vector(x, y, z)
         });

   // And v2 ← vector(5, 6, 7)
       // Implement with the following snippet:

         Given('v2 ← vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           v2 = vector(x, y, z)
         });

   // Then v1 - v2 = vector(-2, -4, -6)
       // Implement with the following snippet:

         Then('v1 - v2 = vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(sub(v1, v2), vector(x, y, z)))
         });

let zero
// Scenario: Subtracting a vector from the zero vector # features/tuples.feature:49
   // Given zero ← vector(0, 0, 0)
       // Implement with the following snippet:

         Given('zero ← vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           zero = vector(x, y, z)
         });

   // And v ← vector(1, -2, 3)
       // Implement with the following snippet:

        //  Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //    // Write code here that turns the phrase above into concrete actions
        //    v = vector(x, y, z)
        //  });

   // Then zero - v = vector(-1, 2, -3)
       // Implement with the following snippet:

         Then('zero - v = vector\\({float}, {float}, {float})', function (x, y, z) {
           // Write code here that turns the phrase above into concrete actions
           assert(equal(sub(zero, v), vector(x, y, z)))
         });


// Scenario: Negating a tuple # features/tuples.feature:54
    // Given a ← tuple(1, -2, 3, -4)
        // Implement with the following snippet:

        //   Given('a ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
        //     // Write code here that turns the phrase above into concrete actions
        //     a = new tuple(x, y, z, w)
        //   });

    // Then -a = tuple(-1, 2, -3, 4)
        // Implement with the following snippet:

          Then('-a = tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(neg(a), new tuple(x, y, z, w)))
          });


// Scenario: Multiplying a tuple by a scalar # features/tuples.feature:58
    // Given a ← tuple(1, -2, 3, -4)
        // Implement with the following snippet:

        //   Given('a ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
        //     // Write code here that turns the phrase above into concrete actions
        //     a = new tuple(x, y, z, w)
        //   });

    // Then a * 3.5 = tuple(3.5, -7, 10.5, -14)
        // Implement with the following snippet:

          Then('a * {float} = tuple\\({float}, {float}, {float}, {float})', function (s, x, y, z, w) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(mul(a, s), new tuple(x, y, z, w)))
          });


// Scenario: Multiplying a tuple by a fraction # features/tuples.feature:62
    // Given a ← tuple(1, -2, 3, -4)
        // Implement with the following snippet:

        //   Given('a ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
        //     // Write code here that turns the phrase above into concrete actions
        //     a = new tuple(x, y, z, w)
        //   });

    // Then a * 0.5 = tuple(0.5, -1, 1.5, -2)
        // Implement with the following snippet:

        //   Then('a * {float} = tuple\\({float}, {float}, {float}, {float})', function (s, x, y, z, w) {
        //     // Write code here that turns the phrase above into concrete actions
        //     assert(equal(mul(a, s), new tuple(x, y, z, w)))
        //   });


// Scenario: Dividing a tuple by a scalar # features/tuples.feature:66
    // Given a ← tuple(1, -2, 3, -4)
        // Implement with the following snippet:

        //   Given('a ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
        //     // Write code here that turns the phrase above into concrete actions
        //     a = new tuple(x, y, z, w)
        //   });

    // Then a / 2 = tuple(0.5, -1, 1.5, -2)
        // Implement with the following snippet:

          Then('a \/ {float} = tuple\\({float}, {float}, {float}, {float})', function (d, x, y, z, w) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(div(a, d), new tuple(x, y, z, w)))
          });


// Scenario: Computing the magnitude of vector(1, 0, 0) # features/tuples.feature:70
    // Given v ← vector(1, 0, 0)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // Then magnitude(v) = 1
        // Implement with the following snippet:

          Then('magnitude\\(v) = {float}', function (m) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(magnitude(v), m))
          });


// Scenario: Computing the magnitude of vector(0, 1, 0) # features/tuples.feature:74
    // Given v ← vector(0, 1, 0)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // Then magnitude(v) = 1
        // Implement with the following snippet:

        //   Then('magnitude\\(v) = {float}', function (m) {
        //     // Write code here that turns the phrase above into concrete actions
        //     assert(equal(magnitude(v), m))
        //   });


// Scenario: Computing the magnitude of vector(0, 0, 1) # features/tuples.feature:78
    // Given v ← vector(0, 0, 1)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // Then magnitude(v) = 1
        // Implement with the following snippet:

        //   Then('magnitude\\(v) = {float}', function (m) {
        //     // Write code here that turns the phrase above into concrete actions
        //     assert(equal(magnitude(v), m))
        //   });


// Scenario: Computing the magnitude of vector(1, 2, 3) # features/tuples.feature:82
    // Given v ← vector(1, 2, 3)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //      v = vector(x, y, z)
        //   });

    // Then magnitude(v) = √14
        // Implement with the following snippet:

          Then('magnitude\\(v) = √{float}', function (mxm) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(magnitude(v), Math.sqrt(mxm)))
          });


// Scenario: Computing the magnitude of vector(-1, -2, -3) # features/tuples.feature:86
    // Given v ← vector(-1, -2, -3)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // Then magnitude(v) = √14
        // Implement with the following snippet:

        //   Then('magnitude\\(v) = √{float}', function (mxm) {
        //     // Write code here that turns the phrase above into concrete actions
        //     assert(equal(magnitude(v), Math.sqrt(mxm)))
        //   });


// Scenario: Normalizing vector(4, 0, 0) gives (1, 0, 0) # features/tuples.feature:90
    // Given v ← vector(4, 0, 0)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // Then normalize(v) = vector(1, 0, 0)
        // Implement with the following snippet:

          Then('normalize\\(v) = vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(normalize(v), vector(x, y, z)))
          });


// Scenario: Normalizing vector(1, 2, 3) # features/tuples.feature:94
    // Given v ← vector(1, 2, 3)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // Then normalize(v) = approximately vector(0.26726, 0.53452, 0.80178)
        // Implement with the following snippet:

          Then('normalize\\(v) = approximately vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(normalize(v), vector(x, y, z)))
          });

let norm
// Scenario: The magnitude of a normalized vector # features/tuples.feature:99
    // Given v ← vector(1, 2, 3)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     v = vector(x, y, z)
        //   });

    // When norm ← normalize(v)
        // Implement with the following snippet:

          When('norm ← normalize\\(v)', function () {
            // Write code here that turns the phrase above into concrete actions
            norm = normalize(v)
          });

    // Then magnitude(norm) = 1
        // Implement with the following snippet:

          Then('magnitude\\(norm) = {float}', function (n) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(magnitude(norm), n))
          });

let b
// Scenario: The dot product of two tuples # features/tuples.feature:104
    // Given a ← vector(1, 2, 3)
        // Implement with the following snippet:

          Given('a ← vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            a = vector(x, y, z)
          });

    // And b ← vector(2, 3, 4)
        // Implement with the following snippet:

          Given('b ← vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            b = vector(x, y, z)
          });

    // Then dot(a, b) = 20
        // Implement with the following snippet:

          Then('dot\\(a, b) = {float}', function (d) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(dot(a, b), d))
          });


// Scenario: The cross product of two vectors # features/tuples.feature:109
    // Given a ← vector(1, 2, 3)
        // Implement with the following snippet:

        //   Given('a ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     a = vector(x, y, z)
        //   });

    // And b ← vector(2, 3, 4)
        // Implement with the following snippet:

        //   Given('b ← vector\\({float}, {float}, {float})', function (x, y, z) {
        //     // Write code here that turns the phrase above into concrete actions
        //     b = vector(x, y, z)
        //   });

    // Then cross(a, b) = vector(-1, 2, -1)
        // Implement with the following snippet:

          Then('cross\\(a, b) = vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(cross(a, b), vector(x, y, z)))
          });

    // And cross(b, a) = vector(1, -2, 1)
        // Implement with the following snippet:

          Then('cross\\(b, a) = vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(cross(b, a), vector(x, y, z)))
          });

let c
// Scenario: Colors are (red, green, blue) tuples # features/tuples.feature:115
    // Given c ← color(-0.5, 0.4, 1.7)
        // Implement with the following snippet:

          Given('c ← color\\({float}, {float}, {float})', function (r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            c = color(r, g, b)
          });

    // Then c.red = -0.5
        // Implement with the following snippet:

          Then('c.red = {float}', function (r) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(c.red, r))
          });

    // And c.green = 0.4
        // Implement with the following snippet:

          Then('c.green = {float}', function (g) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(c.green, g))
          });

    // And c.blue = 1.7
        // Implement with the following snippet:

          Then('c.blue = {float}', function (b) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(c.blue, b))
          });

let c1, c2
// Scenario: Adding colors # features/tuples.feature:121
    // Given c1 ← color(0.9, 0.6, 0.75)
        // Implement with the following snippet:

          Given('c1 ← color\\({float}, {float}, {float})', function (r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            c1 = color(r, g, b)
          });

    // And c2 ← color(0.7, 0.1, 0.25)
        // Implement with the following snippet:

          Given('c2 ← color\\({float}, {float}, {float})', function (r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            c2 = color(r, g, b)
          });

    // Then c1 + c2 = color(1.6, 0.7, 1.0)
        // Implement with the following snippet:

          Then('c1 + c2 = color\\({float}, {float}, {float})', function (r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(add(c1, c2), color(r, g, b)))
          });


// Scenario: Subtracting colors # features/tuples.feature:126
    // Given c1 ← color(0.9, 0.6, 0.75)
        // Implement with the following snippet:

        //   Given('c1 ← color\\({float}, {float}, {float})', function (r, g, b) {
        //     // Write code here that turns the phrase above into concrete actions
        //     c1 = color(r, g, b)
        //   });
  

    // And c2 ← color(0.7, 0.1, 0.25)
        // Implement with the following snippet:

        //   Given('c2 ← color\\({float}, {float}, {float})', function (r, g, b) {
        //     // Write code here that turns the phrase above into concrete actions
        //     c2 = color(r, g, b)
        //   });

    // Then c1 - c2 = color(0.2, 0.5, 0.5)
        // Implement with the following snippet:

          Then('c1 - c2 = color\\({float}, {float}, {float})', function (r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(sub(c1, c2), color(r, g, b)))
          });


// Scenario: Multiplying a color by a scalar # features/tuples.feature:131
    // Given c ← color(0.2, 0.3, 0.4)
        // Implement with the following snippet:

        //   Given('c ← color\\({float}, {float}, {float})', function (r, g, b) {
        //     // Write code here that turns the phrase above into concrete actions
        //     c = color(r, g, b)
        //   });

    // Then c * 2 = color(0.4, 0.6, 0.8)
        // Implement with the following snippet:

          Then('c * {float} = color\\({float}, {float}, {float})', function (s, r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(mul(c, s), color(r, g, b)))
          });


// Scenario: Multiplying colors # features/tuples.feature:135
    // Given c1 ← color(1, 0.2, 0.4)
        // Implement with the following snippet:

        //   Given('c1 ← color\\({float}, {float}, {float})', function (r, g, b) {
        //     // Write code here that turns the phrase above into concrete actions
        //     c1 = color(r, g, b)
        //   });

    // And c2 ← color(0.9, 1, 0.1)
        // Implement with the following snippet:

        //   Given('c2 ← color\\({float}, {float}, {float})', function (r, g, b) {
        //     // Write code here that turns the phrase above into concrete actions
        //     c2 = color(r, g, b)
        //   });

    // Then c1 * c2 = color(0.9, 0.2, 0.04)
        // Implement with the following snippet:

          Then('c1 * c2 = color\\({float}, {float}, {float})', function (r, g, b) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(mul(c1, c2), color(r, g, b)))
          });

let n, r
// Scenario: Reflecting a vector approaching at 45° # features/tuples.feature:140
    // Given v ← vector(1, -1, 0)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
        //     // Write code here that turns the phrase above into concrete actions
        //     return 'pending';
        //   });

    // And n ← vector(0, 1, 0)
        // Implement with the following snippet:

          Given('n ← vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            n = vector(x, y, z)
          });

    // When r ← reflect(v, n)
        // Implement with the following snippet:

          When('r ← reflect\\(v, n)', function () {
            // Write code here that turns the phrase above into concrete actions
            r = reflect(v, n)
          });

    // Then r = vector(1, 1, 0)
        // Implement with the following snippet:

          Then('r = vector\\({float}, {float}, {float})', function (x, y, z) {
            // Write code here that turns the phrase above into concrete actions
            assert(equal(r, vector(x, y, z)))
          });


// Scenario: Reflecting a vector off a slanted surface # features/tuples.feature:146
    // Given v ← vector(0, -1, 0)
        // Implement with the following snippet:

        //   Given('v ← vector\\({float}, {float}, {float})', function (float, float2, float3) {
        //     // Write code here that turns the phrase above into concrete actions
        //     return 'pending';
        //   });

    // And n ← vector(√2/2, √2/2, 0)
        // Implement with the following snippet:

          Given('n ← vector\\(√{float}\\/{float}, √{float}\\/{float}, {float})', function (nxs, dx, nys, dy, z) {
            // Write code here that turns the phrase above into concrete actions
            n = vector(Math.sqrt(nxs) / dx, Math.sqrt(nys) / dy, z)
          });

    // When r ← reflect(v, n)
        // Implement with the following snippet:

        //   When('r ← reflect\\(v, n)', function () {
        //     // Write code here that turns the phrase above into concrete actions
        //     return 'pending';
        //   });

    // Then r = vector(1, 0, 0)
        // Implement with the following snippet:

        //   Then('r = vector\\({float}, {float}, {float})', function (float, float2, float3) {
        //     // Write code here that turns the phrase above into concrete actions
        //     return 'pending';
        //   });
