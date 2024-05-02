class Department {
  static fiscalYear = 2024;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Shimul");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d2", ["shimul"]);

it.addEmployee("Edwin");
it.addEmployee("Neil");

it.describe();

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d1", []);

accounting.mostRecentReport = "";
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Brian");
accounting.printEmployeeInformation();
accounting.addReport("Something went wrong");
accounting.printReports();

// console.log(accounting);
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");

// accounting.describe();

// accounting.printEmployeeInformation();

// const accountingCopy = { name: "Accounting 2", describe: accounting.describe };

// accountingCopy.describe();
