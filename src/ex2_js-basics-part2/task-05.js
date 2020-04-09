function returnMaxElement(arr) {
    let maxElement = 0;
    for (let element of arr) {
        if (arr[element] > maxElement) {
            maxElement = arr[element];
        }
    }
    return maxElement;
}

module.exports = returnMaxElement();