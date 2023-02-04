"use strict";
// type of ใน javascript
function truncateTypeOf(value, length) {
    // typeOfGuards
    if (typeof value === "number") {
        return value.toString().slice(0, length);
    }
    return value.slice(0, length);
}
console.log('Type Of Guards String =>', truncateTypeOf("top", 2));
console.log('Type Of Guards Number =>', truncateTypeOf(12345, 2));
