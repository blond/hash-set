'use strict';

const test = require('ava');
const hashSet = require('../index');

const MySet = hashSet(x => x - 1);

test('should iterates over all items', t => {
    const origItems = [0, 1, 2, 3];
    const set = new MySet(origItems);
    let resultItems = [];

    set.forEach(item => resultItems.push(item));

    t.deepEqual(origItems, resultItems);
});

test('should pass context', t => {
    const set = new MySet([1]);
    const context = {};

    set.forEach(function() {
        t.is(this, context);
        t.not(this, {}); // control check
    }, context);
});

test('should pass correct arguments', t => {
    const set = new MySet([1]);
    const context = {};

    set.forEach(function(item, key, set_) {
        t.is(item, 1);
        t.is(key, 0);
        t.is(set, set_);
    }, context);
});

test('should not runs on empty set', t => {
    const set = new MySet();
    let runsCount = 0;
    const spy = () => ++runsCount;
    set.forEach(spy);

    t.is(runsCount, 0);
});
