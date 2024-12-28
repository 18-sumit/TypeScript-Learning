// In TypeScript, a union type allows you to specify that a variable,
// parameter, or property can hold one of multiple specified types.
// It’s useful when you want to express a value that could be more than one type.
// ex let variable: Type1 | Type2 | Type3;
// union ex : 
var id;
id = 101; // OK
id = "abc123"; // OK
// We can use both custom designed types in union 
var sumit = {
    name: "Sumit",
    _id: 334
};
// sumit can be admin on any day like this :
sumit = {
    username: "sumit singh",
    _id: 333
};
// --------------*********************----------------------
// union in functions
// function getDbId(id: number | string){
//     console.log(`DB id is : ${id}`)
// }
getDbId("3");
// Problem : It is accepting both
getDbId(3);
function getDbId(id) {
    // id.toLowerCase() // here TS is not sure about the datatype which is either a string or number
    // it can be number , hence we do the strict TypeChecking here
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// --------------*********************-----------------
// CLASSIC SITUATION IN : arrays in Union
var data1 = [1, 2, 3, 4]; // cannot have a string value
var data2 = ["1", "2", "3", "4", "5"];
// const data3: string[] | number[] = [1, 2, 3, "1", "2", "3", "4", "5"] // even this is not possible
var data4 = [1, 2, 3, "1", "2", "3", "4", "5", true]; // this way we can have multiple types
//one more situation :
var seatAllotment;
seatAllotment = "aisel";
// seatAllotment = "crew" // will throw error Type '"crew"' is not assignable.
