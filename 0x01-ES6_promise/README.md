0x01. ES6 Promises

## Introduction

Welcome to the ES6 Promises project! In this project, you'll dive into JavaScript's ES6 Promises and learn how to leverage them effectively in your code. This project will cover various aspects of Promises, including their usage, handling resolution and rejection, async/await, error handling, and more.

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The `await` operator
- How to use an async function

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup

- Install NodeJS 12.11.x
- Install Jest, Babel, and ESLint in your project directory using the supplied package.json and run `npm install`.

## Configuration Files

Add the following files to your project directory:

- package.json
- babel.config.js
- utils.js (use when tasks require `uploadPhoto` and `createUser`)
- .eslintrc.js

Don’t forget to run `npm install` when you have the package.json.

## Tasks

### 0. Keep every promise you make and only make promises you can keep

Return a Promise using the prototype function `getResponseFromAPI()`. 

### 1. Don't make a promise...if you know you can't keep it

Using the prototype `getFullResponseFromAPI(success)`, return a promise. The parameter is a boolean.

### 2. Catch me if you can!

Using the function prototype `handleResponseFromAPI(promise)`, append three handlers to the function:
- When the Promise resolves, return an object with the following attributes:
  - status: 200
  - body: success
- When the Promise rejects, return an empty Error object
- For every resolution, log "Got a response from the API" to the console

### 3. Handle multiple successful promises

In this file, import `uploadPhoto` and `createUser` from `utils.js`. Use the prototype `handleProfileSignup()` to collectively resolve all promises and log `body` `firstName` `lastName` to the console. In the event of an error, log "Signup system offline" to the console.

### 4. Simple promise

Using the prototype `signUpUser(firstName, lastName)`, return a resolved promise with this object:

## 5. Reject the promises
Write and export a function named uploadPhoto(filename) that returns a Promise rejecting with an Error and the string $filename cannot be processed.

## 6. Handle multiple promises
Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js. Write and export a function named handleProfileSignup(firstName, lastName, fileName). The function should call the two other functions. When the promises are all settled, it should return an array with the following structure.

## 7. Load balancer
Write and export a function named loadBalancer(chinaDownload, USDownload) that accepts two promises chinaDownload and USDownload. The function should return the value returned by the promise that resolved first.

## 8. Throw error / try catch
Write a function named divideFunction(numerator, denominator) that will accept two arguments: numerator (Number) and denominator (Number). When the denominator argument is equal to 0, the function should throw a new error with the message "cannot divide by 0". Otherwise, it should return the numerator divided by the denominator.

## 9. Throw an error
Write a function named guardrail(mathFunction) that will accept one argument mathFunction (Function). This function should create and return an array named queue. When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message "Guardrail was processed" should be added to the queue.

## 10. Promise all
Using Promise.all(), write and export a function named allSettled(promises) that accepts an array of promises promises. The function should return a promise that resolves when all the promises in the input array have settled.

## 11. Change a constant variable
Write and export a function changeSchool() that changes the value of the constant variable school to Holberton.

## 12. Get a job
Write and export a function getJob() that returns a promise. The promise should resolve after 2 seconds with the value "Job search finished".

## 13. Job search
Write and export a function jobSearch() that returns a promise. The promise should resolve after 3 seconds with an array of strings.

## 14. Reject the promises
Write and export a function uploadPhoto. It should accept one argument filename (string). The function should return a Promise rejecting with an Error and the string $filename cannot be processed.

