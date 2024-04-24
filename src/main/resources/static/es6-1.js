let exam = {kor:10, eng:20, math:30}; //target
console.log("target kor : ", exam.kor);
// console.log("target eng : ", exam.eng);


let logHandler ={
    get(target, prop, receiver){
        console.log("얍");

        // return target[prop];
        // return Reflect.get(target, prop, receiver);
        return Reflect.get(...arguments);
    }
}
let proxy = new Proxy(exam, logHandler);
console.log("proxy kor : ", proxy.kor);
console.log("proxy kor : ", proxy);