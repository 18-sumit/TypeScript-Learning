"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is how to declare a variable:
var greetings = "Hello Sumit";
console.log(greetings);
// number in TS
var mynum = 6;
// mynum.toLowerCase(); // It throws error that mynum is a number not a string
var userId = 334455.44;
var rollNo = 55;
// both the ways are correct to declare , but 2nd way is type inference : no explicitly need to mention type as of 1st way
// TS is smart enough to automatically detect it 
// boolean :
var isLoggedIn = false;
