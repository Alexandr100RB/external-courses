function compareElements(arr) {
    let flag = 1;
    let counter = (arr.length-1);
    for (i = 0; i < counter; i++) {
        if (arr[counter] !== (arr[counter+1])) {
            return false;
        }
    }
    return true;
}

module.exports = compareElements();