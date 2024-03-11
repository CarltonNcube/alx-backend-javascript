0x03. ES6 Data Manipulation
Overview
This project delves into data manipulation in JavaScript, utilizing the powerful features introduced in ES6. By completing the tasks outlined below, you'll enhance your understanding of array manipulation, working with typed arrays, and mastering various data structures such as Set, Map, and WeakMap.

Learning Objectives
Upon completing this project, you should be able to:

Effectively utilize map, filter, and reduce functions on arrays
Understand and work with typed arrays
Implement and utilize Set, Map, and WeakMap data structures
Project Details
Resources
Ensure to review the following resources:

Array
Typed Array
Set Data Structure
Map Data Structure
WeakMap

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.

Configuration files
Add the following files to your project directory:

package.json

json
Copy code
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
babel.config.js

javascript
Copy code
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
.eslintrc.js

javascript
Copy code
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
Don’t forget to run npm install when you have the package.json.

Tasks
0. Basic list of objects
Create a function named getListStudents that returns an array of objects. Each object should have three attributes: id (Number), firstName (String), and location (String). The array contains a specific list of students in order.

1. More mapping
Create a function getListStudentIds that returns an array of ids from a list of objects. The function takes an array of objects as an argument.

2. Filter
Create a function getStudentsByLocation that returns an array of objects located in a specific city. It should accept a list of students and a city as parameters.

3. Reduce
Create a function getStudentIdsSum that returns the sum of all student ids. It should accept a list of students as a parameter.

4. Combine
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grades. It should accept a list of students, a city, and new grades as parameters.

5. Typed Arrays
Create a function createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: length, position, and value.

6. Set data structure
Create a function setFromArray that returns a Set from an array. It should accept an array of any kind of elements.

7. More set data structure
Create a function hasValuesFromArray that returns a boolean if all the elements in the array exist within the set. It should accept a Set and an array as arguments.

8. Clean set
Create a function cleanSet that returns a string of all the set values that start with a specific string. It should accept a Set and a startString as arguments.

9. Map data structure
Create a function groceriesList that returns a map of groceries with specific items and quantities.

10. More map data structure
Create a function updateUniqueItems that returns an updated map for all items with an initial quantity at 1. It should accept a map as an argument.
