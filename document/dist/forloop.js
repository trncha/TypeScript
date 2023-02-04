"use strict";
for (let count = 1; count <= 10; count++) {
    console.log(`forloop count 1-10 => ${count}`);
}
let users = ["top", "kate"];
for (let i = 0; i < users.length; i++) {
    console.log(`forloop users => ${users[i]}`);
}
// foreach #
users.forEach((element) => {
    console.log(`foreach users => ${element}`);
});
