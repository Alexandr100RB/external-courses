function joinStrings(str, add, num) {
    let spaceCounter = 0;
    for (let char in str) {
        if (str[char] === ' ') {
            spaceCounter++;
            if (spaceCounter === num) {
                return (str.substring(0, char) + ' ' + add + str.substring(char, str.length));
            }
        }
    }
    // eslint-disable-next-line consistent-return
    return;
}

module.exports = joinStrings();