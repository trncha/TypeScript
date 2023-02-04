// union type #
let ageUnion:number | string | boolean
ageUnion = 50
ageUnion = "top"
ageUnion = true
console.log(`Union Type ${ageUnion}`)

// union type & type aliases #
type Point = {
    x: number,
    y: number
}

type Position = {
    lat: number,
    long: number
}

let coordinates: Point | Position
// coordinates = {
//     x: 1111,
//     y: 2222
// }
coordinates = {
    lat: 10, 
    long: 20,
}
// ไม่สามารถเอา type Point กับ Position มารวมในตัวแปรได้
console.log('Union Type & Type Aliases', coordinates)

type Message = string | string[]
let text:Message = "top"
text = ["top", "kate"]
console.log('Union Type & Type Aliases', text)

// union type & function #
const sayHiUnion = (person: string | number | string[]):void => {
    if (typeof person === 'string' || typeof person === 'number') {
        console.log(`Union Type & Function String | Number ${person}`);
    }else {
        person.forEach(element => {
            console.log(`Union Type & Function Array ${element}`);
        });
    }
}
sayHiUnion("top")
sayHiUnion(50000)
sayHiUnion(["top", "kate"])

// literals type #
type Role = "admin" | "User"
let permission:Role = "admin"
permission = "User"
// permission = "Editor" *error เพราะ value Editor ไม่ได้ถูกนิยามใน type Role

console.log(`Literals Type ${permission}`)

// literals type & function #
const confirmDialog = (answer: "Y" | "N"):void => {
    console.log(`Literals Type & Function ${answer}`)
}
confirmDialog("Y")
confirmDialog("N")
// confirmDialog("Cancel") *error เพราะ value Cancel ไม่ได้ถูกนิยามใน parameter answer ของ function confirmDialog

// template literals type #
type Vertical = "top" | "middle" | "bottom"
type Horizontal = "left" | "center" | "right"

// type Alignment = "top-left" | "top-center" | "top-right" | {...} *Example การจับคู่ระหว่าง Vertical กับ Horizontal
type Alignment = `${Vertical} - ${Horizontal}`