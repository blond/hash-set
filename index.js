'use strict';

/**
 * Returns `Set` class with custom equality comparisons.
 *
 * @param {function} hashFn — the function to determine the unique of value.
 * @returns {HashSet}
 */
module.exports = function hashSet(hashFn) {
    if (!hashFn) {
        throw new Error('You should specify hash function to create HashSet.');
    }

    /**
     * Set objects are collections of values, you can iterate its elements in insertion order.
     *
     * A value in the Set may only occur once; it is unique in the Set's collection.
     */
    return class HashSet {
        /**
         * The value of the length property is 0.
         */
        static get length() {
            return 0;
        }
        /**
         * Returns the function that created an instance's prototype.
         *
         * @param {Iterable} iterable — if an iterable object is passed, then all of its elements
         *                              will be added to the new Set. `null` is treated as undefined.
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of}
         */
        constructor(iterable) {
            this._map = new Map();

            if (iterable) {
                for (let item of iterable) {
                    this.add(item);
                }
            }
        }
        /**
         * The value of size is an integer representing how many entries the Set object has.
         * A set accessor function for size is undefined; you can not change this property.
         *
         * @returns {number} the number of elements in a Set object.
         */
        get size() {
            return this._map.size;
        }
        /**
         * Appends a new element with the given value to the Set object.
         *
         * @param {*} value — the value of the element to add to the Set object.
         * @returns {HashSet}.
         */
        add(value) {
            const id = hashFn(value);

            if (!this._map.has(id)) {
                this._map.set(id, value);
            }

            return this;
        }
        /**
         * Returns a boolean asserting whether an element is present with the given value in the Set object or not.
         *
         * @param {*} value — the value to test for presence in the Set object.
         * @returns {boolean} Returns true if an element with the specified value exists in the Set object;
         *                    otherwise false.
         */
        has(value) {
            const id = hashFn(value);

            return this._map.has(id);
        }
        /**
         * Removes the element associated to the value and returns the value that.
         *
         * `Set.prototype.has(value)` would have previously returned.
         * `Set.prototype.has(value)` will return false afterwards.
         *
         * @param {*} value — the value of the element to remove from the Set object.
         * @returns {boolean} Returns true if an element in the Set object has been removed successfully;
         *                    otherwise false.
         */
        delete(value) {
            const id = hashFn(value);

            return this._map.delete(id);
        }
        /**
         * Removes all elements from the Set object.
         */
        clear() {
            this._map.clear();
        }
        /**
         * Returns a new Iterator object that contains an array of [value, value] for each element in the Set object,
         * in insertion order.
         *
         * This is kept similar to the Map object, so that each entry has the same value for its key and value here.
         *
         * @returns {Iterator}
         */
        entries() {
            return this._map.values();
        }
        /**
         * Executes a provided function once per each value in the Set object, in insertion order.
         *
         * It is not invoked for values which have been deleted. However, it is executed for values which are present
         * but have the value undefined.
         *
         * Callback is invoked with three arguments:
         *   * the element value
         *   * the element key
         *   * the Set object being traversed
         *
         * @param {function} callbackFn — function to execute for each element.
         * @param {object} thisArg — value to use as this when executing callback. If a thisArg parameter is provided
         *                           to forEach, it will be used as the this value for each callback.
         */
        forEach(callbackFn, thisArg) {
            this._map.forEach((value, key) => callbackFn.call(thisArg, value, key, this));
        }
        /**
         * Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
         *
         * Is the same function as the values() function.
         *
         * @returns {Iterator}
         */
        values() {
            return this._map.values();
        }
        /**
         * Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
         *
         * Is the same function as the values() function.
         *
         * @returns {Iterator}
         */
        keys() {
            return this._map.values();
        }
        /**
         * The initial value of the @@iterator property is the same function object as the initial
         * value of the values property.
         *
         * Is the same function as the values() function.
         *
         * @returns {Iterator}
         */
        [Symbol.iterator]() {
            return this._map.values();
        }
        /**
         * Returns Set object is equivalent to this HashSet object.
         *
         * @returns {Set}
         */
        valueOf() {
            return new Set(this._map.values());
        }
        /**
         * Returns a string representing object.
         *
         * @returns {string}
         */
        toString() {
            return '[object Set]';
        }
    };
}
