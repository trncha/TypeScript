function merge<T,U>(param1: T, param2: U) {
    // param1 รับ data type จากตัวแปร T มา
    // param2 รับ data type จากตัวแปร U มา
    
    console.log(`Multiple Generic Function => ${param1} - ${param2}`);
}

merge<string, boolean>("top", true)
merge<boolean, boolean>(true, false)


function mergeProduct<T,U>(param1: T, param2: U) {
    return {
        ...param1,
        ...param2
    }
}
const product = { name: "เสื้อ", price: 500 }
const description = { colors: ["white", "red", "blue"] }

console.log(mergeProduct(product, description));
// ไม่ต้องใส่ <data type> ก็ได้ เช่น mergeProduct<object, object>(product, description)