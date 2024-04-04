// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const allEmployees = [];
  let decison = true;
  while (decison) {
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    let salary = prompt("Enter Salary");
    if (isNaN(salary) || salary === null) {
      salary = 0;
    }
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    allEmployees.push(employee);
    decison = confirm("Employee saved. Add another Employee?");
   

  }
  return allEmployees;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  totalSalary = 0;
  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  alert((`There are ${employeesArray.length} employees. The average salary is ${averageSalary.toFixed(2)}` ))
  console.log(`The average salary is $ ${averageSalary}` );
  console.log(`There are ${employeesArray.length} employees`)
  return averageSalary.toFixed(2);
}

  // TODO: Select and display a random employee
const getRandomEmployee = function (employeesArray) {
  let getRandomEmployee = Math.floor(Math.random() * employeesArray.length);
  return getRandomEmployee.toFixed(2);
  alert(`Congrats to ${empoyeeArray[randomEmployee].fristname} ${employeeArray[randomEmployee].lastName} for being randomly selected`);
  console.log(getRandomEmployee);
}




/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

