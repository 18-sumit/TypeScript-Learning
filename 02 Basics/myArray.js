// syntax :
var superHeros1 = [];
// superHeros1.push("spiderman"); // will give error on never
// we cannot do like this in-correct syntax
// const superHeros2 : number[] = []; // It is also acceptable
//const superHeros2 :[] = [] // It will also give error
var superHeros2 = [];
superHeros2.push("spiderman");
//Another way to decalre an array : Both the ways are equally same there is no better approch difference here
var salary = [];
var allUsers = [];
// allUsers.push(2) // can't be possible becuz it has to follow type User.
allUsers.push({
    name: "sumit",
    isActive: true
});
// NOTE : Maybe a usecase in future
// array inside a array
var MLModels = [
    [255, 255, 2552]
    // "" // not assignable
];
