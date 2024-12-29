// Tuple in TS:
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
