"use strict";
// create array #
const arrUsers = ["top", "kate"];
arrUsers.push("a");
arrUsers.push("b");
const arrAges = [1, 2];
arrAges.push(3);
console.log('arrUsers =>', arrUsers);
console.log('arrAges =>', arrAges);
// การเข้าถึง array #
arrUsers[0] = "teranai";
console.log('arrUsers[0] =>', arrUsers[0]);
console.log('arrUsers.length =>', arrUsers.length);
for (let i = 0; i < arrUsers.length; i++) {
    console.log(`For Loop arrUsers ${arrUsers[i]}`);
}
arrUsers.forEach((item) => {
    console.log(`Foreach arrUsers ${item}`);
});
const arrEmp = [];
arrEmp.push({ name: "top", salary: 35000, department: "Programmer" });
arrEmp.push({ name: "kate", salary: 50000, department: "Programmer" });
for (let person of arrEmp) {
    console.log(`Forof arrEmp ${person.name}`);
}
