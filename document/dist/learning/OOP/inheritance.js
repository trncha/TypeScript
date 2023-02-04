"use strict";
class Company {
    // เก็บ array ของ class EmployeeInherit
    static showData() {
        // การที่ method จะเรียกใช้งาน property ที่เป็น static method ตัวนั้นต้องเป็น static ด้วย ถึงจะใช้งานร่วมกันได้
        console.log("Static Method showData =>" + this.location);
        for (const person of this.employeeList) {
            // console.log("Static Method showData for of =>", person);
            person.showDetail();
            // property employeeList เก็บ array ของ class EmployeeInherit จึงสามารถเรียก function showDetail() จาก class EmployeeInherit ได้
        }
    }
}
// static property object #
Company.location = "111/111 sukumvit road bangkok";
Company.founder = "Elon Musk";
// การใส่ static จะเป็นการบอกว่าไม่ผ่านกระบวนการสร้าง object
// static property array #
Company.employeeList = [];
class EmployeeInherit {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        // protected modifier #
        this.companyName = 'company ABC.co.th';
    }
    showDetail() {
        console.log(`Inheritance class use method name => ${this.name}, department => ${this.department}, salary => ${this.salary}`);
    }
    get Salary() {
        return this.salary;
    }
    set Salary(newSalary) {
        this.salary = newSalary;
    }
}
class IT extends EmployeeInherit {
    constructor(name, salary) {
        super(name, "IT", salary);
        /* ส่งค่าจากลูกไปหาแม่ (name, department, salary) จะใช้ keyword super()
        ต้องใส่ parameter ใน super() ให้เท่ากับจำนวน property constructure ของ EmployeeInherit ด้วย */
        console.log(`location => ${this.companyName}`);
        /* การเรียกใช้งานสมาชิก protected companyName จาก class EmployeeInherit (การส่งค่าจากแม่ไปหาลูก) */
    }
}
class Accounting extends EmployeeInherit {
    constructor(name, salary) {
        super(name, "Sale", salary);
        console.log(`location => ${this.companyName}`);
    }
}
// คือการสืบทอดคุณสมบัติจาก class EmployeeInherit ไปยัง IT และ Accounting (case ตอนยังไม่มี constructure and super()) #
// const empInherit1 = new IT("top", "IT", 35000)
// const empInherit2 = new Accounting("kate", "sale", 40000)
// console.log('Inheritance class', empInherit1);
// console.log('Inheritance class', empInherit2);
// empInherit1.showDetail()
const empInherit3 = new IT("B1", 50000);
const empInherit4 = new Accounting("B2", 60000);
empInherit3.showDetail();
empInherit4.showDetail();
console.log(Company.location); // เรียกผ่าน class Company ได้เลย และเข้าถึงได้แต่ property ที่เป็นรูปแบบ static
console.log(Company.founder);
const empInherit5 = new IT("B3", 50000);
const empInherit6 = new Accounting("B4", 45000);
Company.employeeList.push(empInherit5); // เรียกผ่าน class Company ได้เลย และเข้าถึงได้แต่ property ที่เป็นรูปแบบ static
Company.employeeList.push(empInherit6);
console.log(Company.employeeList);
Company.showData();
