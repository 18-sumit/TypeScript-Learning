// Abstract class : It is a blueprint for other classes
// Abstract classes cannot create object of their own
// But they help to define class who are inheriting them


abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void // abstract function cannot be given there implementation
    getReelTime(): number {
        // after some calculation
        return 8
    }
}

// this stops working in abstract class as it is not a class , it is an object made using constructor
// const ss = new TakePhoto("Test", "test")


// ----------*************----------------
// but abstract class still works with class Instagram
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");

    }
}

// we can make obj using class who is inheriting the abstract class(TakePhoto)
const ss = new Instagram("Test", "test" , 3)

ss.getReelTime()