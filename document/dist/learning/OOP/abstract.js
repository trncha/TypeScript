"use strict";
class EmployeeAbstract {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
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
class ITAbstract extends EmployeeAbstract {
    constructor(name, salary) {
        super(name, "IT", salary);
        console.log(`location => ${this.companyName}`);
    }
    // abstract #
    info() {
        console.log(`Abstract Method Info => IT`);
    }
}
class AccountingAbstract extends EmployeeAbstract {
    constructor(name, salary) {
        super(name, "Sale", salary);
        console.log(`location => ${this.companyName}`);
    }
    // abstract #
    info() {
        console.log(`Abstract Method Info => Accounting`);
    }
}
const empAbstact1 = new ITAbstract("c1", 50000);
const empAbstact2 = new AccountingAbstract("c2", 35000);
empAbstact1.info();
empAbstact2.info();
