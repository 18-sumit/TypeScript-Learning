function addTwo(num) {
    num.toUpperCase(); // this was not supposed to be accepted in TS
    return num + 2;
}
addTwo(5);
// This function is again bypassing the type inference : which is not ideal in TS 
// better approch in TS : specify 
function addThree(num) {
    // num.toUppercase() // Here we can't do it due to specific type annotation.
    return num + 4;
}
addThree(3);
function getLower(val) {
    return val.toLowerCase();
    return val + 2;
    // here we are able to do both operations which is again a problem of any
}
// don't even bother with argument 
getLower(4);
// correct approch :
function getUpperCase(val) {
    return val.toUpperCase();
}
getUpperCase("SUMIT");
// how to handle multiple parameters type annotation inside a function :
function signUpUser(name, email, isPaid) { }
// how to pass default value in parameters :
var loginUser1 = function (name, email, isPaid) {
};
// loginUser("sumit" , "sumit@singh.com")
// It gives error for not providing 3rd parameter
var loginUser2 = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser2("Sumit", "Sumit@gmail.com");
