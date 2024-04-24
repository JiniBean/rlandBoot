// //Advanced JSON #1 variable
// {
//     let kor = 30;
//     let eng = 40;
//     let math = 50;
//
//     // es5
//     // let exam ={
//     //     kor:kor,
//     //     eng:eng,
//     //     math:math,
//     //     total:function () {
//     //
//     //     }
//     // };
//
//     // es6
//     let exam = {
//         kor,
//         eng,
//         math,
//         total: function () {
//
//         }
//     }
//
//     // console.log(exam.kor,',', exam.math);
//     // console.log(exam.total());
// }
//
//
// //Advanced JSON #2 function
// {
//     let kor = 30;
//     let eng = 40;
//     let math = 50;
//
//     let exam = {
//         kor,
//         eng,
//         math,
//         total() {
//             return this.kor + this.eng + this.math;
//         }
//     };
//     // console.log(exam.kor,',', exam.math);
//     // console.log(exam.total());
// }
//
//
// //Advanced JSON #3 Computed Property
// {
//     let col = "kor";
//     let eng = 40;
//     let math = 50;
//
//     var exam = {
//         [col]: 10,
//         eng,
//         math,
//         total() {
//             return this.kor + this.eng + this.math;
//         }
//     };
//
//
//     // console.log(exam.kor,',', exam.math);
//     // console.log(exam.total());
// }
//
//
// //Advanced JSON #4 Object Destructuring
// {
//     // function print(exam) {
//     //
//     //     // 낱개로 뽀개기
//     //     let kor = exam.kor;
//     //     let eng = exam.eng;
//     //     let math = exam.math;
//     //
//     //     let total = kor + eng + math;
//     //     console.log("뽀개기1 ", total);
//     // }
//
//     function print(exam) {
//
//         //객체에 중첩된 연산은 바람직하지 않다
//         // let total = exam.kor + exam.eng + exam.math;
//         let {kor, eng, math} = exam;
//         let total = kor + eng + math;
//         console.log("뽀개기2 ", total);
//     }
//
// }
//
// //Advanced JSON #4-1 Object Destructuring : aliasing, matching, changing
// {
//     //변수명 별칭주기
//     function print({kor: hi, eng, math}) {
//
//         let total = hi + eng + math;
//         console.log("뽀개기3", total);
//     }
//
//     // print({kor:10, eng:20, math:40});
//
//
//     //변수명 달라도 가능
//     function printA({kor, eng, math}) {
//
//         let total = kor + eng + math;
//         console.log("뽀개기4", total);
//     }
//
//     // print({shin:10, eng:20, math:40});
//
//
//     //기본값처럼 줄 수 있음
//     function print1({kor, eng, math, com = 90}) {
//
//         let total = kor + eng + math + com;
//         console.log("뽀개기5", total);
//     }
//
//     // print({kor:10, eng:20, math:30});
//
//     let exam1 = {kor: 10, eng: 20, math: 30}
//     let {kor, eng} = exam1;
//     exam1.kor++;
//     exam1.eng += 2;
//
//     // {kor, eng} = exam1; js에서는 중괄호가 의미가 없기 때문, 표현식이 아님
//     ({kor, eng} = exam1); //명시적으로 해주는 것
//     // console.log(exam1, {kor,eng});
//
// }
//
// //Advanced JSON #4-2 Object Destructuring : Nested
// {
//     let exam = {kor: 10, eng: 20, math: 30, student: ({id: 1, name: '은진'})}
//
//     // let name = exam.student.name;
//     let {kor, student: {name}} = exam;
//
//     // console.log(kor, name);
// }
//
//
// //Advanced JSON #5 Array Destructuring
// {
//     // undefined undefined Array(3)[10,20,30]
//     // let kor1, kor2, kor3 = [10,20,30];
//
//     //10 20 30
//     // let [kor1, kor2, kor3] = [10,20,30];
//     // let [kor1, kor2] = [10,20,30];
//     // let [kor1, ,kor3] = [10,20,30]; //가운데 자리는 비워둬야함
//
//     let arr = [10, 20, 30];
//     let [kor1, , kor3] = arr;
//     arr[0] = 60;
//     [kor1, , kor3] = arr; //배열은 소괄호 필요없음
//     // console.log(kor1, kor3);
//
//     //swap
//     let x = 3;
//     let y = 2;
//
//     // let t = x;
//     // x = y;
//     // y = t;
//     // console.log(x, y);
//
//     [x, y, z = 10] = [y, x];
//     // console.log(x, y, window.z);
//
// }
//
// //Advanced JSON #6 Rest Parameters & Spread Operator
// {
//     //나머지 값들
//     function sum(n1, n2, ...args) {
//         let reusult = 0;
//
//         //나머지 출력
//         // let length = arguments.length-2; //arguments 함수가 갖는 인자에 대한 컬렉션
//         // for(let i=0; i<length; i++)
//         //     console.log([i+2]);
//
//         for (let a of args)
//             console.log(a);
//
//         return n1 + n2;
//     }
//
//     // console.log("sum : ", sum(1,2));
//     // console.log("sum : ", sum(1,2, 4, 5 ,6));
//
//     let kors = [10, 20, 30];
//     // console.log(sum(kors)); //10,20,30 undefined
//     // console.log(sum(kors[0], kors[1]));//spread
//     // console.log(sum(...kors)); //auto
//
//     let arr1 = [2, 3, 4];
//     let arr2 = [6, 5, arr1];
//     let arr3 = [6, 5, ...arr1];
//
//     // console.log("arr2", arr2); //6,5,[2,3,4]
//     // console.log("arr3", arr3); //6,5,2,3,4
//
// }
//
// //Advanced JSON #7 Default Value
// {
//     function getCount() {
//         return 3;
//     }
//
//     function add(x, y = 10, z = getCount(), a = z) {
//         let sum = x + y + z;
//         console.log("아규먼트", arguments.length);
//         console.log("인자 : ", x == arguments[0], x === arguments[0]); //true true(같은 객체였음)
//
//         x = 50;
//         console.log("인자 바꾼 후 : ", x == arguments[0], x === arguments[0]); //false false(다른 객체 됨)자바스크립트의 변수는 모두 참조변수이기 때문에 바꾸는 순간 다른 객체를 참조하게된다
//         return sum;
//     }
//
//     // add(10, null, 20); //30 null은 값으로 안침
//     // add(10,undefined,20); //40
//     // add(10,10);
//
//
// }
//
//
// //Arrrow Function
// {
//
//     {
//         let arr = [1, 9, 87, 10, 15, 33, 2];
//         arr.sort((a, b) => a - b);
//         // console.log(arr); // 오름차순
//         arr.sort((a, b) => b - a);
//         // console.log(arr); // 내림차순
//     }
//
//     {
//         let arr = [[1, 9], [87, 10, 15], [33, 2]];
//         arr.sort((a, b) => a[0] - b[0]);
//         // console.log(arr); // 오름차순
//         arr.sort((a, b) => b[0] - a[0]);
//         // console.log(arr); // 내림차순
//     }
//
//     //함수와 차이점
//     //1.this, super가 없다(새성자, 또는, 멤버, 메소드로 사용될 수 없다.)
//     //2.arguments 콜렉션이 없다.(함수 모듈로 사용될 수 없다. 함수 지역화가 안된다. 함수를 이용한 코딩 영역으로 사용하는 것이 아니다)
//     //3.new.target(생성한 놈)이 없다 new 연산자로 생성할 수 없다.
//
//
//     let exam = {
//         kor: 10,
//         eng: 20,
//         math: 10,
//         total: () => {
//             return this.kor + this.eng + this.math;
//         },
//         delay(){
//             // let kor = this.kor
//             //this.kor undefined 그 이유는 setTimeout이 호출한 콜백함수이기 때문에, setTimeout가 객체는 전달안해줌
//             // setTimeout(function () {
//             //     console.log("delay", this.kor);
//             // }, 3000);
//
//             //대안으로
//             // setTimeout(function () {
//             //     console.log("delay", this.kor);
//             // }.bind(this), 3000);
//
//             //추가내용 apply, call, bind  메소드의 용법과 차이
//             // 자바스크립트에서 function을 호출 하며 객체 전달하는 방법
//
//             setTimeout(()=>{
//                 console.log("delay", this.kor);
//             }, 3000);
//         }
//     };
//     // exam.delay().apply(exam); //bind나 둘중하나
//     // exam.delay();
//
//     // this가 있다는 말은 total() 메소드를 호출할 때 exam을 this로 받는다는 것을 말하는 것이다.
//     // Arrow Function은 그것(exam)을 안 받는다 아니 못받는다.
//     // 따라서, total() 메소드의 연산은 undefined + undefined 가 되어 NaN이 출력된당! 꺄르릇
//     // console.log(exam.total());
//
//
//     function total(a,b) {
//         console.log("a : ", a);
//         console.log("b : ", b);
//
//         return this.kor + this.eng + this.math;
//     }
//     //this = window의 객체
//     // console.log(total());
//
//     //total을 호출하며 객체를 전달한다 -> this로 쓸 수 있음
//     //방법1
//     // console.log(total.apply(exam, ["hi", "good"])); //목록으로 전달 []
//     //방법2
//     // console.log(total.call({kor:10, eng:10, math:10}, "good", "hi")); //나열하면 됨
//
//     //위 방법은 내가 함수를 호출하는 입장이지만
//     // 호출을 부탁(위임) 하는 경우 callback
//     let a = {
//         name: "짜장면",
//         close() {
//             console.log(this.name, "다됨");
//         }
//     }
//
//     // let onclose = a.close.bind(a);
//     // onclose();
//
//     // 예제 2  : 일반 함수로 사용할 수는 있나?
//     {
//         // function add(a, b) {
//         //     console.log(arguments.length); // 나머지 값도 처리할 수 있다.
//         //     return a + b;
//         // }
//
//         // this 쓸일 없고 객체와 관련된 일이 아니라면 코드가 깔끔하고 더 좋아보임
//         // 오히려 this가 없는 고전적인 함수 구현같은 느낌, 순수 함수가 필요할 땐 이걸로
//         let add = (a, b, ...args) => {
//             // console.log(arguments.length); // 나머지 값도 처리할 수 있다.
//             // console.log("args.length = ", args.length); // 나머지 값도 처리할 수 있다.
//             return a + b;
//         }
//
//         // console.log("add(3,4,5) = ", add(3, 4, 5));
//     }
//
// }
//
// //Class
// {
//     // function CreateExam() {
//     //     return class Exam{
//         class Exam{
//             #kor
//             #eng
//             #math
//             // static #test = 0
//             static #test
//
//             static {
//                 this.#test = 20;
//             }
//
//             static getTest(){
//                 return Exam.#test;
//             }
//             static get test(){
//                 this.#test = 30;
//                 return Exam.#test;
//             }
//             constructor(kor=1, eng=2, math=3) {
//                 this.#kor = kor;
//                 this.#eng = eng;
//                 this.#math = math;
//             }
//
//             get kor(){
//                 return this.#kor;
//             }
//             set kor(value){
//                 this.#kor = value;
//             }
//
//             getMath(){
//                 return this.#math;
//             }
//
//             // Exam.prototype.total()과 같음
//             total(){
//                 return this.#kor + this.#eng + this.#math;
//             }
//             #total(){
//                 return this.#kor + this.#eng + this.#math;
//             }
//         }
//     // }
//
//     // let Exam = CreateExam();
//     let exam = new Exam();
//     // console.log(exam.total());
//     // console.log("kor:" , exam.getKor());
//     exam.kor = 40;
//     exam.kor++;
//     // console.log("kor:" , exam.kor);
//     // console.log(Exam.getTest());
//     // console.log(Exam.test);
//
//     // let exam = new Exam();
//     // console.log(typeof Exam);
//     // console.log(typeof exam);
//
// }
//
// //Inheritance
//
// {
//     class Exam {
//         #kor
//         #eng
//         #math
//         constructor(kor = 1, eng = 2, math = 3) {
//             this.#kor = kor;
//             this.#eng = eng;
//             this.#math = math;
//         }
//
//         get kor() {
//             return this.#kor;
//         }
//
//         set kor(value) {
//             this.#kor = value;
//         }
//
//         get math() {
//             return this.#math;
//         }
//         total() {
//             return this.#kor + this.#eng + this.#math;
//         }
//     }
//
//     class NewlecExam extends Exam{
//         #com
//         constructor() {
//             super();
//             this.#com = 2;
//         }
//
//         // avg(){
//         //     return (this.total() + this.#com) / 4;
//         // }
//
//         total() {
//             return super.total() + this.#com;
//         }
//
//         avg(){
//             return this.total() / 4;
//         }
//
//     }
//
//     // console.log("NewlecExam.total : ", new NewlecExam().total());
//     // console.log("NewlecExam.avg : ", new NewlecExam().avg());
//
//
// }
//
// //자바스크립트는 태생적으로 인터페이스가 없음 자료형(타입) 형식이 없기 때문임
// //그래서 자바스크립트는 다형성을 이상하게 지원함 -> computed Property 함수 이름 자체를 정의하게 됨
// // 자료형을 약속할 수 없기때문에 메소드명이라도..동명이인 불가능
//
// //Symbol-Computed Property
// {
//     const getList = Symbol();
//
//     class NoticService {
//         [getList] (){
//             return "List";
//         }
//         [getList](){
//             return "Liiist";
//         }
//     }
//
//
//     class NoticeController{
//         constructor() {
//             this.service=new NoticService();
//             // this.test = new Test();
//         }
//         [getList](){
//             return "controller";
//         }
//         print(){
//             console.log(this.service[getList]());
//             // console.log(this.test[getList]());
//             // console.log([getList]());
//         }
//     }
//
//     let controller = new NoticeController();
//
//     // console.log(controller[getList]());
//     // controller.print();
// }
// //인터페이스
// {
//     class NoticeService{
//         static getList = Symbol();
//     }
//
//     class NoticeServiceImp{
//         [NoticeService.getList](){
//             return "list";
//         }
//     }
//
//     class NoticeController{
//         constructor() {
//             this.service = new NoticeServiceImp();
//         }
//
//         printList(){
//             console.log(this.service[NoticeService.getList]());
//         }
//     }
// }
//
// //Set, List, Map Collection
// // {
// //     // ========== set ===================
// //     let set = new Set([1, 2, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7]);
// //     // console.log("======== set =======");
// //     // console.log(set.size);
// //
// //     set.add(11);
// //     // console.log(set.size);
// //
// //     set.delete(5);
// //     // console.log(set.size);
// //
// //     set.clear();
// //     // console.log(set.size);
// //     // console.log("======= set ========");
// //
// //     for (let s of set)
// //         // console.log(s);
// //
// //
// //         // ========== Map ===================
// //     let map = new Map();
// //     map.set("id", 1);
// //     map.set("title", "haha");
// //     map.set("name", "벱");
// //
// //     console.log("======= map ========");
// //     for (let k of map)
// //         console.log(k);
// //
// //     console.log("======= map.keys() ========");
// //     for (let k of map.keys())
// //         console.log(k);
// //
// //     console.log("======= map.values() ========");
// //     for (let v of map.values())
// //         // console.log(v);
// //
// //     console.log("======= map.entries() ========");
// //     for (let e of map.entries())
// //         console.log(e[0],e[1]);
// //
// //     for (let [k,v] of map.entries())
// //         console.log(k,v);
// //
// //     console.log("======= map.forEach() ========");
// //     //foreach : for of가 없었기 때문에 사용했음
// //     map.forEach( (v,k) => {
// //         console.log(k,v)
// //     })
// // }
//
// //Iterator, Generator(Iterator를 generate 해줌,next() 생성)
// {
//     //맨땅
//     // class Exam {
//     //     constructor() {
//     //         this.current = 0;
//     //         this.kor = 1;
//     //         this.eng = 2;
//     //         this.math = 3;
//     //     }
//     //
//     //     [Symbol.iterator]() {
//     //         return this
//     //     }
//     //
//     //     next() {
//     //         this.current++;
//     //         switch (this.current) {
//     //             case 1 :
//     //                 return {done: false, value: this.kor};
//     //             case 2 :
//     //                 return {done: false, value: this.eng};
//     //             case 3 :
//     //                 return {done: false, value: this.math};
//     //             case 4 :
//     //                 return {done: true, value: -1};
//     //         }
//     //     }
//     //
//     // }
//     //
//     //
//     // let exam = new Exam();
//     // // console.log(exam.next());
//     // // console.log(exam.next());
//     // // console.log(exam.next());
//     //
//     // //for of 문은 Symbol.iterator 를 구현한 메소드를 호출
//     // for (let i of exam)
//     //     console.log(i)
//
//     //Generator
//     class Exam {
//         constructor() {
//             this.kor = 1;
//             this.eng = 2;
//             this.math = 3;
//         }
//
//         *[Symbol.iterator]() {
//             yield this.kor;
//             yield this.eng;
//             yield this.math;
//         }
//
//         entries(){
//             let [kor,eng, math] = this;
//
//             return{
//
//                 *[Symbol.iterator](){
//                   yield ["kor", kor];
//                   yield  ["eng", eng];
//                   yield ["math", math];
//               }
//             };
//         }
//     }
//
//     let exam = new Exam();
//     for (let i of exam)
//         console.log(i);
//
//     for (let [k, v] of exam.entries())
//         console.log([k,v]);
//
// }
//
// //Promise 성공 실패에 대한 이벤트 처리 로직을 분리하게 해주는 객체
// {
//     // 비동기 처리 함수 1 : 콜백 방식의 비동기 처리함수
//     function delayedPrint(value, resolve, fail) {
//         let rand = Math.floor(Math.random() * 2000)+1000;
//
//         setTimeout(()=>{
//             console.log(value);
//             resolve();
//             // fail();
//         }, rand);
//     }
//     //이용하는 쪽의 콜백 함수의 중첩등이 복잡
//     //콜백때문에 호출 함수보다 코드 구현이 눈에 더보임
//     // delayedPrint("얍", ()=>{
//     //     console.log("프린트 끝");
//     // }, ()=>{
//     //     console.log("실패");
//     // });
//
//
//
//     // 비동기 처리 함수 2 : Promise 방식의 비동기 처리함수
//     function delayedPrint1(value) {
//
//         const promise = new Promise((resolve, reject) => {
//             let rand = Math.floor(Math.random() * 2000) + 1000;
//
//             setTimeout(() => {
//                 console.log(value);
//                 resolve();
//             }, rand);
//         });
//
//         return promise;
//
//     }
//
//     let pr = delayedPrint1("프로미스");
//
//     pr.then(()=>{
//        console.log("프로미스 성공");
//     });
//
//
//     // 비동기 처리함수 3 : async와 await를 이용한 동기식 호출이 가능하게 하기
//     function delayedPrint2(value) {
//
//         let pr = new Promise((after)=>{
//             let rand = Math.floor(Math.random() * 2000) + 1000;
//
//             setTimeout(() => {
//                 console.log(value);
//                 after();
//             }, rand);
//         })
//         return pr;
//     }
//
//
//     (async ()=>{
//         await delayedPrint2("await");
//         console.log("await 성공");
//     })();
//
//     // 비동기 처리 함수 4 : 서비스 함수 예
//     // 콜백
//     {
//         class Repository{
//             findAll(resove){
//                 var xhr = new XMLHttpRequest();
//                 xhr.withCredentials = true;
//
//                 xhr.onload = function () {
//                     const list = JSON.parse(this.responseText);
//                     resove(list);
//                 }
//
//                 let method = "GET";
//                 const url = `http://localhost:8080/api/menus`;
//
//                 xhr.open(method, url);
//                 xhr.send();
//
//             }
//         }
//
//         let repository = new Repository();
//         repository.findAll((list)=>{
//             // console.log(list);
//         });
//     }
//
//     // 프로미스
//     {
//         class Repository {
//             findAllPromise() {
//
//                 return new Promise((resolve) => {
//                     var xhr = new XMLHttpRequest();
//                     xhr.withCredentials = true;
//
//                     xhr.onload = function () {
//                         const list = JSON.parse(this.responseText);
//                         resolve(list);
//                     }
//
//                     let method = "GET";
//                     const url = `http://localhost:8080/api/menus`;
//
//                     xhr.open(method, url);
//                     xhr.send();
//
//                 });
//             }
//         }
//
//         let repository = new Repository();
//         let promise = repository.findAllPromise();
//
//         promise
//             .then((list)=>list[0])
//             .then((menu)=>menu.korName)
//             .then((name)=>{
//                 console.log(name);
//             })
//     }
//
//     // 동기적으로
//     {
//         class Repository {
//             findAllPromise() {
//
//                 return new Promise((resolve) => {
//                     var xhr = new XMLHttpRequest();
//                     xhr.withCredentials = true;
//
//                     xhr.onload = function () {
//                         const list = JSON.parse(this.responseText);
//                         resolve(list);
//                     }
//
//                     let method = "GET";
//                     const url = `http://localhost:8080/api/menus`;
//
//                     xhr.open(method, url);
//                     xhr.send();
//
//                 });
//             }
//         }
//
//         async function printList() {
//             let repository = new Repository();
//             let list = await repository.findAllPromise();
//             console.log("printlist",list);
//         }
//         printList();
//
//     }


    // async findAllPromiseAsync() {
    //     return await fetch("/api/menus");
    // }

    // let repository = new Repository();
    // let list = repository.findAllPromiseAsync();
    // console.log("findAllPromiseAsync", list);
