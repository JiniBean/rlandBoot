import Boy from "../item/boy.js";
export default class Room{
    #img
    #ctx
    #boy
    #canvas
    #timerId;

    constructor() {
        const gameSection = document.querySelector("#game-section");
        this.#canvas = gameSection.querySelector(".room");
        this.#canvas.onclick = this.clickHandler.bind(this);

        /** @type {CanvasRenderingContext2D} */
        this.#ctx = this.#canvas.getContext("2d");

        this.#img = new Image();
        this.#img.src = "./res/map.png"

        this.#boy = new Boy();
        this.run();

    }
    //for event handling -------------------------
    clickHandler(e){
        this.#boy.move(e.x, e.y);
        this.#boy.draw(this.#ctx);

    }

    //for animation -------------------------
    draw(){
        // this.ctx.drawImage(this.#img,
        //     //source image
        //     0,0,200,200,
        //     //dest image
        //     100,100,200,200
        //
        // )
        //
        // this.ctx.drawImage(this.#img,
        //     //source image
        //     0,200,200,200,
        //     //dest image
        //     300,300,200,200
        //
        // )

        this.#ctx.drawImage(this.#img,
            0,0);
        this.#boy.draw(this.#ctx);
    }

    update(){
        this.#boy.update();
    }

    //for service -------------------------
    run(){
        this.#timerId = setInterval(()=>{
            this.update();
            this.draw();
        }, 1000/60);
    }

    stop(){
        clearInterval(this.#timerId);
    }
}