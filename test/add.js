import test from 'ava';

import hashSet from '../src/hash-set';

const MySet = hashSet(x => x);

test('should add value', t => {
    const set = new MySet();

    set.add(1);

    t.same(Array.from(set), [1]);
});

test('should not add existing value', t => {
    const set = new MySet();

    set.add(1);
    set.add(1);

    t.same(Array.from(set), [1]);
});

test('should support chains', t => {
    const set = new MySet();

    set
        .add(1)
        .add(2);

    t.same(Array.from(set), [1, 2]);
});
