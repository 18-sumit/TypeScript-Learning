"use strict";
// bad behaviour of Objects in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sumit",
    email: "Sumit@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Sumit", isPaid: false });
// when a function is expected to return a Object:
//syntax: 1st bracket is that it returns and object and 2nd bracket is the defination of the function
function createCourse() {
    return {};
}
// If return type is also expected in someway :
// syntax : 1st bracket mention about the return statement is expected in this way 
function createCourse2() {
    return {
        name: "Reactjs",
        price: 399
    };
}
// createCourse2()
// Here comes the BAD behaviour of Objects in Typescript:
// function studentData1({ name: string, isPaid: boolean }): {} {
// }
// studentData1({ name: "Jhon", isPaid: false, email: "h@hgmail.com" }) // will throw error
// It does not allow us to pass a 3rd parameter ,
//  becuz we have strictly mentioned in the defination what we expect from the function.
// But what if we go like this :
function studentData2(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newData = { name: "Sumit", isPaid: true, email: "h@hgmail.com", age: 18 };
// Here I am able to pass much more information than what is expected in the function defination
studentData2(newData);
var myAge = 25; // Same as 'let myAge: number = 25;'
var myUser = {
    _id: "1234",
    name: "sumit",
    email: "h@hgmail.com",
    isActive: false
};
myUser.email = "sumit@gmail.com"; // can be modified 
