'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x);

test('should create empty set', t => {
    const set = new MySet();

    t.deepEqual(Array.from(set), []);
});

test('should create set with array items', t => {
    const arr = [1, 2, 3];
    const set = new MySet(arr);

    t.deepEqual(Array.from(set), arr);
});

test('should create set with iterable items', t => {
    const iterable = (new Set([1, 2, 3])).values();
    const set = new MySet(iterable);

    t.deepEqual(Array.from(set), Array.from([1, 2, 3]));
});
