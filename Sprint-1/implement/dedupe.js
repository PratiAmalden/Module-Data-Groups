function dedupe(array) {
    if (array.length === 0) {
    return [];
    }


    const uniqueArray = [...new Set(array)];
    // Set automatically removes duplicate values
    // new Set(array) creates new set containing only the unique elm from array
    // [] used to spread operator to convert the set back into an array format
    if (array.length === uniqueArray.length) {
        return array;
    }

    return uniqueArray;
}
