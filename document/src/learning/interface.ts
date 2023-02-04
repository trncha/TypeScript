/* 
    Interface => เหมาะกับการนำไปสร้าง Library ให้คนที่ใช้งานสามารถขยายขอบเขต property ที่อยู่ใน Interface ของเราได้นั่นเอง
    Type Aliases => ไม่สามารถที่จะนำไปสร้าง Library ได้เนื่องจากว่ามันไม่มีคุณสมบัติในการขยายขอบเขต property เนื่องจากไม่สามารถใช้ในส่วนของชื่อ type ซ้ำกันได้ตอนที่เพิ่ม property นั่นเอง
    Intersection Interface = extends
    Intersection Type Aliases = &
*/
// extended interface #
interface Job {
    title: string,
    income: number
}

interface Contact {
    address: string,
    phone: string
}

interface Person extends Job, Contact {
    name: string,
    age: number,
    gender: string
}

let personInterface:Person;
// ถ้าประกาศ personInterface ด้วย const ต้องมีค่าเริ่มต้นเสมอ
personInterface = {
    name: "top",
    age: 25,
    gender: "male",
    title: "programmer",
    income: 35000,
    address: "bangkok",
    phone: "02-xxx-xxxx"
}
// ต้องประกาศให้ครบทุก property ด้วย
console.log('Interface & Extended', personInterface)

// readonly & optional & method #
interface Animal {
    name: string,
    height ?: number,
    readonly weight: number,
    info:() => void;
    // ตอนนำ interface Animal มาใช้ต้องมีการสร้าง method info ขึ้นมา และกำหนดรายละเอียดข้างใน
}

let animal1:Animal = { 
    name: "ant", 
    weight: 28,
    info() {
        console.log(`Interface method Last Data = ${new Date().toLocaleString()}`)
    },
}
// animal1.weight = 50 *error เพราะ property weight ใน interface animal เป็น readonly
animal1.info()

// intersection type สามารถทำงานได้ทั้ง interface และ type aliases
type People = Job & Contact
let people1:People = {
    title: "programmer",
    income: 35000,
    address: "bangkok",
    phone: "02-xxx-xxxx"
}
console.log('Intersection', people1)

// ความแตกต่าง Interface กับ Type Aliases #
// Type Aliases #
type FruitTypeAliases = {
    name: string,
    color: string
}

// type FruitTypeAliases = {
//     price: number
// } *error เพราะว่าไม่มีคุณสมบัติในการขยายขอบเขต property เป็นข้อจำกัดของ type aliases

// Interface #
interface FruitInterface {
    name: string,
    color: string
}

interface FruitInterface {
    price: number
}
