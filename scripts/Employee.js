class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = +age;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age = +age;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    };
}

class Employee extends Person{
    constructor(firstName, lastName, age, salary) {
        super(firstName, lastName, age);
        this._salary = +salary;
    }

    get salary(){
        return this._salary;
    };

    set salary(salary){
        if (+salary > this._salary){
            this._salary = +salary;
        }
    };

    get listItem(){
        return `<li>${this.fullName()}, age: ${this.age}, salary: ${this.salary}</li>`;
    }
}