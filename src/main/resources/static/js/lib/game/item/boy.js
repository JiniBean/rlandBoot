export default class Boy{
    #name
    #gender
    #x
    #y
    #w
    #h
    #moveIdx
    #moveDelCnt
    #dirIdx
    #img
    #vx;
    #vy;
    #dx;
    #dy;


    constructor() {
        this.#img = new Image();
        this.#img.src = "./res/boy.png"
        this.#w = this.#img.width/3;
        this.#h = this.#img.height/4;

        this.#x = 100;
        this.#y = 300;
        this.#vx = 0;
        this.#vy = 0;
        this.#dx = this.#x;
        this.#dy = this.#y;

        this.#moveIdx = 1;
        this.#moveDelCnt = 10;
        this.#dirIdx = 2;
    }

    // ----------- 애니메이션을 위한 필수 메소드 ----------------------
    draw(ctx){
        let mi = this.#moveIdx;
        let di = this.#dirIdx;
        let w = this.#w;
        let h = this.#h;

        let sx = w * mi;
        let sy = h * di;
        let dx = this.#x -w/2;
        let dy = this.#y -h+20;

        ctx.drawImage(this.#img,
            //source
            sx,sy,w,h,
            //dest
            dx,dy,w,h)

    }

    update(){
        this.#x += this.#vx;
        this.#y += this.#vy;

        if(Math.floor(this.#x) == this.#dx
            || Math.floor(this.#y)==this.#dy){
            this.#vx = 0;
            this.#vy = 0;
            this.#dirIdx = 2;
            this.#moveIdx = 1;
            this.#moveDelCnt = 10;
        }
        else{
            if(this.#moveDelCnt-- == 0){
                this.#moveIdx = this.#moveIdx == 0 ? 2:0;
                this.#moveDelCnt = 10;
            }
        }
    }

    // ----------- 행위 ----------------------
    move(x,y){
        // this.#x = x;
        // this.#y = y;

        let w = x - this.#x;
        let h = y - this.#y;

        let d = Math.sqrt(w*w +h*h);
        // let d = Math.sqrt(x*x +y*y);
        this.#vx = w/d;
        this.#vy = h/d;

        this.#dx = x;
        this.#dy = y;

        this.#moveIdx = 0;
        if(Math.abs(w)>Math.abs(h)){
            if(w<0)
                this.#dirIdx = 3;
            else
                this.#dirIdx = 1;
        }
        else{
            if(h<0)
                this.#dirIdx = 0;
            else
                this.#dirIdx = 2;
        }
        console.log("x y", this.#x, this.#y);
        console.log("dx dy : ", this.#dx, " ", this.#dy);
    }

    moveBy(dir){

    }
}