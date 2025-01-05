// Generics : It is a way to create re-usable type-safe components pr functions that work with multiple types.

const score: Array<number> = []
const names: Array<string> = []

// case1 : Here is simple problem that we can expect those types  only which are predefined but genric let us decalre type at time of usage.
function identifyOne(val: boolean | number): boolean | number {
    return val
}

// case2 :Here issue is that we are expecting return type as same as of argument but it can vary due to keyword any which is an issue 
function identifyTwo(val: any): any {
    return val
}

// case 3 : Type overcomes the issue of any by expecting same return type as of argument
function identifyThree<Type>(val: Type): Type {
    return val
}

// case 4 : shortHand of Case 3
function identifyFour<T>(val: T): T {
    return val
}
