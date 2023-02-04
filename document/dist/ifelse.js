"use strict";
let amountIfElse = 50;
let result;
/* Classic
if (amountIfElse % 2 == 0) {
    result = "เลขคู่"
}else {
    result = "เลขคี่"
} */
// Ternary Operator
result = (amountIfElse % 2 == 0) ? "เลขคู่" : "เลขคี่";
console.log(`result => ${result}`);
