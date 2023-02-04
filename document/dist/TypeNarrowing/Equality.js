"use strict";
/* function compareValue ไว้ใช้สำหรับเช็คค่าว่าเท่ากันหรือไม่
Equality Narrowing เช็คค่าที่เก็บอยู่ในตัวแปร */
function compareValue(x, y) {
    // === คิด case data type
    // == ไม่คิด case data type เช็คแค่ value
    if (x === y) {
        console.log('Equality Narrowing Equal');
    }
    else {
        console.log('Equality Narrowing Not Equal');
    }
}
compareValue(3, 3);
compareValue(3, "3");
