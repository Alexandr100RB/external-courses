function getMapOfArr(arr, callback) {
    let newArr = [];
    for (let i of arr) {
        newArr[i] = callback(arr[i], i, arr);
    }
    return newArr;
}

module.exports = getMapOfArr();