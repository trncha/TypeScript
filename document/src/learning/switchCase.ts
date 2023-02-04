let service:number = 5;
let resultSwitch:string;

switch(service) {
    case 1: 
        resultSwitch = "สอบถามยอดเงินคงเหลือในบัญชี"
        break;
    case 2:
        resultSwitch = "ฝากเงิน"
        break;
    case 3:
        resultSwitch = "ถอนเงิน"
        break;
    default:
        resultSwitch = "หมายเลขบริการไม่ถูกต้อง"
        break;
}
console.log(`result => ${resultSwitch}`)