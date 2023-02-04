// issue before generic #
// normal function การตัดข้อมูล array number
const getElementNumber = (arr: number[], count: number) => {
    return arr.slice(arr.length - count)
}

// normal function การตัดข้อมูล array string
const getElementString = (arr: string[], count: number) => {
    return arr.slice(arr.length - count)
}

// normal function การตัดข้อมูล array boolean
const getElementBoolean = (arr: boolean[], count: number) => {
    return arr.slice(arr.length - count)
}

const myNum:number[] = [10, 20, 30, 40]
const myString:string[] = ["top", "kate", "B1", "B2"]
const myBool:boolean[] = [true, true, false, true]

console.log('Issue Before Generic =>', getElementNumber(myNum, 2));
console.log('Issue Before Generic =>', getElementString(myString, 2));
console.log('Issue Before Generic =>', getElementBoolean(myBool, 2));

// generic function เป็นการสร้าง function จัดการชนิดข้อมูลต่างกัน
function getElementGeneric<T>(arr: T[], count: number) {
    // T คือ type ของชนิดข้อมูลที่ส่งเข้ามาว่าเป็นอะไร
    return arr.slice(arr.length - count)
}

console.log('Generic Function', getElementGeneric<number>(myNum, 2));
console.log('Generic Function', getElementGeneric<string>(myString, 2));
console.log('Generic Function', getElementGeneric<boolean>(myBool, 2));



