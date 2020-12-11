const { Before, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const tup = require('../../tuple')
const tuple = tup.tuple
const mat = require('../../matrix')
/*
Scenario: Constructing and inspecting a 4x4 matrix # ../features/matrices.feature:3
   ? Given the following 4x4 matrix M:
       | 1    | 2    | 3    | 4    |
       | 5.5  | 6.5  | 7.5  | 8.5  |
       | 9    | 10   | 11   | 12   |
       | 13.5 | 14.5 | 15.5 | 16.5 |
*/
let M
         Given('the following 4x4 matrix M:', function (table) {
           M = mat.matrix(table.raw())
         });
/*
   ? Then M[0,0] = 1
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         Then('M[{int},{int}] = {float}', function (i, j, m) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
           assert(tup.equal(M[i][j], m))
         });
/*
   ? And M[0,3] = 4
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[1,0] = 5.5
*/

         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[1,2] = 7.5
*/

         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[2,2] = 11
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[3,0] = 13.5
*/

         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[3,2] = 15.5
*/

         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });

/*
Scenario: A 2x2 matrix ought to be representable # ../features/matrices.feature:17
   ? Given the following 2x2 matrix M:
       | -3 | 5  |
       | 1  | -2 |
*/

         Given('the following 2x2 matrix M:', function (table) {
           M = mat.matrix(table.raw())
         });
/*
   ? Then M[0,0] = -3
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[0,1] = 5
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[1,0] = 1
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[1,1] = -2
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });

/*
Scenario: A 3x3 matrix ought to be representable # ../features/matrices.feature:26
   ? Given the following 3x3 matrix M:
       | -3 | 5  | 0  |
       | 1  | -2 | -7 |
       | 0  | 1  | 1  |
*/

         Given('the following 3x3 matrix M:', function (table) {
           M = mat.matrix(table.raw())
         });
/*
   ? Then M[0,0] = -3
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[1,1] = -2
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });
/*
   ? And M[2,2] = 1
*/

         // Then('M[{int},{int}] = {int}', function (int, int2, int3) {
         // Then('M[{int},{int}] = {float}', function (int, int2, float) {
         // Then('M[{int},{float}] = {int}', function (int, float, int2) {
         // Then('M[{int},{float}] = {float}', function (int, float, float2) {
         // Then('M[{float},{int}] = {int}', function (float, int, int2) {
         // Then('M[{float},{int}] = {float}', function (float, int, float2) {
         // Then('M[{float},{float}] = {int}', function (float, float2, int) {
         // Then('M[{float},{float}] = {float}', function (float, float2, float3) {
         //   return 'pending';
         // });

/*
Scenario: Matrix equality with identical matrices # ../features/matrices.feature:35
   ? Given the following matrix A:
       | 1 | 2 | 3 | 4 |
       | 5 | 6 | 7 | 8 |
       | 9 | 8 | 7 | 6 |
       | 5 | 4 | 3 | 2 |
*/
let A
         Given('the following matrix A:', function (table) {
           A = mat.matrix(table.raw())
         });
/*
   ? And the following matrix B:
       | 1 | 2 | 3 | 4 |
       | 5 | 6 | 7 | 8 |
       | 9 | 8 | 7 | 6 |
       | 5 | 4 | 3 | 2 |
*/
let B
         Given('the following matrix B:', function (table) {
           B = mat.matrix(table.raw())
         });
/*
   ? Then A = B
*/

         Then('A = B', function () {
           assert(tup.equal(A, B))
         });

/*
Scenario: Matrix equality with different matrices # ../features/matrices.feature:48
   ? Given the following matrix A:
       | 1 | 2 | 3 | 4 |
       | 5 | 6 | 7 | 8 |
       | 9 | 8 | 7 | 6 |
       | 5 | 4 | 3 | 2 |
*/

         // Given('the following matrix A:', function (dataTable) {
         //   return 'pending';
         // });
