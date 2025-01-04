"use strict";
// classes in TS :
// Synatx 1 :
class User1 {
    constructor(email, name) {
        this.state = "Uttarakhand"; //  Accessible only within the class
        this.email = email; // this.email refers to the email on line no 2 and same goes for name 
        this.name = name;
        this.state = this.state; // here it is accesible as it is within the class
    }
    greet() {
        console.log(`Hello my name is ${this.name} and my email is ${this.email} and I belongs to ${this.state}`);
    }
}
const sumit = new User1("s@s.com", "sumit");
sumit.greet();
// sumit.state = "Maharshtra" // cannot manipulate due to readOnly property.
// sumit.state // and even not accessible here due to private modifier.
// Syntax 2 : This syntax will produce same javascript as above
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.state = "Maharashtra ";
    }
}
const Sumit = new User2("s@s.com", "sumit singh");
