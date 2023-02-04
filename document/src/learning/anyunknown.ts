/* any & unknown # 
    any => การนิยามตัวแปรที่มีชนิดข้อมูลแบบใดก็ได้ 
    unknown => มีลักษณะคล้าย any แต่จะมีการตรวจสอบชนิดข้อมูลก่อนเริ่มงาน 
*/
let firstname:any = "top"
firstname = 25
firstname = true

function formatNumber(num:number) {
    return num.toFixed(2)
}
let amount = 12345
// any #
let money:any = "50.12345"
money = 50.12345
console.log(`any => ${formatNumber(money)}`)
// unknown #
let moneyUnknown:unknown = 50.2233
// moneyUnknown = "test"
// console.log(formatNumber(moneyUnknown)) error จะตรวจสอบชนิดข้อมูลในฟังก์ชั่นก่อนว่าตรงกันไหม
if (typeof moneyUnknown == "number") {
    console.log(`unknown => ${formatNumber(moneyUnknown)}`)
}