/*
   ? And the following matrix B:
       | 2 | 3 | 4 | 5 |
       | 6 | 7 | 8 | 9 |
       | 8 | 7 | 6 | 5 |
       | 4 | 3 | 2 | 1 |
*/

         // Given('the following matrix B:', function (dataTable) {
         //   return 'pending';
         // });
/*
   ? Then A != B
*/

         Then('A != B', function () {
           assert(!tup.equal(A, B))
         });

/*
Scenario: Multiplying two matrices # ../features/matrices.feature:61
   ? Given the following matrix A:
       | 1 | 2 | 3 | 4 |
       | 5 | 6 | 7 | 8 |
       | 9 | 8 | 7 | 6 |
       | 5 | 4 | 3 | 2 |
*/

         // Given('the following matrix A:', function (dataTable) {
         //   return 'pending';
         // });
/*
   ? And the following matrix B:
       | -2 | 1 | 2 | 3  |
       | 3  | 2 | 1 | -1 |
       | 4  | 3 | 6 | 5  |
       | 1  | 2 | 7 | 8  |
*/

         // Given('the following matrix B:', function (dataTable) {
         //   return 'pending';
         // });
/*
   ? Then A * B is the following 4x4 matrix:
       | 20 | 22 | 50  | 48  |
       | 44 | 54 | 114 | 108 |
       | 40 | 58 | 110 | 102 |
       | 16 | 26 | 46  | 42  |
*/

         Then('A * B is the following 4x4 matrix:', function (dataTable) {
           assert(tup.equal(mat.mul(A, B), mat.matrix(dataTable.raw())))
         });

/*
Scenario: A matrix multiplied by a tuple # ../features/matrices.feature:78
   ? Given the following matrix A:
       | 1 | 2 | 3 | 4 |
       | 2 | 4 | 4 | 2 |
       | 8 | 6 | 4 | 1 |
       | 0 | 0 | 0 | 1 |
*/

         // Given('the following matrix A:', function (dataTable) {
         //   return 'pending';
         // });
/*
   ? And b ← tuple(1, 2, 3, 1)
*/
let b
         // Given('b ← tuple\\({int}, {int}, {int}, {int})', function (int, int2, int3, int4) {
         // Given('b ← tuple\\({int}, {int}, {int}, {float})', function (int, int2, int3, float) {
         // Given('b ← tuple\\({int}, {int}, {float}, {int})', function (int, int2, float, int3) {
         // Given('b ← tuple\\({int}, {int}, {float}, {float})', function (int, int2, float, float2) {
         // Given('b ← tuple\\({int}, {float}, {int}, {int})', function (int, float, int2, int3) {
         // Given('b ← tuple\\({int}, {float}, {int}, {float})', function (int, float, int2, float2) {
         // Given('b ← tuple\\({int}, {float}, {float}, {int})', function (int, float, float2, int2) {
         // Given('b ← tuple\\({int}, {float}, {float}, {float})', function (int, float, float2, float3) {
         // Given('b ← tuple\\({float}, {int}, {int}, {int})', function (float, int, int2, int3) {
         // Given('b ← tuple\\({float}, {int}, {int}, {float})', function (float, int, int2, float2) {
         // Given('b ← tuple\\({float}, {int}, {float}, {int})', function (float, int, float2, int2) {
         // Given('b ← tuple\\({float}, {int}, {float}, {float})', function (float, int, float2, float3) {
         // Given('b ← tuple\\({float}, {float}, {int}, {int})', function (float, float2, int, int2) {
         // Given('b ← tuple\\({float}, {float}, {int}, {float})', function (float, float2, int, float3) {
         // Given('b ← tuple\\({float}, {float}, {float}, {int})', function (float, float2, float3, int) {
         Given('b ← tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           b = new tup.tuple(x, y, z, w)
         });
