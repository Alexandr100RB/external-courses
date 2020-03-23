function checkType(argument) {
    if ((isNaN(argument)) === true) {
        return undefined;
    } else if ((typeof argument) === 'number') {
        return 'number';
    } else if ((typeof argument) === 'string') {
        return 'string';
    }
    return undefined;
}

module.exports = checkType();