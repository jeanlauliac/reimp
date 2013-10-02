HashTable = require('./hash-table');

function assert(result) {
    if (!result)
        throw new Error('assert failed');
}

function hash(str) {
    var hash = 5381;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash;
}

(function() {
    var ht = new HashTable(hash, 7);
    ht.set('foo', 42);
    ht.set('bar', 13);
    ht.set('baz', 57);
    ht.set('glo', 98);
    ht.set('daz', 23);
    ht.set('abc', 111);
    ht.set('bcd', 1233);
    ht.set('baz', 56);
    ht.set('efg', 5433);
    ht.set('yux', 898);

    assert(ht.get('foo') === 42);
    assert(ht.get('baz') === 56);
    assert(ht.get('glo') === 98);
    assert(ht.get('bar') === 13);
    assert(ht.get('daz') === 23);
})();
