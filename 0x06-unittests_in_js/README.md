# 0x06. Unit Tests in JavaScript

This project aims to provide comprehensive guidance and hands-on practice in writing unit tests for JavaScript applications using Mocha, Chai, and Sinon libraries. Through a series of tasks, you'll learn how to effectively test various aspects of JavaScript code, including basic functions, integration with external APIs, handling async operations, and more.

## Resources
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai, and SinonJS](https://dev.to/nedsoft/testing-nodejs-express-api-with-mocha-chai-90ae)


## Tasks

### 0. Basic Test with Mocha and Node Assertion Library
In this task, you will:
- Install Mocha using npm.
- Set up a script in package.json to run Mocha tests.
- Implement a function `calculateNumber` in a file named `0-calcul.js` that rounds two numbers and returns their sum.
- Write test cases for the `calculateNumber` function in a file named `0-calcul.test.js` using Node's assert library.
- Ensure that all tests pass without warnings.

### 1. Combining Descriptions
Here, you will:
- Enhance the `calculateNumber` function to support different types of operations (SUM, SUBTRACT, DIVIDE).
- Write test cases for the enhanced function using Node's assert library.
- Organize your test cases using `describe`.
- Ensure that all tests pass without warnings.

### 2. Basic Test Using Chai Assertion Library
This task involves:
- Installing Chai using npm.
- Rewriting the test suite for the `calculateNumber` function using Chai's `expect`.
- Ensuring that all tests pass without warnings.

### 3. Spies
You will:
- Implement a utility function `sendPaymentRequestToApi` and a corresponding test suite.
- Use Sinon to create a spy and verify the behavior of the utility function.

### 4. Stubs
Here, you will:
- Stub the `calculateNumber` function to always return a specific value.
- Verify that the stub is called with the correct arguments.
- Add a spy to verify the console output.

### 5. Hooks
In this task, you will:
- Implement hooks to execute setup and teardown tasks before and after tests.
- Ensure that the console output is correct and the spy is called only once.

### 6. Async Tests with Done
You will:
- Implement an asynchronous function `getPaymentTokenFromAPI`.
- Write a test suite for the asynchronous function using the `done` callback.

### 7. Skip
This task involves:
- Using the `skip` function to skip specific tests in a suite.
- Ensuring that all other tests pass without modifying or fixing the failing test.

### 8. Basic Integration Testing
Here, you will:
- Create a simple Express server with an endpoint.
- Write an integration test suite to verify the behavior of the server.
- Use the `request` module to interact with the server.

### 9. Regex Integration Testing
You will:
- Add a new endpoint to the Express server that uses regex for route validation.
- Write test cases to validate the behavior of the new endpoint.

### 10. Deep Equality & Post Integration Testing
This task involves:
- Adding additional endpoints to the Express server.
- Writing test cases to ensure the correctness of the endpoints' responses.
- Using deep equality to compare objects.


