interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void

}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

class Youtube implements TakePhoto , Story { //what if YT also wants to implement Story

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // if we want to add more information than interface it is allowed but we cannot do less then what is mentioned

    ) { }

    // to implemnt story this actually needs to have an method with exact same name what it is in Story
    createStory(): void {
        console.log("Story was Created")
    }

}