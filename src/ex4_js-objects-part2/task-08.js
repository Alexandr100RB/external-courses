function makeStrLower(str) {
    let newStr = str.charAt(0).toUpperCase();
    for(let i = 0; i < str.length-1; i++) {
        if(str[i] === ' ') {
            newStr+=str[i+1].toLowerCase();
        } else {
            newStr+=str[i+1];
        }
    }
    return newStr;
}

module.exports = countLetters();