//
//     //fetch
    {
        class Repository {
            findAllPromise() {
                return fetch("/api/menus", );
            }
        }

        async function printList() {
            let repository = new Repository();
            let response = await repository.findAllPromise();
            let list = await response.json();//얘도 비동기
            console.log("fetch",list);
        }
        printList();

        let repository = new Repository();
        let promise = repository.findAllPromise();

        promise
            .then((reponse)=>reponse.json())
            .then((list)=>{
                console.log("then : ", list);
            });
    }

// }
//

//Module
import m1test1, {test2} from 'gm';
import m2test1, {test2 as m2test2} from 'gb';

{
    m2test2();
    m1test1();

    let r = 1;
    // if(r == 1){
    //     import('./module1.js')
    //         .then(({test2})=>{
    //             test2();
    //         });
    // }
    //
    // if(r == 1){
    //     import('./module2.js')
    //         .then(m=>{
    //             m.test2();
    //             m.test3();
    //         });
    // }

    if(r == 1){
        import('gb')
            .then(({test3,test2})=>{
                test2();
                test3();
            });
    }
}

// window.addEventListener("load", function (e){
//
//     // btn = document.querySelector(".n-btn");
//     e.target.onclick = function (e) {
//         if(e.target.className === 'n-btn')
//             e.target.textContent = '바뀜';
//     }
//
// })
