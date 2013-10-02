qsort = require('./quick-sort');
msort = require('./merge-sort');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var ix = 0; ix < 1000; ++ix) {
    arr = new Array(ix);
    for (var jx = 0; jx < ix; ++jx) {
        arr[jx] = getRandomInt(-1000, 1000);
    }
    first = qsort(arr);
    second = msort(arr);
    for (var zx = 0; zx < arr.length; zx++) {
        if (first[zx] !== second[zx]) {
            console.log('fail.');
            process.exit(1);
        }
    }
}
