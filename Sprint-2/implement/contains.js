function contains(obj, key) {
    if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
        // handling null / checking if obj is an object / exclude arrays
        return false;
    }

    return key in obj;
    // "in" checks whether the key in the obj
}
console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({ a: 1, b: 2 }, "c"));

module.exports = contains;