/*
   ? Then A * b = tuple(18, 24, 33, 1)
*/

         // Then('A * b = tuple\\({int}, {int}, {int}, {int})', function (int, int2, int3, int4) {
         // Then('A * b = tuple\\({int}, {int}, {int}, {float})', function (int, int2, int3, float) {
         // Then('A * b = tuple\\({int}, {int}, {float}, {int})', function (int, int2, float, int3) {
         // Then('A * b = tuple\\({int}, {int}, {float}, {float})', function (int, int2, float, float2) {
         // Then('A * b = tuple\\({int}, {float}, {int}, {int})', function (int, float, int2, int3) {
         // Then('A * b = tuple\\({int}, {float}, {int}, {float})', function (int, float, int2, float2) {
         // Then('A * b = tuple\\({int}, {float}, {float}, {int})', function (int, float, float2, int2) {
         // Then('A * b = tuple\\({int}, {float}, {float}, {float})', function (int, float, float2, float3) {
         // Then('A * b = tuple\\({float}, {int}, {int}, {int})', function (float, int, int2, int3) {
         // Then('A * b = tuple\\({float}, {int}, {int}, {float})', function (float, int, int2, float2) {
         // Then('A * b = tuple\\({float}, {int}, {float}, {int})', function (float, int, float2, int2) {
         // Then('A * b = tuple\\({float}, {int}, {float}, {float})', function (float, int, float2, float3) {
         // Then('A * b = tuple\\({float}, {float}, {int}, {int})', function (float, float2, int, int2) {
         // Then('A * b = tuple\\({float}, {float}, {int}, {float})', function (float, float2, int, float3) {
         // Then('A * b = tuple\\({float}, {float}, {float}, {int})', function (float, float2, float3, int) {
         Then('A * b = tuple\\({float}, {float}, {float}, {float})', function (x, y, z, w) {
           assert(tup.equal(new tup.tuple(...mat.transpose(mat.mul(A, b))[0]), new tup.tuple(x, y, z, w)))
         });

/*
Scenario: Multiplying a matrix by the identity matrix # ../features/matrices.feature:87
   ? Given the following matrix A:
       | 0 | 1 | 2  | 4  |
       | 1 | 2 | 4  | 8  |
       | 2 | 4 | 8  | 16 |
       | 4 | 8 | 16 | 32 |
*/

         // Given('the following matrix A:', function (dataTable) {
         //   return 'pending';
         // });
/*
   ? Then A * identity_matrix = A
*/
let I = mat.matrix([ [ 1, 0, 0, 0], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0], [0, 0, 0, 1] ])
         Then('A * identity_matrix = A', function () {
           assert(tup.equal(mat.mul(A, I), A))
         });
/*
Scenario: Multiplying the identity matrix by a tuple # ../features/matrices.feature:95
   ✔ Given a ← tuple(1, 2, 3, 4) # ../features/step_definitions/tuples_steps.js:11
   ? Then identity_matrix * a = a
*/
         Then('identity_matrix * a = a', function () {
           assert(tup.equal(new tup.tuple(...mat.transpose(mat.mul(I, a))[0]), a))
         });

/*
Scenario: Transposing a matrix # ../features/matrices.feature:99
    ? Given the following matrix A:
        | 0 | 9 | 3 | 0 |
        | 9 | 8 | 0 | 8 |
        | 1 | 8 | 5 | 3 |
        | 0 | 0 | 5 | 8 |
*/

          // Given('the following matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then transpose(A) is the following matrix:
        | 0 | 9 | 1 | 0 |
        | 9 | 8 | 8 | 0 |
        | 3 | 0 | 5 | 5 |
        | 0 | 8 | 3 | 8 |
*/

         Then('transpose\\(A) is the following matrix:', function (dataTable) {
           assert(tup.equal(mat.transpose(A), mat.matrix(dataTable.raw())))
         });

/*
Scenario: Transposing the identity matrix # ../features/matrices.feature:111
    ? Given A ← transpose(identity_matrix)
*/

         Given('A ← transpose\\(identity_matrix)', function () {
           A = mat.transpose(I)
         });
/*
    ? Then A = identity_matrix
*/

         Then('A = identity_matrix', function () {
           assert(tup.equal(A, I))
         });

