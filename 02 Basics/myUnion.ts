// In TypeScript, a union type allows you to specify that a variable,
// parameter, or property can hold one of multiple specified types.
// It’s useful when you want to express a value that could be more than one type.
// ex let variable: Type1 | Type2 | Type3;

// union ex : 
let id: string | number;

id = 101;       // OK
id = "abc123";  // OK
// id = true;   // Error: Type 'boolean' is not assignable to type 'string | number'.


type User = {
    name: string,
    _id: number
}

type Admin = {
    username: string,
    _id: number
}

// We can use both custom designed types in union 

let sumit: User | Admin = {
    name: "Sumit",
    _id: 334
}
// sumit can be admin on any day like this :
sumit = {
    username: "sumit singh",
    _id: 333
}


// --------------*********************----------------------
// union in functions

// function getDbId(id: number | string){
//     console.log(`DB id is : ${id}`)
// }
getDbId("3")
// Problem : It is accepting both
getDbId(3)

function getDbId(id: number | string) {
    // id.toLowerCase() // here TS is not sure about the datatype which is either a string or number
    // it can be number , hence we do the strict TypeChecking here
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// --------------*********************-----------------
// CLASSIC SITUATION IN : arrays in Union

const data1: number[] = [1, 2, 3, 4] // cannot have a string value
const data2: string[] = ["1", "2", "3", "4", "5"]
// const data3: string[] | number[] = [1, 2, 3, "1", "2", "3", "4", "5"] // even this is not possible
const data4: (string | number | boolean)[] = [1, 2, 3, "1", "2", "3", "4", "5", true] // this way we can have multiple types

//one more situation :

let seatAllotment: "aisel" | "middle" | "window"

seatAllotment = "aisel"
// seatAllotment = "crew" // will throw error Type '"crew"' is not assignable.




