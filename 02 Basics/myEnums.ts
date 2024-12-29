
// Enums in TypeScript are a way to define a named set of constant values 
// (either numbers or strings) to make code more readable and maintainable.


enum SeatChoice {
    AISEL = 10, // by default AISEL = 0 , then the subsequent value will be incremented by 1 , but it can be changed as per useCase
    MIDDLE = 22, // even we can also change the middle value to a random no  , rest of values will get auto incremented
    WINDOW = "window",
    FOURTH = 0
}
// There are multiple ways to define enums and their values.
const SumitSeat = SeatChoice.AISEL

// Above code is converted into a respective Javascript IIFE function which is big chunk of code in JS
// but putting const before enum will make it one liner in Js as well .