/*
Scenario: Calculating the determinant of a 2x2 matrix # ../features/matrices.feature:115
    ? Given the following 2x2 matrix A:
        | 1  | 5 |
        | -3 | 2 |
*/

         Given('the following 2x2 matrix A:', function (dataTable) {
           A = mat.matrix(dataTable.raw())
         });
/*
    ? Then determinant(A) = 17
*/

          // Then('determinant\\(A) = {int}', function (int) {
         Then('determinant\\(A) = {float}', function (det) {
           assert(tup.equal(mat.determinant(A), det))
         });

/*
Scenario: A submatrix of a 3x3 matrix is a 2x2 matrix # ../features/matrices.feature:121
    ? Given the following 3x3 matrix A:
        | 1  | 5 | 0  |
        | -3 | 2 | 7  |
        | 0  | 6 | -3 |
*/

         Given('the following 3x3 matrix A:', function (dataTable) {
           A = mat.matrix(dataTable.raw())
         });
/*
    ? Then submatrix(A, 0, 2) is the following 2x2 matrix:
        | -3 | 2 |
        | 0  | 6 |
*/

         Then('submatrix\\(A, {int}, {int}) is the following 2x2 matrix:', function (m, n, dataTable) {
          // Then('submatrix\\(A, {int}, {float}) is the following 2x2 matrix:', function (int, float, dataTable) {
          // Then('submatrix\\(A, {float}, {int}) is the following 2x2 matrix:', function (float, int, dataTable) {
          // Then('submatrix\\(A, {float}, {float}) is the following 2x2 matrix:', function (float, float2, dataTable) {
           assert(tup.equal(mat.submatrix(A, m, n), mat.matrix(dataTable.raw())))
         });

/*
Scenario: A submatrix of a 4x4 matrix is a 3x3 matrix # ../features/matrices.feature:130
    ? Given the following 4x4 matrix A:
        | -6 | 1 | 1  | 6 |
        | -8 | 5 | 8  | 6 |
        | -1 | 0 | 8  | 2 |
        | -7 | 1 | -1 | 1 |
*/

         Given('the following 4x4 matrix A:', function (dataTable) {
           A = mat.matrix(dataTable.raw())
         });
/*
    ? Then submatrix(A, 2, 1) is the following 3x3 matrix:
        | -6 | 1  | 6 |
        | -8 | 8  | 6 |
        | -7 | -1 | 1 |
*/

         Then('submatrix\\(A, {int}, {int}) is the following 3x3 matrix:', function (m, n, dataTable) {
          // Then('submatrix\\(A, {int}, {float}) is the following 3x3 matrix:', function (int, float, dataTable) {
          // Then('submatrix\\(A, {float}, {int}) is the following 3x3 matrix:', function (float, int, dataTable) {
          // Then('submatrix\\(A, {float}, {float}) is the following 3x3 matrix:', function (float, float2, dataTable) {
           assert(tup.equal(mat.submatrix(A, m, n), mat.matrix(dataTable.raw())))
         });

/*
Scenario: Calculating a minor of a 3x3 matrix # ../features/matrices.feature:141
    ? Given the following 3x3 matrix A:
        | 3 | 5  | 0  |
        | 2 | -1 | -7 |
        | 6 | -1 | 5  |
*/

          // Given('the following 3x3 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? And B ← submatrix(A, 1, 0)
*/

         Given('B ← submatrix\\(A, {int}, {int})', function (m, n) {
          // Given('B ← submatrix\\(A, {int}, {float})', function (int, float) {
          // Given('B ← submatrix\\(A, {float}, {int})', function (float, int) {
          // Given('B ← submatrix\\(A, {float}, {float})', function (float, float2) {
            B = mat.submatrix(A, m, n)
         });
/*
    ? Then determinant(B) = 25
*/

          // Then('determinant\\(B) = {int}', function (int) {
         Then('determinant\\(B) = {float}', function (det) {
           assert(tup.equal(mat.determinant(B), det))
         });
