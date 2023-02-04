"use strict";
// การกำหนดข้อบังคับในการจัดการชนิดข้อมูล
function mergeConstraints(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
const productConstraints = { name: "เสื้อ", price: 500 };
const descriptionConstraints = { colors: ["white", "red", "blue"] };
console.log('Generic Constraints =>', mergeConstraints(productConstraints, descriptionConstraints));
// console.log('Generic Constraints =>', mergeConstraints(false, true)); *error เพราะ mergeConstraints รับเป็น object ทั้งคู่
