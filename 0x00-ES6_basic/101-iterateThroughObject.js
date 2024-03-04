export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = reportWithIterator.allEmployees;
  const employeeNames = Object.values(allEmployees).flatMap(departmentEmployees => departmentEmployees);
  return employeeNames.join(' | ');
}
