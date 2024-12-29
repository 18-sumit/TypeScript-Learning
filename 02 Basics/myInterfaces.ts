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

const sumit: User = {

    dbId: 22,
    email: "s@s.com",
    userId: 111,
    //Interfaces can also describe the shape of a function.
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "sumit10", off: 10) => {
        return 10
    }
}

// sumit.userId = 102; // Error: Cannot assign to 'id' because it is a read-only property.




// Type vs Interface :
// Interface: Better for defining objects and class structures. Supports declaration merging.
// Type: More flexible, allowing complex unions and intersections.

