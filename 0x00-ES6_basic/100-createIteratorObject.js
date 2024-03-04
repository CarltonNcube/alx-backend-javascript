export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  const employeeIterator = {
    [Symbol.iterator]: function() {
      const departments = Object.keys(allEmployees);
      let currentDepartmentIndex = 0;
      let currentEmployeeIndex = 0;

      return {
        next: function() {
          if (currentDepartmentIndex >= departments.length) {
            return { done: true };
          }

          const currentDepartment = departments[currentDepartmentIndex];
          const employeesInDepartment = allEmployees[currentDepartment];

          if (currentEmployeeIndex >= employeesInDepartment.length) {
            currentDepartmentIndex++;
            currentEmployeeIndex = 0;
            return this.next();
          }

          const employee = employeesInDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;

          return { value: employee, done: false };
        }
      };
    }
  };

  return employeeIterator;
}
