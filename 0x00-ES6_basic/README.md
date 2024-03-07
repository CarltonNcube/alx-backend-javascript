ES6 Basics Overview
This project focuses on mastering ES6 (ECMAScript 2015) basics and JavaScript programming fundamentals. By completing the tasks outlined below, you'll gain a deeper understanding of ES6 features and their applications in JavaScript development. The project aims to enhance your skills in software linting, ES6 syntax, and programming concepts like block-scoped variables, arrow functions, default parameters, rest parameters, string templating, object creation, iterators, and for-of loops.

Concepts
This project covers the following key concepts:

JavaScript programming fundamentals
Software Linter (ESLint)
ECMAScript 6 (ES6) features:
Statements and declarations
Arrow functions
Default parameters
Rest parameter
Iterables and Iterators
Setup
Install NodeJS 12.11.x:
bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
Install Jest, Babel, and ESLint:
Navigate to your project directory and run:

bash
Copy code
npm install
Configuration Files
Add the following configuration files to your project directory:

package.json
babel.config.js
.eslintrc.js
Tasks
Task 0: Const or let? Modify functions taskFirst and taskNext to instantiate variables using const and let respectively.

Task 1: Block Scope Modify variables inside the function taskBlock to prevent them from being overwritten within the conditional block.

Task 2: Arrow Functions Rewrite the function getNeighborhoodsList using ES6's arrow function syntax.

Task 3: Parameter Defaults Condense the internals of the function getSumOfHoods to one line using default parameter values.

Task 4: Rest Parameter Syntax Modify the function returnHowManyArguments to return the number of arguments passed to it using the rest parameter syntax.

Task 5: Spread Syntax Using spread syntax, concatenate two arrays and each character of a string in one line within the concatArrays function.

Task 6: Template Literals Rewrite the return statement in getSanFranciscoDescription to use a template literal for better readability and flexibility.

Task 7: Object Property Value Shorthand Modify the function getBudgetObject to simplify the budget object's property assignments.

Task 8: Computed Property Names Rewrite the function getBudgetForCurrentYear to use ES6 computed property names for property assignment.

Task 9: ES6 Method Properties Rewrite the function getFullBudgetObject to utilize ES6 method properties in the fullBudget object.

Task 10: For...of Loops Rewrite the function appendToEachArrayValue using ES6's for...of operator instead of for...in.

Task 11: Iterator Implement the function createEmployeesObject to return an object mapping department names to arrays of employees.

Task 12: Report Object Write the function createReportObject to return an object containing all employees grouped by department and a method to get the number of departments.




