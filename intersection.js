exports.intersection = (t, s) => {
    return { t:t, object:s, valueOf:function() { return this.t } }
}

exports.intersections = (...ints) => ints.sort((a, b) => a - b)

exports.hit = xs => xs[xs.findIndex(x => x > 0)]