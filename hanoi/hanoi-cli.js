var hanoi = require('./hanoi');

var TW_NAMES = ['A', 'B', 'C'],
    SIZE = 3,
    TW_SPACE = 3;

Board = (function() {
    Board = function(size) {
        this.size = size;
        this.towers = [[], [], []];
        for (var disk = size; disk > 0; --disk) {
            this.towers[0].push(disk);
        }
    }

    Board.prototype.move = function(from, to) {
        if (this.towers[from].length === 0)
            throw new Error('no more disk on tower ' + from);
        var disk = this.towers[from].pop();
        var dest = this.towers[to];
        if (dest.length > 0 && dest[dest.length-1] < disk)
            throw new Error('cannot move onto a smaller disk ' + to);
        this.towers[to].push(disk);
    }

    return Board;
})();


function printNChars(n, char) {
    for (; n > 0; --n) {
        process.stdout.write(char);
    }
}

function printDiskPlane(disks, size) {
    var fullWidth = size*2 + 1;
    for (var dx = 0; dx < 3; ++dx) {
        var disk = disks[dx];
        if (disk !== null) {
            var width = disk*2 + 1;
            var emptyWidth = (fullWidth-width)/2;
            printNChars(emptyWidth, ' ');
            printNChars(width, '=');
            printNChars(emptyWidth, ' ');
        } else {
            printNChars(size, ' ');
            process.stdout.write('|');
            printNChars(size, ' ');
        }
        printNChars(TW_SPACE, ' ');
    }
}

// Print the board on stdout.
function printBoard(board) {
    for (var height = board.size; height >= 0; --height) {
        disks = board.towers.map(function(tower) {
            if (tower.length <= height)
                return null;
            return tower[height]
        });
        printDiskPlane(disks, board.size);
        process.stdout.write('\n');
    }
    printNChars((board.size*2 + 1 + TW_SPACE) * 3, '-');
    process.stdout.write('\n');
}


var size = SIZE;
if (process.argv.length > 2) {
    size = Number(process.argv[2]);
}
board = new Board(size);
printBoard(board);

var moves = 0;
hanoi(board.size, function(from, to) {
    moves += 1;
    console.log('%s:[%s -> %s]', moves, TW_NAMES[from], TW_NAMES[to]);
    console.log();
    board.move(from, to);
    printBoard(board);
});





//    |        |
//   ===       |
//  =====      |
// =======     |
// ---------------------------