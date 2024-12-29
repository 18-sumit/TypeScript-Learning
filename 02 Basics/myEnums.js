// Enums in TypeScript are a way to define a named set of constant values 
// (either numbers or strings) to make code more readable and maintainable.
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISEL"] = 10] = "AISEL";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice["WINDOW"] = "window";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
// There are multiple ways to define enums and their values.
var SumitSeat = SeatChoice.AISEL;
// Above code is converted into a respective Javascript IIFE function which is big chunk of code in JS
// but putting const before enum will make it one liner in Js as well .
