for(let count:number = 1; count <= 10; count++) {
    console.log(`forloop count 1-10 => ${count}`)
}

let users:string[] = ["top", "kate"]
for(let i:number = 0; i < users.length; i++) {
    console.log(`forloop users => ${users[i]}`)
}

// foreach #
users.forEach((element) => {
    console.log(`foreach users => ${element}`)
})