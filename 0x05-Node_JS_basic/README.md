# 0x05. NodeJS Basics
## Back-end
### JavaScript, ES6, NodeJS, ExpressJS
### This project focuses on mastering the fundamentals of back-end development using Node.js, Express.js, and ES6 JavaScript.
### WE will embark on creating HTTP servers, handle asynchronous file operations, manage routes, and more.

## Resources
Read or watch:
- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API doc](https://nodejs.org/dist/latest-v12.x/docs/api/process.html)
- [Child process](https://nodejs.org/dist/latest-v12.x/docs/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

### Provided Files
- `database.csv`
- `firstname,lastname,age,field`
- `Johann,Kerbrou,30,CS`
- `Guillaume,Salou,30,SWE`
- `Arielle,Salou,20,CS`
- `Jonathan,Benou,30,CS`
- `Emmanuel,Turlou,40,CS`
- `Guillaume,Plessous,35,CS`
- `Joseph,Crisou,34,SWE`
- `Paul,Schneider,60,SWE`
- `Tommy,Schoul,32,SWE`
- `Katie,Shirou,21,CS`
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

### Tasks
#### 0. Executing basic JavaScript with Node JS
- In the file `0-console.js`, create a function named `displayMessage` that prints the string argument to STDOUT.
- See example usage in `0-main.js`.

#### 1. Using Process stdin
- Create a program named `1-stdin.js`.
- Display the message `Welcome to Holberton School, what is your name?`.
- Accept user input for their name.
- Display `Your name is: INPUT`.
- When the user ends the program, display `This important software is now closing`.
- See example usage in task description.

#### 2. Reading a file synchronously with Node JS
- Using the provided database `database.csv`, create a function `countStudents` in `2-read_file.js`.
- Function should:
  - Accept a file path as an argument.
  - Attempt to read the database file synchronously.
  - Log the number of students in each field with format `Number of students in FIELD: NUM. List: LIST_OF_FIRSTNAMES`.
  - Throw an error if the database is not available.
- See example usage in task description.

#### 3. Reading a file asynchronously with Node JS
- Using the provided database `database.csv`, create a function `countStudents` in `3-read_file_async.js`.
- Function should:
  - Accept a file path as an argument.
  - Attempt to read the database file asynchronously.
  - Return a promise.
  - Log the number of students in each field with format `Number of students in FIELD: NUM. List: LIST_OF_FIRSTNAMES`.
  - Reject the promise with an error if the database is not available.
- See example usage in task description.

#### 4. Create a small HTTP server using Node's HTTP module
- Create a small HTTP server using the http module in `4-http.js`.
- HTTP server should listen on port `1245`.
- Display `Hello Holberton School!` in the page body for any endpoint as plain text.

#### 5. Create a more complex HTTP server using Node's HTTP module
- Create a small HTTP server using the http module in `5-http.js`.
- HTTP server should listen on port `1245`.
- Return plain text:
  - When URL path is `/`, display `Hello Holberton School!` in the page body.
  - When URL path is `/students`, display the list of students from the database file asynchronously.
- See example usage in task description.

#### 6. Create a small HTTP server using Express
- Install Express and create a small HTTP server using Express in `6-http_express.js`.
- HTTP server should listen on port `1245`.
- Display `Hello Holberton School!` in the page body for the endpoint `/`.
- See example usage in task description.

#### 7. Create a more complex HTTP server using Express
- Create a small HTTP server using Express in `7-http_express.js`.
- HTTP server should listen on port `1245`.
- Return plain text:
  - When URL path is `/`, display `Hello Holberton School!` in the page body.
  - When URL path is `/students`, display the list of students from the database file asynchronously.
- See example usage in task description.

#### 8. Organize a complex HTTP server using Express
- Create a full server structure in a directory named `full_server`.
- Use babel-node to allow ES6 functions like import or export.
- Organize the structure of the server with directories for controllers and routes.
- Create a utility function to read the database asynchronously.
- Write controllers for the application and students.
- Write routes for the application.
- Write a server file to reuse everything created above.

