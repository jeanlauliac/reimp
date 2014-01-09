'use strict';

// Rotate a matrix 90 deg to the right.
function rot90(img, N) {
    for (var x = 0, maxX = (N+1)/2 | 0; x < maxX; ++x) {
        for (var y = 0, maxY = N/2 | 0; y < maxY; ++y) {
            var pixel = img[y][x];
            var yInv = N - 1 - y;
            var xInv = N - 1 - x;
            img[y][x] = img[xInv][y];
            img[xInv][y] = img[yInv][xInv];
            img[yInv][xInv] = img[x][yInv];
            img[x][yInv] = pixel;
        }
    }
}

var N = 4;
var img = [
    [ 2, 3, 4, 1 ],
    [ 6, 7, 2, 2 ],
    [ 9, 2, 1, 7 ],
    [ 3, 5, 2, 3 ]
];

rot90(img, N);
console.log(img);

