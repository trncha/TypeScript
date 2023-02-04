"use strict";
// union type #
let ageUnion;
ageUnion = 50;
ageUnion = "top";
ageUnion = true;
console.log(`Union Type ${ageUnion}`);
let coordinates;
// coordinates = {
//     x: 1111,
//     y: 2222
// }
coordinates = {
    lat: 10,
    long: 20,
};
// ไม่สามารถเอา type Point กับ Position มารวมในตัวแปรได้
console.log('Union Type & Type Aliases', coordinates);
let text = "top";
text = ["top", "kate"];
console.log('Union Type & Type Aliases', text);
// union type & function #
const sayHiUnion = (person) => {
    if (typeof person === 'string' || typeof person === 'number') {
        console.log(`Union Type & Function String | Number ${person}`);
    }
    else {
        person.forEach(element => {
            console.log(`Union Type & Function Array ${element}`);
        });
    }
};
sayHiUnion("top");
sayHiUnion(50000);
sayHiUnion(["top", "kate"]);
let permission = "admin";
permission = "User";
// permission = "Editor" *error เพราะ value Editor ไม่ได้ถูกนิยามใน type Role
console.log(`Literals Type ${permission}`);
// literals type & function #
const confirmDialog = (answer) => {
    console.log(`Literals Type & Function ${answer}`);
};
confirmDialog("Y");
confirmDialog("N");
