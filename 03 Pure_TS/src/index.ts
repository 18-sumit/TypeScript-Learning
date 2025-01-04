// classes in TS :
// Synatx 1 :
class User1 {
    public email: string // not even need to mention public as every attribute is public

    name: string // these are nothing but attributes of a class

    private readonly state: string = "Uttarakhand" //  Accessible only within the class

    constructor(email: string, name: string) {
        this.email = email; // this.email refers to the email on line no 2 and same goes for name 
        this.name = name
        this.state = this.state // here it is accesible as it is within the class
    }

    greet(): void {
        console.log(`Hello my name is ${this.name} and my email is ${this.email} and I belongs to ${this.state}`)
    }
}

const sumit = new User1("s@s.com", "sumit")
sumit.greet()
// sumit.state = "Maharshtra" // cannot manipulate due to readOnly property.
// sumit.state // and even not accessible here due to private modifier.

// Syntax 2 : This syntax will produce same javascript as above

class User2 {

    readonly state: string = "Maharashtra "
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ){}
}

const Sumit = new User2("s@s.com", "sumit singh")