'use strict';

const test = require('ava');
const hashSet = require('../index');

test('should throw error if hash function is not specified', t => {
    t.throws(() => {
        hashSet();
    }, 'You should specify hash function to create HashSet.');
});
