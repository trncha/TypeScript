class UserInstandOf {
    constructor(public username: string) {}
}

class EmployeeInstandOf {
    constructor(public name: string) {}
}

function printObject(obj: EmployeeInstandOf|UserInstandOf) {
    if (obj instanceof EmployeeInstandOf) {
    // instanceof เช็คว่า object ที่สร้างมานี้ว่ามาจาก class ใด
        console.log("InstandOf Employee");
    }else {
        console.log("InstandOf User");
    }
}

printObject(new UserInstandOf("top"))