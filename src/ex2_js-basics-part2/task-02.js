function showEveryElement(arr) {
    for (let element of arr) {
        console.log(arr[element]);
    }
    console.log(arr.length);
    return;
}

module.exports = showEveryElement();