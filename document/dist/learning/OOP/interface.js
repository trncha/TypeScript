"use strict";
class EmployeeInterface {
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
class ITInterface extends EmployeeInterface {
    constructor(name, salary) {
        super(name, "IT", salary);
        this.income = salary;
    }
    info() {
        console.log(`Abstract Method Info => IT`);
    }
    reportIncome() {
        console.log(`Interface Salary To Year IT => ${this.income * 12}`);
    }
}
class AccountingInterface extends EmployeeInterface {
    constructor(name, salary) {
        super(name, "Sale", salary);
        this.income = salary;
    }
    info() {
        console.log(`Abstract Method Info => Accounting`);
    }
    reportIncome() {
        console.log(`Interface Salary To Year Accounting => ${this.income * 12}`);
    }
}
const empInterface1 = new ITInterface("e1", 50000);
const empInterface2 = new AccountingInterface("e2", 34000);
empInterface1.reportIncome();
empInterface2.reportIncome();
