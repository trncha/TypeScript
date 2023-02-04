// create array #
const arrUsers:string[] = ["top", "kate"]
arrUsers.push("a")
arrUsers.push("b")

const arrAges:number[] = [1, 2]
arrAges.push(3)

console.log('arrUsers =>', arrUsers )
console.log('arrAges =>', arrAges)

// การเข้าถึง array #
arrUsers[0] = "teranai"
console.log('arrUsers[0] =>', arrUsers[0])
console.log('arrUsers.length =>', arrUsers.length)

for (let i = 0; i < arrUsers.length; i++) {
    console.log(`For Loop arrUsers ${arrUsers[i]}`)
}

arrUsers.forEach((item) => {
    console.log(`Foreach arrUsers ${item}`)
})

// array and type aliases #
type profile = {
    name: string,
    salary: number,
    department: string
}

const arrEmp:profile[] = []
arrEmp.push({ name: "top", salary: 35000, department: "Programmer" })
arrEmp.push({ name: "kate", salary: 50000, department: "Programmer" })

for (let person of arrEmp) {
    console.log(`Forof arrEmp ${person.name}`)
}