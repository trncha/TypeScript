// spread operator #
const words:string[] = ["a", "b", "c"]
const nickNames:string[] = ["top", "kate"]
nickNames.push(...words)
console.log('Spread Operator =>', nickNames)

// rest parameter #
const sumRestOriginal = (a:number, b:number) => {
    return a + b
}
console.log(`Send Argument to Parameter Original => ${sumRestOriginal(10, 20)}`)
// console.log(sumRest(10, 20, 30)) *error เพราะส่ง argument ไปเกิน parameter

const sumRest = (...numbers:number[]) => {
    return numbers.reduce((result, value) => {
        return result + value
    }, 0)
}

console.log(`Rest Parameter ${sumRest(10, 20)}`)
console.log(`Rest Parameter ${sumRest(10, 20, 30)}`)

// destructuring array #
const colors:string[] = ["red", "green", "blue"]
const [red, green, blue] = colors
console.log(`Destructuring Array ${red}`)

// destructuring object #
const person = {
    nickname: "top",
    weight: 60,
    address: "bangkok"
}

const {nickname, weight, address} = person
console.log(`Destructuring Object ${nickname}`)