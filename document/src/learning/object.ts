// สร้าง object แบบไม่ระบุชนิดข้อมูลให้ property #
const person1 = {
    name: "top",
    age: 25
}

// สร้าง object แบบระบุชนิดข้อมูลให้ property #
const person2: { name:string, age:number } = { name: "top", age: 25 }
const position: { lat:number, long:number } = { lat: 30, long: 50 }

// ฟังก์ชั่นรับค่า object #
const showDetail1 = (data:{ name:string, age: number }):void => {
    console.log(`name => ${data.name} ,age => ${data.age}`)
}
showDetail1(person2)

// ฟังก์ชั่น return object #
const randomPosition = ():{ lat:number, long:number } => {
    return {
        lat: Math.random(),
        long: Math.random()
    }
}
console.log(randomPosition())

// excess properties check #
const showDetail2 = (data:{ name:string, age: number }):void => {
    console.log(`excess properties check name => ${data.name} ,age => ${data.age}`)
}
// showDetail2({ name: "top", age: 25, address: "bangkok" }) *error excess properties check ส่ง argument object ให้เท่ากับ parameter รับ object
showDetail2({ name: "top", age: 25})