function addTwo(num) {
    num.toUpperCase(); // this was not supposed to be accepted in TS
    return num + 2
}

addTwo(5);
// This function is again bypassing the type inference : which is not ideal in TS 

// better approch in TS : specify 

// function addThree(num: number) {
//     // num.toUppercase() // Here we can't do it due to specific type annotation.
//     // return num + 4
//     return "Hello" // even after type safety we are able to return a string
// }
// let myValue = addThree(3);

// This is how to fix it :
function addThree(num: number): number {
    return num + 4
    // return "Hello" // now we can't return a string
}
let myValue = addThree(3);

function getLower(val) {

    return val.toLowerCase()
    return val + 2;
    // here we are able to do both operations which is again a problem of any

}

// don't even bother with argument 
getLower(4)


// correct approch :
function getUpperCase(val: string) {
    return val.toUpperCase()
}
getUpperCase("SUMIT");

// how to handle multiple parameters type annotation inside a function :
function signUpUser(
    name: string,
    email: string,
    isPaid: false
) { }

// how to pass default value in parameters :

let loginUser1 = (name: string, email: string, isPaid: boolean) => {
}
// loginUser("sumit" , "sumit@singh.com")
// It gives error for not providing 3rd parameter

// Correct way :
let loginUser2 = (name: string, email: string, isPaid: boolean = false) => {
}

loginUser2("Sumit", "Sumit@gmail.com")
// Here are no errors as we have given default value in parameter itself


function getValue1(myVal: number): string {

    // if (myVal > 5) {
    //     return true
    // }
    return "200 OK"
}
// to return multiple types :

function getValue2(myVal: number): boolean | string {

    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

// same syntax in arrwow functions :
// strinf after () : string says this function will return a string value
const getHello = (s: string): string => {
    return ""
}


// NOTE : TS is smart , it knows in which context the code is written:hovering over heros changes it's type if any of the below 
// line is not commented 
// Context switching is very smart  and we can rely on this one.

const heros = ["spiderman", "ironman", "thor"]
// const heros = [1, 2, 3]

// Good Practice
heros.map((hero): string => { // more strict checking
    return `hero is ${hero}`
    // return 2 // now we can't do this anymore as hero is expected to be returning as string
})



// method to return null
function consoleError(errmsg: string): void {
    console.log(errmsg);
    // return 1 // now we cannot return anything as we already specified it will return void 
}


// this function will not return a value 
// moreOften used to throw error implicitly
// it terminates execution of program
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}