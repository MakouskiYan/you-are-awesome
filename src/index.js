// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = function(x) {
    let obj = {};
    obj.x = 1;
    return obj;
};
const createNotEnumerableProperty = function(x) {
    return Symbol(x);
};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = function(smth){
}
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => null;
const sortByProto = (objArr) => objArr.sort((a,b)=>{return a.__proto__ - b.__proto__});

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;