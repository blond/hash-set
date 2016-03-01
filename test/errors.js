import test from 'ava';

import hashSet from '../src/hash-set';

test('should throw error if hash function is not specified', t => {
    t.throws(() => {
        hashSet();
    }, 'You should specify hash function to create HashSet.');
});
