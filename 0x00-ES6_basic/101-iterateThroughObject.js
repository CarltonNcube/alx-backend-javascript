// Iterates through the report object with iterator and returns a string of employee names separated by '|'.
export default function iterateThroughObject({ allEmployees }) {
  const employeeNames = Object.values(allEmployees).flatMap(departmentEmployees => departmentEmployees);
  return employeeNames.join(' | ');
}
