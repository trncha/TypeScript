"use strict";
// (void) => เป็นฟังก์ชั่นที่ไม่มีการรับและส่งค่า #
function sayHiVoid() {
    console.log("Hello Void Function");
}
sayHiVoid();
// (parameter) => ฟังก์ชั่นที่มีการรับค่า #
function sayHiParam(name) {
    console.log(`Hello ${name} Function`);
}
sayHiParam("Parameter");
// (return) => ฟังก์ชั่นที่มีส่งค่า ***ชนิดข้อมูลของฟังก์ชั่นขึ้นอยู่กับข้อมูลที่เรา return #
function sayHiReturn1() {
    return 500;
}
function sayHiReturn2() {
    return "Hello Return Function";
}
console.log(sayHiReturn2());
// return & parameter #
function sayHiReturnParam(num) {
    return (num % 2 === 0) ? "เลขคู่" : "เลขคี่";
}
console.log(`Hello Return & Parameter Function ${sayHiReturnParam(1)}`);
// arrow function #
const sayHiArrow = (name) => {
    return name;
};
console.log(sayHiArrow("Hello Arrow Function"));
// default parameter #
const showEmpDefault = (name, age, address = "bangkok") => {
    console.log(`Hello Default Parameter Function name => ${name} ,age => ${age} ,address => ${address}`);
};
showEmpDefault("testA", 20, "london");
showEmpDefault("testB", 30);
showEmpDefault("testC", 40, "paris");
showEmpDefault("testD", 35);
