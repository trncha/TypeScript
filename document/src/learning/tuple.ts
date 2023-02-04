// tuple #
const pointTuple:[number, number, string] = [10, 20, "top"]
pointTuple[0] = 30
console.log('Tuple', pointTuple)
console.log('Tuple pointTuple[2]', pointTuple[2])

const goodStatus:[number, string] = [200, "OK"]
console.log('Tuple goodStatus', goodStatus)

// tuple label #
const goodStatusLabel:[status:number, message:string] = [200, "OK"]
console.log('Tuple goodStatusLabel', goodStatusLabel)
console.log('Tuple goodStatusLabel[0]', goodStatusLabel[0])
// console.log('Tuple goodStatusLabel[status]', goodStatusLabel[status]) *error

// create type tuple #
type HttpStatusCode = [number, string]
const notFound:HttpStatusCode = [404, "Not Found"]
const badRequest:HttpStatusCode = [400, "Bad Request"]
console.log('Type Tuple notFound', notFound)
console.log('Type Tuple badRequest', badRequest)