/*
    ? And minor(A, 1, 0) = 25
*/

          // Then('minor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
         Then('minor\\(A, {int}, {int}) = {float}', function (m, n, min) {
          // Then('minor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('minor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('minor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('minor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('minor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('minor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
            assert(tup.equal(mat.minor(A, m, n), min))
         });

/*
Scenario: Calculating a cofactor of a 3x3 matrix # ../features/matrices.feature:150
    ? Given the following 3x3 matrix A:
        | 3 | 5  | 0  |
        | 2 | -1 | -7 |
        | 6 | -1 | 5  |
*/

          // Given('the following 3x3 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then minor(A, 0, 0) = -12
*/

          // Then('minor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('minor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('minor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('minor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('minor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('minor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('minor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('minor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 0, 0) = -12
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
         Then('cofactor\\(A, {int}, {int}) = {float}', function (m, n, cof) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
           assert(tup.equal(mat.cofactor(A, m, n), cof))
         });
/*
    ? And minor(A, 1, 0) = 25
*/

          // Then('minor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('minor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('minor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('minor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('minor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('minor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('minor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('minor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 1, 0) = -25
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });

/*
Scenario: Calculating the determinant of a 3x3 matrix # ../features/matrices.feature:160
    ? Given the following 3x3 matrix A:
        | 1  | 2 | 6  |
        | -5 | 8 | -4 |
        | 2  | 6 | 4  |
*/

          // Given('the following 3x3 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then cofactor(A, 0, 0) = 56
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 0, 1) = 12
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 0, 2) = -46
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And determinant(A) = -196
*/

          // Then('determinant\\(A) = {int}', function (int) {
          // Then('determinant\\(A) = {float}', function (float) {
          //   return 'pending';
          // });

/*
Scenario: Calculating the determinant of a 4x4 matrix # ../features/matrices.feature:170
    ? Given the following 4x4 matrix A:
        | -2 | -8 | 3  | 5  |
        | -3 | 1  | 7  | 3  |
        | 1  | 2  | -9 | 6  |
        | -6 | 7  | 7  | -9 |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then cofactor(A, 0, 0) = 690
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 0, 1) = 447
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 0, 2) = 210
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 0, 3) = 51
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And determinant(A) = -4071
*/

          // Then('determinant\\(A) = {int}', function (int) {
          // Then('determinant\\(A) = {float}', function (float) {
          //   return 'pending';
          // });

/*
Scenario: Testing an invertible matrix for invertibility # ../features/matrices.feature:182
    ? Given the following 4x4 matrix A:
        | 6 | 4  | 4 | 4  |
        | 5 | 5  | 7 | 6  |
        | 4 | -9 | 3 | -7 |
        | 9 | 1  | 7 | -6 |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then determinant(A) = -2120
*/

          // Then('determinant\\(A) = {int}', function (int) {
          // Then('determinant\\(A) = {float}', function (float) {
          //   return 'pending';
          // });
/*
    ? And A is invertible
*/

         Then('A is invertible', function () {
           assert(!tup.equal(mat.determinant(A), 0))
         });

/*
Scenario: Testing a noninvertible matrix for invertibility # ../features/matrices.feature:191
    ? Given the following 4x4 matrix A:
        | -4 | 2  | -2 | -3 |
        | 9  | 6  | 2  | 6  |
        | 0  | -5 | 1  | -5 |
        | 0  | 0  | 0  | 0  |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then determinant(A) = 0
*/

          // Then('determinant\\(A) = {int}', function (int) {
          // Then('determinant\\(A) = {float}', function (det) {
          //   assert(tup.equal(mat.determinant(A), det))
          // });
/*
    ? And A is not invertible
*/

         Then('A is not invertible', function () {
           assert(tup.equal(mat.determinant(A), 0))
         });

/*
Scenario: Calculating the inverse of a matrix # ../features/matrices.feature:200
    ? Given the following 4x4 matrix A:
        | -5 | 2  | 6  | -8 |
        | 1  | -5 | 1  | 8  |
        | 7  | 7  | -6 | -7 |
        | 1  | -3 | 7  | 4  |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? And B ← inverse(A)
*/

         Given('B ← inverse\\(A)', function () {
           B = mat.inverse(A)
         });
