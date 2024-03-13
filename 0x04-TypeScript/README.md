TypeScript

Project Overview
This project focuses on developing TypeScript scripts to cover various tasks that demonstrate understanding of TypeScript fundamentals and concepts such as basic types, interfaces, classes, functions, generic types, namespaces, declaration merging, and more. It aims to enhance proficiency in TypeScript programming and working with the DOM.

Configuration Files
Please use these files for the following tasks

package.json
Click to show/hide file contents

{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}

.eslintrc.js
Click to show/hide file contents

module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};

tsconfig.json
Click to show/hide file contents

{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}

webpack.config.js
Click to show/hide file contents

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

Tasks
0: Creating an interface for a student
Create a directory named task_0.
Copy the provided configuration files into the task_0 directory.
Write TypeScript code in task_0/js/main.ts to define an interface named Student.
Create two student objects and store them in an array named studentsList.
Use Vanilla JavaScript to render a table and populate it with the student data.

1: Let's build a Teacher interface
Create a directory named task_1.
Copy the provided configuration files into the task_1 directory.
Write TypeScript code in task_1/js/main.ts to define a Teacher interface.
Implement the required functionality for initializing a teacher object with additional dynamic attributes.

2: Extending the Teacher class
Write TypeScript code in task_1/js/main.ts to define an interface named Directors that extends Teacher.
Implement the required functionality to create a director object.

3: Printing teachers
Write TypeScript code in task_1/js/main.ts to define a function named printTeacher.
Implement the required functionality to print the first letter of the first name and the full last name of a teacher.

4: Writing a class
Write TypeScript code in task_1/js/main.ts to define a class named StudentClass.
Implement the required methods workOnHomework and displayName.

5: Advanced types Part 1
Write TypeScript code in task_2/js/main.ts to define interfaces and classes for Directors and Teachers.
Implement the required functionality for each class.

6: Creating functions specific to employees
Write TypeScript code in task_2/js/main.ts to define functions isDirector and executeWork.
Implement the required functionality to determine the type of employee and execute their tasks accordingly.

7: String literal types
Write TypeScript code in task_2/js/main.ts to define a string literal type named Subjects.
Implement the required function teachClass to return the appropriate string based on the subject.

8: Ambient Namespaces
Create a directory named task_3.
Copy the provided configuration files into the task_3 directory.
Write TypeScript code in task_3/js/interface.ts to define types and interfaces.
Write TypeScript code in task_3/js/main.ts to import and use the crud.js library.

9: Namespace & Declaration merging
Create a directory named task_4.
Copy the provided configuration files into the task_4 directory.
Write TypeScript code in task_4/js/subjects to define interfaces and classes within the Subjects namespace.

10: Update task_4/js/main.ts
Write TypeScript code in task_4/js/main.ts to create constants for Cpp, Java, and React subjects.
Implement the required functionality to set teachers and print requirements.

11: Brand convention & Nominal typing
Create a directory named task_5.
Copy the provided configuration files into the task_5 directory.
Write TypeScript code in task_5/js/main.ts to define interfaces and functions for major and minor credits.
Implement the required functionality to sum credits.
