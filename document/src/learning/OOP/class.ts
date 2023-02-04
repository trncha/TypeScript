// class #
class EmployeeClass {

    // property #
    name: string;
    readonly department: string;
    private salary: number;

    // access modifier #
    public age: number;

    // constructor #
    constructor (name:string, department: string, salary: number, age: number) {
        this.name = name
        this.department = department
        this.salary = 40000
        // ต่อให้ salary เป็น private ก็สามารถแก้ไขข้อ มูลได้ เพราะ access modifier ที่เป็น private จะมีเฉพาะ class ของมันเท่านั้นที่สามารถเข้าไปแก้ไข อ่านดูข้อมูลได้
        this.age = age
    }

    // method
    public showDetail () {
        console.log(`Method Public ShowDetail name => ${this.name}, department => ${this.department}, salary => ${this.salary}`);
    }

    // getter & setter เอาไว้เข้าถึงข้อมูลที่เป็น private
    // getter # คือ method ที่สำหรับดึงข้อมูลจาก property ที่เราสนใจว่าเก็บข้อมูลอะไรไว้ข้างใน
    get Salary(): number {
    // Or name function getSalary
        return this.salary
    }

    // setter # คือ method ที่สำหรับเปลี่ยนแปลงค่าใน property ที่เราสนใจ
    set Salary(newSalary: number) {
    // Or name function setSalary
        this.salary = newSalary
    }
}
// object #
const empObj1 = new EmployeeClass("top", "Programmer", 40000, 25)
// empObj1.name = "kate"
// empObj1.age = 26
// empObj1.salary = 40000 *error เพราะตัว property เป็น access modifier [private]
// empObj1.department = "Sale" *error เพราะ property department ใน EmployeeClass เป็น readonly
// console.log('Create Property', empObj1);
empObj1.showDetail()

const empObj2 = new EmployeeClass("kate", "Programmer", 50000, 19)
// empObj2.setSalary(70000)
empObj2.Salary = 70000 // setter
empObj2.showDetail()
// console.log('Getter', empObj2.getSalary());
console.log('Getter', empObj2.Salary);


// การลดรูป สร้าง object จาก CustomerClass แล้วระบุข้อมูลในพื้นที่ของ constructure (แตกต่างจาก EmployeeClass ที่ต้องประกาศ property ภายใน class)
class CustomerClass {
    constructor (private name: string, private department: string, private salary: number) {}
}




