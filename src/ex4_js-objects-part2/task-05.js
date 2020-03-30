function findStr(wantedStr, str) {
    if (str.search(wantedStr) >= 0) {
        return true;
    }
    return false;
}

module.exports = findStr();