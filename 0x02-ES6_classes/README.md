ES6 Classes
Overview
This project focuses on Object-Oriented Programming (OOP) principles in JavaScript, specifically utilizing ES6 classes. By completing the tasks outlined below, you'll gain a deeper understanding of defining classes, adding methods, using static methods, extending classes, and employing metaprogramming techniques.

Setup
Install NodeJS 12.11.x
bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.

Configuration Files
Add the following configuration files to your project directory:

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
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
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



Task

1. **You used to attend a place like this at some point**
   - Implement a class named ClassRoom:
     - Prototype: `export default class ClassRoom`
     - It should accept one attribute named `maxStudentsSize (Number)` and assigned to `_maxStudentsSize`

2. **Let's make some classrooms**
   - Import the ClassRoom class from `0-classroom.js`.
   - Implement a function named `initializeRooms`. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).

3. **A Course, Getters, and Setters**
   - Implement a class named HolbertonCourse:
     - Constructor attributes: `name (String)`, `length (Number)`, `students (array of Strings)`
     - Make sure to verify the type of attributes during object creation
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - Implement a getter and setter for each attribute.

4. **Methods, static methods, computed methods names..... MONEY**
   - Implement a class named Currency:
     - Constructor attributes: `code (String)`, `name (String)`
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - Implement a getter and setter for each attribute.
     - Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

5. **Pricing**
   - Import the class Currency from `3-currency.js`.
   - Implement a class named Pricing:
     - Constructor attributes: `amount (Number)`, `currency (Currency)`
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - Implement a getter and setter for each attribute.
     - Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
     - Implement a static method named `convertPrice`. It should accept two arguments: `amount (Number)`, `conversionRate (Number)`. The function should return the amount multiplied by the conversion rate.

6. **A Building**
   - Implement a class named Building:
     - Constructor attributes: `sqft (Number)`
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - Implement a getter for each attribute.
     - Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
     - If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`.

7. **Inheritance**
   - Import Building from `5-building.js`.
   - Implement a class named SkyHighBuilding that extends from Building:
     - Constructor attributes: `sqft (Number)` (must be assigned to the parent class Building), `floors (Number)`
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - Implement a getter for each attribute.
     - Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

8. **Airport**
   - Implement a class named Airport:
     - Constructor attributes: `name (String)`, `code (String)`
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - The default string description of the class should return the airport code (example below).

9. **Primitive - Holberton Class**
   - Implement a class named HolbertonClass:
     - Constructor attributes: `size (Number)`, `location (String)`
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
     - When the class is cast into a Number, it should return the size.
     - When the class is cast into a String, it should return the location.

10. **Vroom**
    - Implement a class named Car:
      - Constructor attributes: `brand (String)`, `motor (String)`, `color (String)`
      - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
      - Add a method named `cloneCar`. This method should return a new object of the class.

