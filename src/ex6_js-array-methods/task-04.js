function filterArr(arr, callback) {
    let newArr = [];
    for (let i of arr) {
        if (callback(arr[i], i, arr)) {
            newArr[i] = callback(arr[i], i, arr);
        }
    }
    return newArr;
}

module.exports = filterArr();