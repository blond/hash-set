'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x);

test('should delete existing value', t => {
    const set = new MySet();

    set.add(1);
    set.add(2);

    set.delete(1);

    t.deepEqual(Array.from(set), [2]);
});

test('should not throw if deleted value is not exist', t => {
    const set = new MySet();

    set.delete(1);

    t.deepEqual(Array.from(set), []);
});
