function countElements(arr) {
    let evenNumbers = 0;
    let oddNumbers = 0;
    let zeros = 0;
    for (let element of arr) {
        if (arr[element] === 0) {
            zeros++;
        } else if ((arr[element] % 2) === 0) {
            evenNumbers++;
        }
    }
    let countedElements = [zeros, evenNumbers, oddNumbers];
    return countedElements;
}

module.exports = countElements();