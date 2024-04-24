import calc from "./calc.js";

const { createApp } = Vue

createApp({
    components:{
        calc
    }
}).mount('.holder');
