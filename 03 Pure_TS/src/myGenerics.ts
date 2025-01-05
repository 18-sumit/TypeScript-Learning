// Generics : It is a way to create re-usable type-safe components pr functions that work with multiple types.

const score: Array<number> = []
const names: Array<string> = []

// case1 : Here is simple problem that we can expect those types  only which are predefined but genric let us decalre type at time of usage.
function identifyOne(val: boolean | number): boolean | number {
    return val
}

// case2 :Here issue is that we are expecting return type as same as of argument but it can vary due to keyword any which is an issue 
function identifyTwo(val: any): any {
    return val
}

// case 3 : Type overcomes the issue of any by expecting same return type as of argument
function identifyThree<Type>(val: Type): Type {
    return val
}

// case 4 : shortHand of Case 3
function identifyFour<T>(val: T): T {
    return val
}

// we can define our type and pass it on to generic

// This is our own defined type
interface Bottle {
    brand: string
    type: string
}

// and the above type is used in this generic
identifyFour<Bottle>({
    brand: "Milton",
    type: "Thermos"
})

//----------------------------------------***************************************-------------------------

// Generics in Array and arrow Functions

// function getSearchProducts<T>(products : Array<T>) : T {} // this is also an other way to declare array

// normal function
function getSearchProducts<T>(products: T[]): T {
    // do some dataBase operations
    const myIndex = 3
    return products[myIndex]
}

// arrow Function : Syntax 
// classic arrow function :  const getMoreSearchProducts = () => {}

const getMoreSearchProducts = <T>(products: Array<T>): T => {
    // do some database calculations
    const myIndex = 4
    return products[myIndex]
}


//---------------------------------------**********************************---------------------------

// Type parameter in Generic constraints

interface Database {
    connection: string
    username: string
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(
    5, // valOne
    { // valTwo
        connection: "mongoDbconnectionstring",
        username: "sumit18",
        password: "passwordProtected"
    }
)