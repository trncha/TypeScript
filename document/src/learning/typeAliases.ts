// type aliases (Custom Type) #
type Employee = {
    id: number,
    name: string,
    salary: number,
    phone: string
}

let emp1:Employee = { id: 1, name: "top", salary: 25000, phone: "02-xxxxxxxx" }
emp1.name = "A"
emp1.salary = 35000
console.log('type aliases (Custom Type) =>', emp1)

// optional properties && readonly modifier #
type Customer = {
    readonly id: number,
    name: string,
    salary: number,
    phone?: string
}
let cus1:Customer = { id: 1, name: "A", salary: 55000, phone: "02-xxxxxxxx" }
let cus2:Customer = { id: 2, name: "B", salary: 75000 }
console.log('optional properties && readonly modifier =>', cus1)
// cus2.id = 300 *error เพราะ property id ถูก readonly modifier
console.log('optional properties && readonly modifier =>', cus2)
