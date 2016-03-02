'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x);

test('should return 0 for empty set', t => {
    const set = new MySet();

    t.is(set.size, 0);
});

test('should return 1 for set with one item', t => {
    const set = new MySet();

    set.add(1);

    t.is(set.size, 1);
});

test('should return 2 for set with two item', t => {
    const set = new MySet();

    set
        .add(1)
        .add(2);

    t.is(set.size, 2);
});