/*
    ? Then determinant(A) = 532
*/

          // Then('determinant\\(A) = {int}', function (int) {
          // Then('determinant\\(A) = {float}', function (float) {
          //   return 'pending';
          // });
/*
    ? And cofactor(A, 2, 3) = -160
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And B[3,2] = -160/532
*/

         Then('B[{int},{int}] = {int}\\/{int}', function (i, j, n, d) {
          // Then('B[{int},{int}] = {int}\\/{float}', function (int, int2, int3, float) {
          // Then('B[{int},{int}] = {float}\\/{int}', function (int, int2, float, int3) {
          // Then('B[{int},{int}] = {float}\\/{float}', function (int, int2, float, float2) {
          // Then('B[{int},{float}] = {int}\\/{int}', function (int, float, int2, int3) {
          // Then('B[{int},{float}] = {int}\\/{float}', function (int, float, int2, float2) {
          // Then('B[{int},{float}] = {float}\\/{int}', function (int, float, float2, int2) {
          // Then('B[{int},{float}] = {float}\\/{float}', function (int, float, float2, float3) {
          // Then('B[{float},{int}] = {int}\\/{int}', function (float, int, int2, int3) {
          // Then('B[{float},{int}] = {int}\\/{float}', function (float, int, int2, float2) {
          // Then('B[{float},{int}] = {float}\\/{int}', function (float, int, float2, int2) {
          // Then('B[{float},{int}] = {float}\\/{float}', function (float, int, float2, float3) {
          // Then('B[{float},{float}] = {int}\\/{int}', function (float, float2, int, int2) {
          // Then('B[{float},{float}] = {int}\\/{float}', function (float, float2, int, float3) {
          // Then('B[{float},{float}] = {float}\\/{int}', function (float, float2, float3, int) {
          // Then('B[{float},{float}] = {float}\\/{float}', function (float, float2, float3, float4) {
           assert(tup.equal(B[i][j], n/d))
         });
/*
    ? And cofactor(A, 3, 2) = 105
*/

          // Then('cofactor\\(A, {int}, {int}) = {int}', function (int, int2, int3) {
          // Then('cofactor\\(A, {int}, {int}) = {float}', function (int, int2, float) {
          // Then('cofactor\\(A, {int}, {float}) = {int}', function (int, float, int2) {
          // Then('cofactor\\(A, {int}, {float}) = {float}', function (int, float, float2) {
          // Then('cofactor\\(A, {float}, {int}) = {int}', function (float, int, int2) {
          // Then('cofactor\\(A, {float}, {int}) = {float}', function (float, int, float2) {
          // Then('cofactor\\(A, {float}, {float}) = {int}', function (float, float2, int) {
          // Then('cofactor\\(A, {float}, {float}) = {float}', function (float, float2, float3) {
          //   return 'pending';
          // });
/*
    ? And B[2,3] = 105/532
*/

          // Then('B[{int},{int}] = {int}\\/{int}', function (int, int2, int3, int4) {
          // Then('B[{int},{int}] = {int}\\/{float}', function (int, int2, int3, float) {
          // Then('B[{int},{int}] = {float}\\/{int}', function (int, int2, float, int3) {
          // Then('B[{int},{int}] = {float}\\/{float}', function (int, int2, float, float2) {
          // Then('B[{int},{float}] = {int}\\/{int}', function (int, float, int2, int3) {
          // Then('B[{int},{float}] = {int}\\/{float}', function (int, float, int2, float2) {
          // Then('B[{int},{float}] = {float}\\/{int}', function (int, float, float2, int2) {
          // Then('B[{int},{float}] = {float}\\/{float}', function (int, float, float2, float3) {
          // Then('B[{float},{int}] = {int}\\/{int}', function (float, int, int2, int3) {
          // Then('B[{float},{int}] = {int}\\/{float}', function (float, int, int2, float2) {
          // Then('B[{float},{int}] = {float}\\/{int}', function (float, int, float2, int2) {
          // Then('B[{float},{int}] = {float}\\/{float}', function (float, int, float2, float3) {
          // Then('B[{float},{float}] = {int}\\/{int}', function (float, float2, int, int2) {
          // Then('B[{float},{float}] = {int}\\/{float}', function (float, float2, int, float3) {
          // Then('B[{float},{float}] = {float}\\/{int}', function (float, float2, float3, int) {
          // Then('B[{float},{float}] = {float}\\/{float}', function (float, float2, float3, float4) {
          //   return 'pending';
          // });
