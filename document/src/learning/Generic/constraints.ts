// การกำหนดข้อบังคับในการจัดการชนิดข้อมูล
function mergeConstraints<T extends object,U extends object>(param1: T, param2: U) {
    return {
        ...param1,
        ...param2
    }
}

const productConstraints = { name: "เสื้อ", price: 500 }
const descriptionConstraints = { colors: ["white", "red", "blue"] }

console.log('Generic Constraints =>', mergeConstraints(productConstraints, descriptionConstraints));
// console.log('Generic Constraints =>', mergeConstraints(false, true)); *error เพราะ mergeConstraints รับเป็น object ทั้งคู่
