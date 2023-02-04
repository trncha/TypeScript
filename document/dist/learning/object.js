"use strict";
// สร้าง object แบบไม่ระบุชนิดข้อมูลให้ property #
const person1 = {
    name: "top",
    age: 25
};
// สร้าง object แบบระบุชนิดข้อมูลให้ property #
const person2 = { name: "top", age: 25 };
const position = { lat: 30, long: 50 };
// ฟังก์ชั่นรับค่า object #
const showDetail1 = (data) => {
    console.log(`name => ${data.name} ,age => ${data.age}`);
};
showDetail1(person2);
// ฟังก์ชั่น return object #
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
console.log(randomPosition());
// excess properties check #
const showDetail2 = (data) => {
    console.log(`excess properties check name => ${data.name} ,age => ${data.age}`);
};
// showDetail2({ name: "top", age: 25, address: "bangkok" }) *error excess properties check ส่ง argument object ให้เท่ากับ parameter รับ object
showDetail2({ name: "top", age: 25 });
