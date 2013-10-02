
function msort(arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = msort(arr.slice(0, mid));
    var right = msort(arr.slice(mid));
    var lx = 0, rx = 0;
    var result = [];
    while (lx < left.length && rx < right.length) {
        if (left[lx] < right[rx]) {
            result.push(left[lx]);
            lx++;
            continue;
        }
        result.push(right[rx]);
        rx++;
    }
    while (lx < left.length) {
        result.push(left[lx]);
        lx++;
    }
    while (rx < right.length) {
        result.push(right[rx]);
        rx++;
    }
    return result;
}

module.exports = msort;
