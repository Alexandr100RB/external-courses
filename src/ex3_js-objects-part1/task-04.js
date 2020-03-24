function addNewProperty(property, obj) {
    for (let property in obj) {
        if (!obj.hasOwnProperty(property)) {
            // eslint-disable-next-line no-param-reassign
            obj[property] = 'new';
        }
    }

    return obj;
}

module.exports = addNewProperty();