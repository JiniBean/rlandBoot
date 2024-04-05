//Advanced JSON #1 variable
{
    let kor = 30;
    let eng = 40;
    let math = 50;

    // es5
    // let exam ={
    //     kor:kor,
    //     eng:eng,
    //     math:math,
    //     total:function () {
    //
    //     }
    // };

    // es6
    let exam = {
        kor,
        eng,
        math,
        total: function () {

        }
    }

    // console.log(exam.kor,',', exam.math);
    // console.log(exam.total());
}


//Advanced JSON #2 function
{
    let kor = 30;
    let eng = 40;
    let math = 50;

    let exam = {
        kor,
        eng,
        math,
        total() {
            return this.kor + this.eng + this.math;
        }
    };
    // console.log(exam.kor,',', exam.math);
    // console.log(exam.total());
}


//Advanced JSON #3 Computed Property
{
    let col = "kor";
    let eng = 40;
    let math = 50;

    var exam = {
        [col]: 10,
        eng,
        math,
        total() {
            return this.kor + this.eng + this.math;
        }
    };


    // console.log(exam.kor,',', exam.math);
    // console.log(exam.total());
}


//Advanced JSON #4 Object Destructuring
{
    // function print(exam) {
    //
    //     // 낱개로 뽀개기
    //     let kor = exam.kor;
    //     let eng = exam.eng;
    //     let math = exam.math;
    //
    //     let total = kor + eng + math;
    //     console.log("뽀개기1 ", total);
    // }

    function print(exam) {

        //객체에 중첩된 연산은 바람직하지 않다
        // let total = exam.kor + exam.eng + exam.math;
        let {kor, eng, math} = exam;
        let total = kor + eng + math;
        console.log("뽀개기2 ", total);
    }

}

//Advanced JSON #4-1 Object Destructuring : aliasing, matching, changing
{
    //변수명 별칭주기
    function print({kor: hi, eng, math}) {

        let total = hi + eng + math;
        console.log("뽀개기3", total);
    }

    // print({kor:10, eng:20, math:40});


    //변수명 달라도 가능
    function print({kor, eng, math}) {

        let total = kor + eng + math;
        console.log("뽀개기4", total);
    }

    // print({shin:10, eng:20, math:40});


    //기본값처럼 줄 수 있음
    function print({kor, eng, math, com = 90}) {

        let total = kor + eng + math + com;
        console.log("뽀개기5", total);
    }

    // print({kor:10, eng:20, math:30});

    let exam1 = {kor: 10, eng: 20, math: 30}
    let {kor, eng} = exam1;
    exam1.kor++;
    exam1.eng += 2;

    // {kor, eng} = exam1; js에서는 중괄호가 의미가 없기 때문, 표현식이 아님
    ({kor, eng} = exam1); //명시적으로 해주는 것
    // console.log(exam1, {kor,eng});

}

//Advanced JSON #4-2 Object Destructuring : Nested
{
    let exam = {kor: 10, eng: 20, math: 30, student: ({id: 1, name: '은진'})}

    // let name = exam.student.name;
    let {kor, student: {name}} = exam;

    // console.log(kor, name);
}


//Advanced JSON #5 Array Destructuring
{
    // undefined undefined Array(3)[10,20,30]
    // let kor1, kor2, kor3 = [10,20,30];

    //10 20 30
    // let [kor1, kor2, kor3] = [10,20,30];
    // let [kor1, kor2] = [10,20,30];
    // let [kor1, ,kor3] = [10,20,30]; //가운데 자리는 비워둬야함

    let arr = [10, 20, 30];
    let [kor1, , kor3] = arr;
    arr[0] = 60;
    [kor1, , kor3] = arr; //배열은 소괄호 필요없음
    // console.log(kor1, kor3);

    //swap
    let x = 3;
    let y = 2;

    // let t = x;
    // x = y;
    // y = t;
    // console.log(x, y);

    [x, y, z = 10] = [y, x];
    // console.log(x, y, window.z);

}

//Advanced JSON #6 Rest Parameters & Spread Operator
{
    //나머지 값들
    function sum(n1, n2, ...args) {
        let reusult = 0;

        //나머지 출력
        // let length = arguments.length-2; //arguments 함수가 갖는 인자에 대한 컬렉션
        // for(let i=0; i<length; i++)
        //     console.log([i+2]);

        for (let a of args)
            console.log(a);

        return n1 + n2;
    }

    // console.log("sum : ", sum(1,2));
    // console.log("sum : ", sum(1,2, 4, 5 ,6));

    let kors = [10, 20, 30];
    // console.log(sum(kors)); //10,20,30 undefined
    // console.log(sum(kors[0], kors[1]));//spread
    // console.log(sum(...kors)); //auto

    let arr1 = [2, 3, 4];
    let arr2 = [6, 5, arr1];
    let arr3 = [6, 5, ...arr1];

    // console.log("arr2", arr2); //6,5,[2,3,4]
    // console.log("arr3", arr3); //6,5,2,3,4

}

