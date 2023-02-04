"use strict";
function merge(param1, param2) {
    // param1 รับ data type จากตัวแปร T มา
    // param2 รับ data type จากตัวแปร U มา
    console.log(`Multiple Generic Function => ${param1} - ${param2}`);
}
merge("top", true);
merge(true, false);
function mergeProduct(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
const product = { name: "เสื้อ", price: 500 };
const description = { colors: ["white", "red", "blue"] };
console.log(mergeProduct(product, description));
// ไม่ต้องใส่ <data type> ก็ได้ เช่น mergeProduct<object, object>(product, description)
