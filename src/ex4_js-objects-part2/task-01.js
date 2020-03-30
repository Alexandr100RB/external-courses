function findPropertyInPrototype(property, obj) {
    const protoObject = Object.getPrototypeOf(obj);
    for (let protoProperty of protoObject) {
        if (property === protoProperty) {
            return protoObject[protoProperty];
        }
    }
    return 'something';
}

module.exports = findPropertyInPrototype();