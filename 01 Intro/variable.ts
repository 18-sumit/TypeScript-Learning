// this is how to declare a variable:
let greetings: string = "Hello Sumit";

console.log(greetings);

// number in TS
let mynum = 6;
// mynum.toLowerCase(); // It throws error that mynum is a number not a string

let userId: number = 334455.44
let rollNo = 55
// both the ways are correct to declare , but 2nd way is type inference : no explicitly need to mention type as of 1st way
// TS is smart enough to automatically detect it 
// boolean :

let isLoggedIn: boolean = false


// to get rid fo those sqiggly lines temporarily
export { } 