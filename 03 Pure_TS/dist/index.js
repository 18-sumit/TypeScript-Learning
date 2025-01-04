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
        this._courseCount = 1; // They are accessible inside this class as well as in anyclass which inherits this class (User2)
        // private _courseCount = 1
        // as we cannot access it outside of class so we will make some getters to get its value not 
        // directly via getter and make some setter to set it's value via setter
        this.state = "Maharashtra ";
    }
    // basic ex of getter in TS :
    get getAppleEmail() {
        return `Apple${this.email}`;
    }
    // basic getter to get courseCount
    get courseCount() {
        return this._courseCount;
    }
    // basic setter to set courseCount value : Here's imp point to note that here setter explicity do not return anything
    set courseCount(courseNum) {
    }
}
// declared a class but also want to use above classes 
// Usescases were we want to use above class also but as a parent class inside an another class , and there is an concept of Inheritence
// NOTE : It cannot acquire the property which is Private as they are only accessible within the class
class SubUser2 extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // only accessible due to protected modifier
    }
}
const Sumit = new User2("s@s.com", "sumit singh");
