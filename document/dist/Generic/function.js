"use strict";
// issue before generic #
// normal function การตัดข้อมูล array number
const getElementNumber = (arr, count) => {
    return arr.slice(arr.length - count);
};
// normal function การตัดข้อมูล array string
const getElementString = (arr, count) => {
    return arr.slice(arr.length - count);
};
// normal function การตัดข้อมูล array boolean
const getElementBoolean = (arr, count) => {
    return arr.slice(arr.length - count);
};
const myNum = [10, 20, 30, 40];
const myString = ["top", "kate", "B1", "B2"];
const myBool = [true, true, false, true];
console.log('Issue Before Generic =>', getElementNumber(myNum, 2));
console.log('Issue Before Generic =>', getElementString(myString, 2));
console.log('Issue Before Generic =>', getElementBoolean(myBool, 2));
// generic function เป็นการสร้าง function จัดการชนิดข้อมูลต่างกัน
function getElementGeneric(arr, count) {
    // T คือ type ของชนิดข้อมูลที่ส่งเข้ามาว่าเป็นอะไร
    return arr.slice(arr.length - count);
}
console.log('Generic Function', getElementGeneric(myNum, 2));
console.log('Generic Function', getElementGeneric(myString, 2));
console.log('Generic Function', getElementGeneric(myBool, 2));
