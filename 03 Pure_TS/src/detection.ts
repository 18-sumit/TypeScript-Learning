// Type Narrowing :
// 1> typeof 2>in 3> instanceof 4>Type predicate 5>Discriminated Union


// 1>typeof
function detectType(val: number | string) {
    // return val.toLowerCase
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    // else 
    return val + 3
}


function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide an ID");
        return
    }

    id.toLowerCase()
}

// -------------------------*************************------------------------------------
// 2> The "in" operator in TS

interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean
}

function checkForAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// Interfaces are already defined for User and Admin
// The above function checks for the account weather it is a User or Admin using in Operator 
// if it has a property then it sets the type of account to Admin 


//--------------------************************************--------------------------------------------
// 3> instance of 

function logvalue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString) // it is 100% sure that if x is here it will be date 
    } else {
        console.log(x.toUpperCase)
    }
}

// ------------------------************************************-------------------------------
// 4> Type predicate ex :

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Define a type predicate function
function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

// Example usage
function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        // TypeScript now knows animal is Fish
        animal.swim();
    } else {
        // TypeScript now knows animal is Bird
        animal.fly();
    }
}
// Without the type predicate isFish, TypeScript wouldn’t know the exact 
// type of animal after the check. It would require manual casting, which is error-prone. 
// By using a predicate, TypeScript safely narrows the type for you


const fish: Fish = { swim: () => console.log("Swimming!") };
const bird: Bird = { fly: () => console.log("Flying!") };

move(fish); // Output: Swimming!
move(bird); // Output: Flying!


//----------------------------**********************************------------------------------------
// 5> Discriminated Union

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape : Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}