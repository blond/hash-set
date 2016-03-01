import test from 'ava';

import hashSet from '../src/hash-set';

const MySet = hashSet(x => x);

test('should delete existing value', t => {
    const set = new MySet();

    set.add(1);
    set.add(2);

    set.delete(1);

    t.same(Array.from(set), [2]);
});

test('should not throw if deleted value is not exist', t => {
    const set = new MySet();

    set.delete(1);

    t.same(Array.from(set), []);
});
