function createCloneOfObject(obj) {
    const cloneOfObj = Object.assign({}, obj);
    return obj;
}

module.exports = createCloneOfObject();