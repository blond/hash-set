hash-set
========

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Coverage Status][coverage-img]][coveralls]

[npm]:          https://www.npmjs.org/package/hash-set
[npm-img]:      https://img.shields.io/npm/v/hash-set.svg

[travis]:       https://travis-ci.org/blond/hash-set
[test-img]:     https://img.shields.io/travis/blond/hash-set.svg?label=tests

[coveralls]:    https://coveralls.io/r/blond/hash-set
[coverage-img]: https://img.shields.io/coveralls/blond/hash-set.svg

The original [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) uses [Same-value-zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) equality.

Use this package if you need custom comparison behavior.

Install
-------

```
$ npm install --save hash-set
```

Usage
-----

```js
import hashSet from 'hash-set';

// Create Set class which compares objects with JSON.stringify
const JSONSet = hashSet(JSON.stringify);
// Create instance of JSONSet
const mySet = new JSONSet();

mySet.add({ a: 1 });
mySet.add({ b: 2 });

mySet.has({ a: 1 }); // true
mySet.has({ b: 2 }); // true
mySet.has({ c: 3 }); // false, `{ c: 3 }` has not been added to the set

mySet.size; // 2

mySet.delete({ a: 1 }); // removes `{ a: 1 }` from the set
mySet.has({ a: 1 });    // false, `{ a: 1 }` has been removed

mySet.size; // 1
```

API
---

### hashSet(hashFn)

Returns `Set` class with custom equality comparisons.

#### hashFn

Type: `function`

The function to determine the unique of value.

`HashSet` executes a provided function every time you call `add(value)`, `has(value)`, `delete(value)`.

The result of `hashFn(value)` will be used for comparison with the values of `HashSet`. For comparison will be used [Same-value-zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

**Example**

```js
const mySet = new Set();

mySet.add(1);   // value has been added to the set
mySet.add('1'); // value has been added to the set
                // because `Object.is(1, '1')` is `false`

console.log(mySet); // Set { 1, '1' }
```

```js
import hashSet from 'hash-set';

function hashFn(value) {
    return value.toString();
}

const StringSet = hashSet(hashFn);
const mySet = new StringSet();

mySet.add(1);   // value has been added to the set
mySet.add('1'); // value has not been added to the set
                // because `Object.is(hashFn(1), hashFn('1'))` is `true`

console.log(mySet); // Set { 1 }
```


License
-------

MIT © [Andrew Abramov](https://github.com/blond)
