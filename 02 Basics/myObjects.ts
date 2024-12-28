// bad behaviour of Objects in TypeScript

const User = {
    name: "Sumit",
    email: "Sumit@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

createUser({ name: "Sumit", isPaid: false })

// when a function is expected to return a Object:
//syntax: 1st bracket is that it returns and object and 2nd bracket is the defination of the function
function createCourse(): {} {
    return {}
}

// If return type is also expected in someway :
// syntax : 1st bracket mention about the return statement is expected in this way 

function createCourse2(): { name: string, price: number } {
    return {
        name: "Reactjs",
        price: 399
    }
}
// createCourse2()

// Here comes the BAD behaviour of Objects in Typescript:

// function studentData1({ name: string, isPaid: boolean }): {} {
// }

// studentData1({ name: "Jhon", isPaid: false, email: "h@hgmail.com" }) // will throw error

// It does not allow us to pass a 3rd parameter ,
//  becuz we have strictly mentioned in the defination what we expect from the function.
// But what if we go like this :

function studentData2({ name: string, isPaid: boolean }) { }

let newData = { name: "Sumit", isPaid: true, email: "h@hgmail.com", age: 18 }
// Here I am able to pass much more information than what is expected in the function defination

studentData2(newData)
// And it let's us do this thing now in another way , which is not a good thing (BAD BEHAVIOUR OF OBJECTS IN TS)

// There is a better way of defining the functions and the methods , Will learn about it after Interface and all.




// Type Aliases:
// type AliasName = TypeDefinition;

type Age = number;

let myAge: Age = 25; // Same as 'let myAge: number = 25;'


// aliases 
type User1 = {
    name: string;
    age: number;
    isAdmin: boolean;
};

// const user: User = {
//     name: "Sumit",
//     age: 21,
//     isAdmin: true,
// };

// ReadOnly  : cannot change it 

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    creditcardDetails?: number // as every user cannot have credit card , so ? mark makes it optional field .NOT compulsory like other fields
}

let myUser: User = {
    _id: "1234",
    name: "sumit",
    email: "h@hgmail.com",
    isActive: false
}

myUser.email = "sumit@gmail.com" // can be modified 
// myUser._id = "456" // This is not allowed will throw error as it's readonly



// if id would be array , can we push values to array in case of READONLY?
// =>Yes, if a readonly property is an array, the reference to the array itself cannot be reassigned, 
// but the contents of the array can still be modified (e.g., using methods like push, pop, etc.).
//  This is because readonly in TypeScript only prevents reassignment of the property, not mutability of the object it refers to.


// ----------MIX AND MATCH OF THESE TYPES--------------
// This is not perfect use case but it's just for example 

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: number
}
// what if we also needed cardCVV but we do need the wholw cardDetails 
//What we can do is that :

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export { }