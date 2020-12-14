const _ = require('lodash')
const tuple = require('./tuple')

exports.IDENTITY = Object.freeze([[1, 0, 0, 0], [0, 1, 0, 0] , [0, 0, 1, 0], [0, 0, 0, 1]].map(Object.freeze))

exports.matrix = M => M.map(row => row.map(Number))

exports.transpose = M => _.zip(...M)

exports.mul = (A, B) => {
    let notTuple = _.isArray(B)
    B = notTuple ? exports.transpose(B) : [B.arr]
    let C = A.map(row =>
                B.map(col =>
                    _.sum(_.zipWith(row, col, _.multiply))))
    return notTuple ? C : new tuple.tuple(...C.flat())
}

exports.determinant = M => M.length == 2 && M[0].length == 2 ?
                           M[0][0] * M[1][1] - M[0][1] * M[1][0] :
                           _.sum(M[0].map((e, i) => e * exports.cofactor(M, 0, i)))

exports.submatrix = (M, m, n) => M.filter((_, i) => i != m).map(row => row.filter((_, j) => j != n))

exports.minor = (M, m, n) => exports.determinant(exports.submatrix(M, m, n))

exports.cofactor = (M, m, n) => (-1) ** (m + n) * exports.minor(M, m, n)

exports.inverse = M => {
    const det = exports.determinant(M)
    return exports.transpose(M.map((row, i) => row.map((_, j) => exports.cofactor(M, i, j) / det)))
}