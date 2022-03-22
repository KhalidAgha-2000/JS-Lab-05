getProperties = (new_Object) => {
    const array = Object.keys(new_Object);
    return array;
}
console.log(getProperties({ a: 1, b: true, c: "I dont know" }))
/******************************************************* */
isPlainObject = (new_Object) => {
    if (typeof new_Object == "object") {
        const test = Array.isArray(new_Object);
        return !test
    }
}
console.log(isPlainObject({ a: 1 }))
console.log(isPlainObject([1, 2, 3]))
console.log(isPlainObject({ a: 1 }))
console.log(isPlainObject([1, 2, 3]))
/******************************************************* */
modifyObject = (new_Object) => {
    getPropertiesNb = (new_Object) => {
        new_Object["getPropertiesNb : "]
        return new_Object = Object.keys(new_Object).length
    }
    new_Object["isObject"] = isPlainObject(new_Object)
    new_Object["getPropertiesNb :"] = getPropertiesNb(new_Object)

    return new_Object

}
console.log(modifyObject({ a: 1, c: "I don't know" }))
console.log(modifyObject(["Not Object"]))
/******************************************************* */
makePairs = (new_Object) => {
    return array = Object.entries(new_Object);
}
console.log(makePairs({ a: 1, b: 2 }))
/******************************************************* */
without = (my_object, deleted) => {
    delete my_object[deleted];
    return my_object
}
console.log(without({ a: 1, b: 2 }, 'a'))
/******************************************************** */
isEmpty = (object) => {
    if (Object.keys(object).length === 0 || (Object.keys(object).length === 1 && Object.values(object)[0] === undefined)) {
        return true
    }
    return false
}
console.log(isEmpty({}))
console.log(isEmpty({ a: undefined }))
console.log(isEmpty({ a: 1 }))
console.log(isEmpty({ a: 1, b: undefined }))
/******************************************************** */
isEqualK = (my_object1, my_object2) => {
    return JSON.stringify(my_object1) === JSON.stringify(my_object2);
}
console.log(isEqualK({ a: 1, b: 1 }, { a: 1, b: 2 }))
console.log(isEqualK({ a: 1, b: 1 }, { a: 1, b: 1 }))
/******************************************************** */
intersection = (object1, object2) => {
    object = {}
    for (let i in object1) {
        for (let y in object2) {
            if (i === y && object1[i] === object2[y]) object[i] = object1[i]
        }
    }
    return object
}
console.log(intersection({ z: 1, b: 2 }, { a: 1, b: 2 }))