// console.log(seokho);
//
// var o1 = true || false;
// var o2 = (3==4) || false;
// var o3 = 'cat' || 'dog';
// var o4 = (3-4) || false;
// var o5 = ' ' || false;
// var o6 = '' || false;
//
// console.log(o1);
// console.log(o2);
// console.log(o3);
// console.log(o4);
// console.log(o5);
// console.log(o6);
//
// var x = null;
// var y = null;
// var z = 50;
//
// var result = x || y || z;
//
// var kor;
// var result = kor || 0;
//
// console.log(result);
//
// var n= (true || false ) && false;
// console.log(n);
// var n= true || false  && false;
// console.log(n);
//
// // Nullish coalescing Operator
//
// var foo = null ?? 'default string';
// console.log(foo);
//
// var n = 3 - 'a';
// console.log(n);
// if(isNaN(n))
//     console.log("난입니다~");
//
// var add = new Function("x, y", "return x+y;");
//     console.log(add(3,4));
//
// var add = function (x, y) {
//                 return x+y;
//             }
//
// function add(x, y){
//     return x+y;
// }
// console.log(add(3,4, 5, 6, 7, 8));
// console.log(add(3));
//
// function add(){
//
//     var x = arguments[0];
//     var y = arguments[1];
//     return x+y;
// }
// console.log(add(3,4));
//
//
// console.log(a);
// var a = 1;
//
// // var a = 1;
// // console.log(window.a);
//
// var f3;
// var a = 100;
// var f1 = function () {
//     var a = 40;
//     f3 = function () {
//         console.log(a);
//     }
// }
//
// f1();
// f3();
//         console.log(" a= "+ a);
//
// function Exam(){
//     var kor = 10;
//     window.kor = 20;
//     this.kor = 30;
//
//     console.log(kor, window.kor, this.kor);
// }
// function print(){
//
// }
//
// function Exam(){
//     this.kor = 10;
//     this.eng = 20;
//     this.math = 30;
// }
//
// var ex = new Exam();
// console.log(ex.kor);

// function Exam(){
//     this.kor = 10;
//     this.eng = 20;
//     this.math = 30;
//
//     this.total = function () {
//         return this.kor + this.eng + this.math;
//     }
//
//     this.avg = function () {
//         return this.total()/3;
//     }
// }
//
// // var ex = new Exam();
// console.log(ex.total() , ex.avg());


function Exam(){
    this.kor = 10;
    this.eng = 20;
    this.math = 30;
}


// Array.prototype.ahaha = function (){
//     console.log("집가고싶다");
// }
// var a = [1,2,3,4,5];
// a.ahaha();
//
// console.log("Exam.prototype : ",Exam.prototype );
//
// Exam.prototype.total = function () {
//     return this.kor + this.eng + this.math;
// }
//
// Exam.prototype.avg = function () {
//     return this.total()/3;
// }
// var ex = new Exam();
// console.log("total : ", ex.total());
// console.log("avg : ", ex.avg());

Exam.prototype = {
    // constructor:Exam,
    total: function (){
        return this.kor + this.eng + this.math;
    },
    avg: function () {
        return this.total()/3;
    }
}

var ex = new Exam();
console.log("total : ", ex.total());
console.log("avg : ", ex.avg());


var exam1 = new Exam();

console.log(Exam.prototype);
console.log(exam1.prototype)
console.log(exam1.constructor.prototype);
console.log("exam1._proto_ :", exam1.__proto__ );


function NewExam (){
    this.com = 50;
}
NewExam.prototype = new Exam(); //Exam의 prototype 갖고옴
var nex = new NewExam();

console.log(nex.kor);