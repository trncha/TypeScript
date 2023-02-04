"use strict";
// spread operator #
const words = ["a", "b", "c"];
const nickNames = ["top", "kate"];
nickNames.push(...words);
console.log('Spread Operator =>', nickNames);
// rest parameter #
const sumRestOriginal = (a, b) => {
    return a + b;
};
console.log(`Send Argument to Parameter Original => ${sumRestOriginal(10, 20)}`);
// console.log(sumRest(10, 20, 30)) *error เพราะส่ง argument ไปเกิน parameter
const sumRest = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(`Rest Parameter ${sumRest(10, 20)}`);
console.log(`Rest Parameter ${sumRest(10, 20, 30)}`);
// destructuring array #
const colors = ["red", "green", "blue"];
const [red, green, blue] = colors;
console.log(`Destructuring Array ${red}`);
// destructuring object #
const person = {
    nickname: "top",
    weight: 60,
    address: "bangkok"
};
const { nickname, weight, address } = person;
console.log(`Destructuring Object ${nickname}`);