//Advanced JSON #7 Default Value
{
    function getCount() {
        return 3;
    }

    function add(x, y = 10, z = getCount(), a = z) {
        let sum = x + y + z;
        console.log("아규먼트", arguments.length);
        console.log("인자 : ", x == arguments[0], x === arguments[0]); //true true(같은 객체였음)

        x = 50;
        console.log("인자 바꾼 후 : ", x == arguments[0], x === arguments[0]); //false false(다른 객체 됨)자바스크립트의 변수는 모두 참조변수이기 때문에 바꾸는 순간 다른 객체를 참조하게된다
        return sum;
    }

    // add(10, null, 20); //30 null은 값으로 안침
    // add(10,undefined,20); //40
    // add(10,10);


}


//Arrrow Function
{

    {
        let arr = [1, 9, 87, 10, 15, 33, 2];
        arr.sort((a, b) => a - b);
        console.log(arr); // 오름차순
        arr.sort((a, b) => b - a);
        console.log(arr); // 내림차순
    }

    {
        let arr = [[1, 9], [87, 10, 15], [33, 2]];
        arr.sort((a, b) => a[0] - b[0]);
        console.log(arr); // 오름차순
        arr.sort((a, b) => b[0] - a[0]);
        console.log(arr); // 내림차순
    }

    //함수와 차이점
    //1.this, super가 없다(새성자, 또는, 멤버, 메소드로 사용될 수 없다.)
    //2.arguments 콜렉션이 없다.(함수 모듈로 사용될 수 없다. 함수 지역화가 안된다. 함수를 이용한 코딩 영역으로 사용하는 것이 아니다)
    //3.new.target(생성한 놈)이 없다 new 연산자로 생성할 수 없다.


    let exam = {
        kor: 10,
        eng: 20,
        math: 10,
        total: () => {
            return this.kor + this.eng + this.math;
        },
        delay(){
            // let kor = this.kor
            //this.kor undefined 그 이유는 setTimeout이 호출한 콜백함수이기 때문에, setTimeout가 객체는 전달안해줌
            // setTimeout(function () {
            //     console.log("delay", this.kor);
            // }, 3000);

            //대안으로
            // setTimeout(function () {
            //     console.log("delay", this.kor);
            // }.bind(this), 3000);

            //추가내용 apply, call, bind  메소드의 용법과 차이
            // 자바스크립트에서 function을 호출 하며 객체 전달하는 방법

            setTimeout(()=>{
                console.log("delay", this.kor);
            }, 3000);
        }
    };
    // exam.delay().apply(exam); //bind나 둘중하나
    exam.delay();

    // this가 있다는 말은 total() 메소드를 호출할 때 exam을 this로 받는다는 것을 말하는 것이다.
    // Arrow Function은 그것(exam)을 안 받는다 아니 못받는다.
    // 따라서, total() 메소드의 연산은 undefined + undefined 가 되어 NaN이 출력된당! 꺄르릇
    console.log(exam.total());


    function total(a,b) {
        console.log("a : ", a);
        console.log("b : ", b);

        return this.kor + this.eng + this.math;
    }
    //this = window의 객체
    console.log(total());

    //total을 호출하며 객체를 전달한다 -> this로 쓸 수 있음
    //방법1
    console.log(total.apply(exam, ["hi", "good"])); //목록으로 전달 []
    //방법2
    console.log(total.call({kor:10, eng:10, math:10}, "good", "hi")); //나열하면 됨

    //위 방법은 내가 함수를 호출하는 입장이지만
    // 호출을 부탁(위임) 하는 경우 callback
    let a = {
        name: "짜장면",
        close() {
            console.log(this.name, "다됨");
        }
    }

    let onclose = a.close.bind(a);
    onclose();

    // 예제 2  : 일반 함수로 사용할 수는 있나?
    {
        // function add(a, b) {
        //     console.log(arguments.length); // 나머지 값도 처리할 수 있다.
        //     return a + b;
        // }

        // this 쓸일 없고 객체와 관련된 일이 아니라면 코드가 깔끔하고 더 좋아보임
        // 오히려 this가 없는 고전적인 함수 구현같은 느낌, 순수 함수가 필요할 땐 이걸로
        let add = (a, b, ...args) => {
            // console.log(arguments.length); // 나머지 값도 처리할 수 있다.
            console.log("args.length = ", args.length); // 나머지 값도 처리할 수 있다.
            return a + b;
        }

        // console.log("add(3,4,5) = ", add(3, 4, 5));
    }
}