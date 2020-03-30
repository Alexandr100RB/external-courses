function sliceArr(arr, begin, end) {
    let newArr = [],
        beginOfSlice = begin,
        endOfSlice = end;
    if (beginOfSlice === undefined) {
        beginOfSlice = 0;
    };
    if (endOfSlice === undefined) {
        endOfSlice = arr.length - 1;
    };
    if (beginOfSlice < 0) {
        beginOfSlice = arr.length + beginOfSlice;
    }
    if (endOfSlice < 0) {
        endOfSlice = arr.length + endOfSlice;
    }
    for (let i = beginOfSlice; i<= endOfSlice; i++) {
        newArr[i - beginOfSlice] = arr[i];
    };
    return newArr;
}

module.exports = sliceArr();