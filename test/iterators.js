'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x);

test('should be iterable', t => {
    const set = new MySet([1, 2]);
    const arr = [];

    for (let v of set) {
        arr.push(v);
    }

    t.same(arr, [1, 2]);
});

test('forEach()', t => {
    const set = new MySet([1, 2]);
    const arr = [];

    set.forEach(v => arr.push(v));

    t.same(arr, [1, 2]);
});

test('entries()', t => {
    const set = new MySet([1, 2]);

    t.same(Array.from(set.entries()), [1, 2]);
});

test('keys()', t => {
    const set = new MySet([1, 2]);

    t.same(Array.from(set.keys()), [1, 2]);
});

test('values()', t => {
    const set = new MySet([1, 2]);

    t.same(Array.from(set.values()), [1, 2]);
});
