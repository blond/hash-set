import test from 'ava';

import hashSet from '../src/hash-set';

const AnimalSet = hashSet(animal => {
    switch (animal) {
        case 'cat':   return 'cat';
        case 'kitty': return 'cat';

        case 'dog': return 'dog';
        case 'puppy': return 'dog';
    }
});

test('should add value but not hash', t => {
    const set = new AnimalSet();

    set.add('kitty');

    t.same(Array.from(set), ['kitty']);
});

test('should add values with different hash', t => {
    const set = new AnimalSet();

    set.add('kitty');
    set.add('puppy');

    t.same(Array.from(set), ['kitty', 'puppy']);
});

test('should not add value if other value with same hash', t => {
    const set = new AnimalSet();

    set.add('cat');
    set.add('kitty');

    t.same(Array.from(set), ['cat']);
});
