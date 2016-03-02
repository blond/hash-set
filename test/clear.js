import test from 'ava';

import hashSet from '../src/hash-set';

const MySet = hashSet(x => x);

test('should not change empty set', t => {
    const set = new MySet();

    set.clear();

    t.is(set.size, 0);
});

test('should clear set', t => {
    const set = new MySet();

    set.add(1);
    set.clear();

    t.is(set.size, 0);
});
