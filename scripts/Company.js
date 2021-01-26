class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee = function (employee) {
        this._employees.push(employee);
    };

    get employeesList() {
        return this._employees.map(employee => employee.listItem);
    }

    get size() {
        return this._employees.length;
    }

    get totalSalary() {
        return this._employees.reduce((accum, empl) => accum + empl.salary, 0);
    }

    get avgSalary() {
        return this.totalSalary / this.size;
    }

    get agesList(){
        return this._employees.map(empl => empl.age);
    }

    get minAge() {
        return Math.min(...this.agesList);
    }

    get maxAge() {
        return Math.max(...this.agesList);
    }

    get avgAge() {
        return this.agesList.reduce((a, b) => a + b, 0) / this._employees.length;
    }

    get stats() {
        let divStats = document.createElement('div');
        let h3salary = document.createElement('h3');
        h3salary.appendChild(document.createTextNode(`Total salary: ${this.totalSalary}`));
        let h3avg = document.createElement('h3');
        h3avg.appendChild(document.createTextNode(`Average salary: ${this.avgSalary}`));
        let h3size = document.createElement('h3');
        h3size.appendChild(document.createTextNode(`Size: ${this.size}`));
        let h3minAge = document.createElement('h3');
        h3minAge.appendChild(document.createTextNode(`Min age: ${this.minAge}`));
        let h3maxAge = document.createElement('h3');
        h3maxAge.appendChild(document.createTextNode(`Max age: ${this.maxAge}`));
        let h3avgAge = document.createElement('h3');
        h3avgAge.appendChild(document.createTextNode(`Average age: ${this.avgAge}`));
        divStats.appendChild(h3salary);
        divStats.appendChild(h3avg);
        divStats.appendChild(h3size);
        divStats.appendChild(h3minAge);
        divStats.appendChild(h3maxAge);
        divStats.appendChild(h3avgAge);
        return divStats;
    }
}