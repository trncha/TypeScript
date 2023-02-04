// ไม่สามารถ extends มากกว่า 1 class
// ถ้าจะให้สืบทอด class มากกว่า 1 class จะต้องเปลี่ยนไปใช้ interface
interface IReport {
    income:number;
    reportIncome():void
}

abstract class EmployeeInterface {
    protected companyName:string = 'company ABC.co.th'

    constructor(private name:string, private department: string, private salary: number) {}
    public showDetail() {
        console.log(`Inheritance class use method name => ${this.name}, department => ${this.department}, salary => ${this.salary}`);
    }

    get Salary(): number {
        return this.salary
    }

    set Salary(newSalary: number) {
        this.salary = newSalary
    }

    abstract info():void
    /* abstract คือถ้า class แม่สร้างขึ้นมา class ลูกก็ต้องมีด้วย
    class แม่จะระบุว่าให้ลูกๆ เอา class นี้ไปใช้แค่ชื่อ ส่วนรายละเอียด class ลูกต้องเอาไประบุเอง 
    แล้วถ้า class ไม่ใช่ abstract ตัว method ก็ไม่สามารถใช้งาน abstract ได้เช่นกัน มันต้องทำงานคู่กัน */
}

class ITInterface extends EmployeeInterface implements IReport {
    income:number; // publish interface IReport #
    constructor(name:string, salary: number) {
        super(name, "IT", salary)
        this.income = salary
    }

    info():void {
        console.log(`Abstract Method Info => IT`)
    }

    reportIncome():void { // publish interface IReport #
        console.log(`Interface Salary To Year IT => ${this.income * 12}`);
    }
}

class AccountingInterface extends EmployeeInterface implements IReport {
    income:number; // publish interface IReport #
    constructor(name:string, salary: number) {
        super(name, "Sale", salary)
        this.income = salary
    }

    info():void {
        console.log(`Abstract Method Info => Accounting`);
    }

    reportIncome():void { // publish interface IReport #
        console.log(`Interface Salary To Year Accounting => ${this.income * 12}`);
    }
}

const empInterface1 = new ITInterface("e1", 50000)
const empInterface2 = new AccountingInterface("e2", 34000)
empInterface1.reportIncome()
empInterface2.reportIncome()
