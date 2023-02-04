"use strict";
function overloadingV1(name) {
    if (!name) {
        return `Function Overloading ver1`;
    }
    if (typeof name == "string") {
        return `Function Overloading Ver1 ${name}`;
    }
    throw new Error("data type incorrect");
}
console.log(overloadingV1());
console.log(overloadingV1("top"));
function overloadingV2(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("data type incorrect");
}
console.log(`Function Overloading Ver2 ${overloadingV2(100, 200)}`);
console.log(`Function Overloading Ver2 ${overloadingV2("100", "400")}`);
