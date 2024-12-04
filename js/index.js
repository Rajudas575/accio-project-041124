let employees = [];
let idCounter = 1;

// Function to add employee
function addEmployee() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  const messageElement = document.getElementById("message");

  // Check if fields are filled
  if (name === "" || profession === "" || age === "") {
    messageElement.textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    messageElement.className = "error-message";
  } else {
    // Add new employee to array
    const newEmployee = {
      id: idCounter++,
      name: name,
      profession: profession,
      age: age,
    };
    employees.push(newEmployee);
    messageElement.textContent = "Success : Employee Added!";
    messageElement.className = "success-message";

    // Clear form fields
    document.getElementById("employeeForm").reset();

    // Update employee list UI
    renderEmployeeList();
  }
}

// Function to render the employee list
function renderEmployeeList() {
  const employeeListDiv = document.getElementById("employees");
  employeeListDiv.innerHTML = ""; // Clear previous list

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee-item";
    employeeDiv.innerHTML = `
            <input class="psty" value =' Name: ${employee.name}  Profession: ${employee.profession}  Age: ${employee.age} '/>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button>
        `;
    employeeListDiv.appendChild(employeeDiv);
  });
}

// Function to delete employee by id
function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  renderEmployeeList(); // Re-render the updated list
}
