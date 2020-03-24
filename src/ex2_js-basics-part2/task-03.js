function countElements(arr) {
    let evenNumbers = 0,
        oddNumbers = 0,
        nullElements = 0;
    for (let element of arr) {
        if (element === 0) {
            nullElements++;
        } else if ((element % 2) === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
    return [evenNumbers, oddNumbers, nullElements];
}

module.exports = countElements();