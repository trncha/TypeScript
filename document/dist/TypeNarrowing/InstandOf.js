"use strict";
class UserInstandOf {
    constructor(username) {
        this.username = username;
    }
}
class EmployeeInstandOf {
    constructor(name) {
        this.name = name;
    }
}
function printObject(obj) {
    if (obj instanceof EmployeeInstandOf) {
        // instanceof เช็คว่า object ที่สร้างมานี้ว่ามาจาก class ใด
        console.log("InstandOf Employee");
    }
    else {
        console.log("InstandOf User");
    }
}
printObject(new UserInstandOf("top"));
