"use strict";
// Generics : It is a way to create re-usable type-safe components pr functions that work with multiple types.
const score = [];
const names = [];
// case1 : Here is simple problem that we can expect those types  only which are predefined but genric let us decalre type at time of usage.
function identifyOne(val) {
    return val;
}
// case2 :Here issue is that we are expecting return type as same as of argument but it can vary due to keyword any which is an issue 
function identifyTwo(val) {
    return val;
}
// case 3 : Type overcomes the issue of any by expecting same return type as of argument
function identifyThree(val) {
    return val;
}
// case 4 : shortHand of Case 3
function identifyFour(val) {
    return val;
}
// and the above type is used in this generic
identifyFour({
    brand: "Milton",
    type: "Thermos"
});
//----------------------------------------***************************************-------------------------
// Generics in Array and arrow Functions
// function getSearchProducts<T>(products : Array<T>) : T {} // this is also an other way to declare array
// normal function
function getSearchProducts(products) {
    // do some dataBase operations
    const myIndex = 3;
    return products[myIndex];
}
// arrow Function : Syntax 
// classic arrow function :  const getMoreSearchProducts = () => {}
const getMoreSearchProducts = (products) => {
    // do some database calculations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(5, // valOne
{
    connection: "mongoDbconnectionstring",
    username: "sumit18",
    password: "passwordProtected"
});
// ---------------------------------------*****************************------------------------------
// class Types in Generics
// Generic classes are templates for creating reusable class structures that can work with 
// multiple types. Instead of hardcoding a specific type, you define a placeholder (like T) 
// that can be replaced with any type when the class is used.
// ex :  Define a generic class using the placeholder <T>
class Storage {
    constructor() {
        this.items = []; // Array to store elements of type T
    }
    // Add an item to the storage
    addItem(item) {
        this.items.push(item); // Add the item to the array
    }
    // Remove an item from the storage
    removeItem(item) {
        if (typeof item === "object" && item !== null) {
            // For objects, use a custom comparison to find the index
            const index = this.items.findIndex((storedItem) => JSON.stringify(storedItem) === JSON.stringify(item));
            if (index > -1) {
                this.items.splice(index, 1); // Remove the item if found
            }
        }
        else {
            // For primitive types, use indexOf
            const index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1); // Remove the item if found
            }
        }
    }
    // Get all items in the storage
    getItems() {
        return this.items;
    }
}
// example1 
const numberStorage = new Storage(); // T is replaced by 'number
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems()); // Output: [20]
// example2
const stringStorage = new Storage();
stringStorage.addItem("apple");
stringStorage.addItem("banana");
stringStorage.removeItem("apple");
console.log(stringStorage.getItems()); // Output: ["banana"]
