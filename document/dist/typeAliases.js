"use strict";
let emp1 = { id: 1, name: "top", salary: 25000, phone: "02-xxxxxxxx" };
emp1.name = "A";
emp1.salary = 35000;
console.log('type aliases (Custom Type) =>', emp1);
let cus1 = { id: 1, name: "A", salary: 55000, phone: "02-xxxxxxxx" };
let cus2 = { id: 2, name: "B", salary: 75000 };
console.log('optional properties && readonly modifier =>', cus1);
// cus2.id = 300 *error เพราะ property id ถูก readonly modifier
console.log('optional properties && readonly modifier =>', cus2);
