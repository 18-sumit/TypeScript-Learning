"use strict";
// Abstract class : It is a blueprint for other classes
// Abstract classes cannot create object of their own
// But they help to define class who are inheriting them
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // after some calculation
        return 8; // in interface we cannot define the defination of function , but here we can 
    }
}
// this stops working in abstract class as it is not a class , it is an object made using constructor
// const ss = new TakePhoto("Test", "test")
// ----------*************----------------
// but abstract class still works with class Instagram
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// we can make obj using class who is inheriting the abstract class(TakePhoto)
const ss = new Instagram("Test", "test", 3);
ss.getReelTime();
