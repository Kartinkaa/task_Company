const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addPerson = document.getElementById('addPerson');
const calcStats = document.getElementById('calcStats');
const stats = document.getElementById('stats');
const personsList = document.getElementById('personsList');
const salary = document.getElementById('salary');
const showCompany = document.getElementById('showCompany');
let company = new Company();

addPerson.onclick = function () {
    let employee = new Employee(firstName.value.trim(), lastName.value.trim(), age.value, salary.value);
    company.addEmployee(employee);
    firstName.value = lastName.value = age.value = salary.value = '';
};

showCompany.onclick = function () {
    personsList.innerHTML = company.employeesList.reduce((accum, li) => accum + li, '');
};

calcStats.onclick = function () {
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(company.stats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(company.stats);
    }
};