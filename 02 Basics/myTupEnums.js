// Tuple in TS:
// a tuple is a fixed-length, ordered collection of elements where each element can have
//  a different type. Unlike arrays, which are collections of elements of the same type, 
// tuples allow you to group together values with different types and enforce the order
//  and type of each element.
// ex : no of elements in a tuple in predefined and cannot be changed , but order of the element matters the most here
var tuple = [42, "Hello", true];
var user = [1, "ss"];
var tUser;
tUser = ["ss", 123, true];
var rgb = [255, 231, 159];
var newUser = [122, "sumit"]; // this is fine as per the type it follows , 
// const newUser : user = ["sumit " , 123]  // 1st number then string is allowed 
newUser[1] = "sumit singh"; // this is ultimately an array so we can overwrite it's values
// EyeCatching feature in tuple
// newUser.push(true) // were allowed in older verion , but breaks the tuple type
// console.log(newUser) // Output : [122 , "sumit singh" , true]
