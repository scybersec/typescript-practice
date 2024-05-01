class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d2", ["shimul"]);

it.addEmployee("Edwin");
it.addEmployee("Neil");

it.describe();

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d1", []);

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
