import test from 'ava';

import hashSet from '../src/hash-set';

const MySet = hashSet(x => x);

test('should return `true` if value not exist', t => {
    const set = new MySet([1, 2]);

    t.true(set.has(2));
});

test('should return `false` if value exist', t => {
    const set = new MySet([1, 2]);

    t.false(set.has(3));
});
