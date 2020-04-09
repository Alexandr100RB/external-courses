function checkType(argument) {
    if (typeof argument === 'string') {
        return 'string';
    } else if ((typeof argument === 'number') && ((isNaN(argument)) !== true)) {
        return 'number';
    }
    return undefined;
}

module.exports = checkType();