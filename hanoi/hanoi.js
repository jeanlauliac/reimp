
// Move `count` disks from peg `source` to peg `dest`. `inter` is used
// as an intermediary working peg. Call `cb(from, to)` for each disk move.
function move(count, source, dest, inter, cb) {
    if (count === 0)
        return;
    move(count - 1, source, inter, dest, cb);
    cb(source, dest);
    move(count - 1, inter, dest, source, cb);
}

// Move an hanoi tower of this `size` from first to last peg. `cb(from, to)`
// is called for each move, `from` and `to` are integers from 0 to 2
// representing pegs.
function hanoi(size, cb) {
    move(size, 0, 2, 1, cb);
}

module.exports = hanoi
