let username:unknown
username = "top";
console.log(`pattern as => ${(username as string).toUpperCase()}`)
console.log(`pattern <> => ${(<string>username).toUpperCase()}`)
// toUpperCase() ใช้งานได้ต่อเมื่อตัวแปรเป็น string
// จะเป็นการระบุชนิดข้อมูลของ username ว่าเป็นชนิดข้อมูล string จริงๆ