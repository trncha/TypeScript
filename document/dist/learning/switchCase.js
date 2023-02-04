"use strict";
let service = 5;
let resultSwitch;
switch (service) {
    case 1:
        resultSwitch = "สอบถามยอดเงินคงเหลือในบัญชี";
        break;
    case 2:
        resultSwitch = "ฝากเงิน";
        break;
    case 3:
        resultSwitch = "ถอนเงิน";
        break;
    default:
        resultSwitch = "หมายเลขบริการไม่ถูกต้อง";
        break;
}
console.log(`result => ${resultSwitch}`);