/*
    ? And B is the following 4x4 matrix:
        | 0.21805  | 0.45113  | 0.24060  | -0.04511 |
        | -0.80827 | -1.45677 | -0.44361 | 0.52068  |
        | -0.07895 | -0.22368 | -0.05263 | 0.19737  |
        | -0.52256 | -0.81391 | -0.30075 | 0.30639  |
*/

         Then('B is the following 4x4 matrix:', function (dataTable) {
           assert(tup.equal(B, mat.matrix(dataTable.raw())))
         });

/*
Scenario: Calculating the inverse of another matrix # ../features/matrices.feature:218
    ? Given the following 4x4 matrix A:
        | 8  | -5 | 9  | 2  |
        | 7  | 5  | 6  | 1  |
        | -6 | 0  | 9  | 6  |
        | -3 | 0  | -9 | -4 |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then inverse(A) is the following 4x4 matrix:
        | -0.15385 | -0.15385 | -0.28205 | -0.53846 |
        | -0.07692 | 0.12308  | 0.02564  | 0.03077  |
        | 0.35897  | 0.35897  | 0.43590  | 0.92308  |
        | -0.69231 | -0.69231 | -0.76923 | -1.92308 |
*/

         Then('inverse\\(A) is the following 4x4 matrix:', function (dataTable) {
           assert(tup.equal(mat.inverse(A), mat.matrix(dataTable.raw())))
         });

/*
Scenario: Calculating the inverse of a third matrix # ../features/matrices.feature:230
    ? Given the following 4x4 matrix A:
        | 9  | 3  | 0  | 9  |
        | -5 | -2 | -6 | -3 |
        | -4 | 9  | 6  | 4  |
        | -7 | 6  | 6  | 2  |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? Then inverse(A) is the following 4x4 matrix:
        | -0.04074 | -0.07778 | 0.14444  | -0.22222 |
        | -0.07778 | 0.03333  | 0.36667  | -0.33333 |
        | -0.02901 | -0.14630 | -0.10926 | 0.12963  |
        | 0.17778  | 0.06667  | -0.26667 | 0.33333  |
*/

          // Then('inverse\\(A) is the following 4x4 matrix:', function (dataTable) {
          //   return 'pending';
          // });

/*
Scenario: Multiplying a product by its inverse # ../features/matrices.feature:242
    ? Given the following 4x4 matrix A:
        | 3  | -9 | 7  | 3  |
        | 3  | -8 | 2  | -9 |
        | -4 | 4  | 4  | 1  |
        | -6 | 5  | -1 | 1  |
*/

          // Given('the following 4x4 matrix A:', function (dataTable) {
          //   return 'pending';
          // });
/*
    ? And the following 4x4 matrix B:
        | 8 | 2  | 2 | 2 |
        | 3 | -1 | 7 | 0 |
        | 7 | 0  | 5 | 4 |
        | 6 | -2 | 0 | 5 |
*/

         Given('the following 4x4 matrix B:', function (dataTable) {
           B = mat.matrix(dataTable.raw())
         });
/*
    ? And C ← A * B
*/

         Given('C ← A * B', function () {
           C = mat.mul(A, B)
         });
/*
    ? Then C * inverse(B) = A
*/

         Then('C * inverse\\(B) = A', function () {
           assert(tup.equal(mat.mul(C, mat.inverse(B)), A))
         });
