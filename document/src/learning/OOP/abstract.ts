abstract class EmployeeAbstract {
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

class ITAbstract extends EmployeeAbstract {
    constructor(name:string, salary: number) {
        super(name, "IT", salary)
        console.log(`location => ${this.companyName}`);
    }

    // abstract #
    info():void {
        console.log(`Abstract Method Info => IT`)
    }
}

class AccountingAbstract extends EmployeeAbstract {
    constructor(name:string, salary: number) {
        super(name, "Sale", salary)
        console.log(`location => ${this.companyName}`);
    }

    // abstract #
    info():void {
        console.log(`Abstract Method Info => Accounting`);
    }
}

const empAbstact1 = new ITAbstract("c1", 50000)
const empAbstact2 = new AccountingAbstract("c2", 35000)
empAbstact1.info()
empAbstact2.info()

