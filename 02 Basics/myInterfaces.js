var sumit = {
    dbId: 22,
    email: "s@s.com",
    userId: 111,
    //Interfaces can also describe the shape of a function.
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
// sumit.userId = 102; // Error: Cannot assign to 'id' because it is a read-only property.
// Type vs Interface :
// Interface: Better for defining objects and class structures. Supports declaration merging.
// Type: More flexible, allowing complex unions and intersections.
