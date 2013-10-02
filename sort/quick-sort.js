
function qsort_recur(arr, left, right) {
    if (left >= right) return;
    var pivot = arr[left];
    var lx = left, rx = right;
    while (lx <= rx) {
        while (arr[lx] < pivot) ++lx;
        while (arr[rx] > pivot) --rx;
        if (lx > rx) break;
        var tmp = arr[lx];
        arr[lx] = arr[rx];
        arr[rx] = tmp;
        ++lx;
        --rx;
    }
    qsort_recur(arr, left, rx);
    qsort_recur(arr, lx, right);
}

function qsort(arr) {
    sarr = arr.slice(0);
    qsort_recur(sarr, 0, arr.length - 1);
    return sarr;
}

module.exports = qsort
