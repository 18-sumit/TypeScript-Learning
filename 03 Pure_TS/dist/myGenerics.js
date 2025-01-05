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
