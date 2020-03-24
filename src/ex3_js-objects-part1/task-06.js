function createDeepCloneOfObject(obj) {
    return (JSON.parse(JSON.stringify(obj)));
}

module.exports = createDeepCloneOfObject();