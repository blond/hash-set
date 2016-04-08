'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x);

test('should have `length` property', t => {
    t.is(MySet.length, 0);
});

test('should mimic `toString()` method', t => {
    const originSet = (new Set())._c; // AVA uses babel-runtime
    const mySet = new MySet();

    t.is(mySet.toString(), originSet.toString());
});

test('should return original Set with `valueOf()` method', t => {
    const originSet = (new Set([1, 2, 3]))._c; // AVA uses babel-runtime
    const mySet = new MySet([1, 2, 3]);

    t.deepEqual(mySet.valueOf(), originSet);
});
