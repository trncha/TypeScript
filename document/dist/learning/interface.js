"use strict";
let personInterface;
// ถ้าประกาศ personInterface ด้วย const ต้องมีค่าเริ่มต้นเสมอ
personInterface = {
    name: "top",
    age: 25,
    gender: "male",
    title: "programmer",
    income: 35000,
    address: "bangkok",
    phone: "02-xxx-xxxx"
};
// ต้องประกาศให้ครบทุก property ด้วย
console.log('Interface & Extended', personInterface);
let animal1 = {
    name: "ant",
    weight: 28,
    info() {
        console.log(`Interface method Last Data = ${new Date().toLocaleString()}`);
    },
};
// animal1.weight = 50 *error เพราะ property weight ใน interface animal เป็น readonly
animal1.info();
let people1 = {
    title: "programmer",
    income: 35000,
    address: "bangkok",
    phone: "02-xxx-xxxx"
};
console.log('Intersection', people1);
