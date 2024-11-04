// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
// Collect employee data
const collectEmployees = function () {
  let employeesArray = [];
  let moreEmployees = true;
  while (moreEmployees === true) {
    const employeeFirstName = prompt("What is the employees first name?");
    const employeeLastName = prompt("What is the employees last name?");
    const employeeSalary = prompt("What is the employees salary?");
    moreEmployees = confirm("Would you like to Continue or Cancel?");

    const employee = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: parseFloat(employeeSalary),
    };

    employeesArray.push(employee);
  }
  return employeesArray;
};

function returnNullSalary(x) {
  if (isNaN(x)) {
    return NaN;
  }
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  
  for (let i = 0; i < employeesArray.length; i++){
    console.log(employeesArray[i].salary)
    totalSalary += employeesArray[i].salary
  }
  console.log(totalSalary)
  const averageSalary = (totalSalary/employeesArray.length);
  const averageSalaryLog = `The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`
  console.log(averageSalaryLog)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  // random number
  // between 0 and how many employees you have
  // need a template literal FOR THAT PHRASE
  // needs to incorporate first and last name (employee object)
  // employeesArray[i].firstName
  // employeesArray[i].lastName
  // in this case [i] will = randomNumber utilizing math.random between 0 and employeesArray.length -1
  // dont need a for loop
  // dont be a fucking bitch, youre gonna die anyways
  // remember to assign randomNumber into a variable, use it to find the index, get the proporties 
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
