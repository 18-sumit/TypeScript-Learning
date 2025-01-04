// An interface declaration is another way to name an object type:
interface User {

    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string // Optional property
    // startTrail: () => string
    startTrail(): string // alternate method
    getCoupon(couponname: string, value: number): number
}

// it's like inheritence:
interface User {
    githubToken : string
}

// new keyword extends 

interface Admin extends User {
    role : "admin" | "TA" | "learner"
}

const sumit: Admin = {

    dbId: 22,
    email: "s@s.com",
    userId: 111,
    githubToken : "18-sumit",
    role : "admin",
    //Interfaces can also describe the shape of a function.
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "sumit10", off: 10) => {
        return 10
    }
}

// sumit.userId = 102; // Error: Cannot assign to 'id' because it is a read-only property.




// Type Aliases vs Interface :
// Interface: Better for defining objects and class structures. Supports declaration merging. 
// Interface is capable to extend the existing interface.

// Type: More flexible, allowing complex unions and intersections. A type cannot be changed after being created

