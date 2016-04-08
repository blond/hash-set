'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x);

test('should add value', t => {
    const set = new MySet();

    set.add(1);

    t.deepEqual(Array.from(set), [1]);
});

test('should not add existing value', t => {
    const set = new MySet();

    set.add(1);
    set.add(1);

    t.deepEqual(Array.from(set), [1]);
});

test('should support chains', t => {
    const set = new MySet();

    set
        .add(1)
        .add(2);

    t.deepEqual(Array.from(set), [1, 2]);
});
