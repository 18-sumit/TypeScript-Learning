"use strict";
function detectType(val) {
    // return val.toLowerCase
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    // else 
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID");
        return;
    }
    id.toLowerCase();
}
