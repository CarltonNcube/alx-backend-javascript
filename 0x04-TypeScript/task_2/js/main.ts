// Define an interface for Director
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define an interface for Teacher
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getCoffeeBreak = () : string => 'Getting a coffee break';
  workDirectorTasks = () : string => 'Getting to director tasks';
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

// Function to create an employee based on salary
export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

// Function to check if an employee is a Director
export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

// Function to execute work tasks based on the type of employee
export const executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher ? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
}

// Define a type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
