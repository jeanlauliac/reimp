
var HashTable = function(hashCb, size) {
    var bucket = new Array(size);
    var getIndex = function(key) {
        return hashCb(key) % size;
    }
    var find = function(slot, key) {
        for (var ix = 0; ix < slot.length; ++ix) {
            if (slot[ix].key === key)
                return ix;
        }
        return -1;
    }
    var pair = function(key, item) {
        return {key: key, item: item};
    }
    var cantFind = function() {
        throw new Error('can\'t find the specified key');
    }
    this.set = function(key, item) {
        var sx = getIndex(key);
        var pr = pair(key, item);
        if (!bucket[sx]) {
            bucket[sx] = [pr];
            return;
        }
        var ix = find(bucket[sx], key);
        if (ix >= 0)
            bucket[sx][ix] = pr;
        else
            bucket[sx].push(pr);
    }
    this.get = function(key) {
        var sx = getIndex(key);
        var ix = find(bucket[sx], key);
        if (!bucket[sx])
            cantFind();
        if (ix >= 0) {
            return bucket[sx][ix].item;
        }
        cantFind();
    }
    this.dump = function() {
        return JSON.stringify(bucket);
    }
}

module.exports = HashTable
