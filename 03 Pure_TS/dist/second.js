"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short // if we want to add more information than interface it is allowed but we cannot do less then what is mentioned
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    // to implemnt story this actually needs to have an method with exact same name what it is in Story
    createStory() {
        console.log("Story was Created");
    }
}
