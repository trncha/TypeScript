"use strict";
// normal class
class Stack {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack = new Stack();
stack.pushElement("top");
stack.pushElement("kate");
// stack.pushElement(2) // error เพราะ parameter รับเป็น string
// stack.pushElement(false)
console.log('Normal Generic Class =>', stack);
// generic class
class StackGeneric {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stackNumber = new StackGeneric();
stackNumber.pushElement(1);
stackNumber.pushElement(2);
console.log('Generic Class =>', stackNumber);
const stackString = new StackGeneric();
stackString.pushElement("top");
stackString.pushElement("kate");
console.log('Generic Class =>', stackString);
