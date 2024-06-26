// Arrow Function
{
    // Arrow Function을 사용하는 용도는 이렇게 코드를 전달해야 하는 경우를
    // 간결하게 하기 위한 표기법으로 출발했다.
    {
        let arr = [2,3,45,2,1,2,3];
        arr.sort((a,b)=>a-b);
        console.log(arr);
        arr.sort((a,b)=>b-a);
        console.log(arr);
    }

    {
        let arr = [[2,3],[45,2],[1,2,3]];
        // arr.sort((a,b)=>a[0]-b[0]);
        // console.log(arr);
        arr.sort((a,b)=>b[0]-a[0]);
        console.log(arr);
    }

    // 하지만... 꼭 그렇게만 볼 것이 아니라 유연하게 사용해야 할 것
    // 그러기 위해서라도 차이점을 알아야 하지 않을까? 요?
    // 차이점 :
    // *1. this, super 가 없다(생성자 또는 멤버 메소드로 사용될 수 없다.)
    // 2. arguments 콜렉션이 없다.(코드를 나누는 역할자로 사용하지 않는다.)
    // 3. new.target이 없다. new 연산자로 생성할 수 없다.
    let exam = {
        kor:10,
        eng:20,
        // total:function(){
        //     return this.kor+this.eng;
        // }
        // 퀴즈 1 : 함수를 Arrow Function으로 바꿀 수 있을까?
        total:()=>{
            return this.kor+this.eng;
        },
        delayedPrint(){ // exam.delayedPrint() 이 때는 this가? exam 이다.
            // 3초뒤 다음 callback 호출되면 this.kor가 undefined 가 나온다.
            // 그 이유는 함수만 호출했기 때문에 누가? 넘겨 받는 애(setTimeout)가
            // setTimeout(function(){
            //     console.log("delayed .. call", this.kor, this);
            // }, 3000);
            // 그 대안으로 bind() 메소드를 사용할 수 있지만
            // setTimeout(function(){
            //     console.log("delayed .. call", this.kor, this);
            // }.bind(this), 3000);
            // 그 보다는 Arrow Function을 사용하면 깔끔하게 처리할 수 있다.
            setTimeout(()=>{
                console.log("delayed .. call", this.kor, this);
            }, 3000);

            let f1 = function(){
                console.log(this);
            }

            // 위에 setTimeout이 3초 뒤 호출하는 모양은 어떤 모양인가?
            // 1. f1(); // this->window
            // 2. exam.f1(); // 이렇게 호출하면 this->exam
            // 3. f1().apply(exam); // this->exam

        }
    };

    // 예제 1 : 메소드로 사용할 수 있나?
    // this가 있다는 말은 total() 메소드를 호출할 때 exam을 this로 받는다는 것을 말하는 것이다.
    // Arrow Function은 그것(exam)을 안 받는다 아니 못 받는다.
    // 따라서 total() 메소드의 연산은 undefined+undefined가 되어서 NaN이 된다.
    console.log(exam.total());

    // 예제 2 : 일반 함수로 사용할 수는 있나?
    {
        // function add(a, b){
        //     console.log("add arguments length : ", arguments.length); // 나머지 값도 처리 할 수 있다.
        //     return a+b;
        // }

        // this 쓸일 없고 객체와 관련된 일이 아니라면 코드가 깔끔하고 더 좋아 보인다.
        // 오히려 this를 사용할 수 없던 고전적인 함수를 구현할 때로 돌아간 느낌이라
        // 앞으로는 순수 함수가 필요할 때는 이걸로 ...:-)
        let add = (a, b, ...args)=>{
            //console.log("add arguments length : ", arguments.length); // 나머지 값도 처리 할 수 있다.
            console.log("rest arguments length : ", args.length); // 나머지 값도 처리 할 수 있다.
            return a+b;
        }

        console.log("add(3,4,5):", add(3,4,5));
    }

    // 예제 3 : Arrow Function을 사용해야 하는 경우
    console.log(exam.delayedPrint());


    // 추가적인 내용 apply, call, bind 메소드의 용법과 차이
    // 자바스크립트에서 function을 호출하면서 객체를 전달하는 방법을 제공한다.
    function total(a,b){
        console.log("in total", a);
        return this.kor+this.eng;
    }
    // 이렇게 호출된 total에서의 this는 window 객체가 된다.
    console.log("total", total());
    // total을 호출하면서 this로 사용할 객체를 전달할 수 있다.
    // 방법 1 : apply를 사용하는 방법
    console.log("apply total", total.apply(exam,["hello","hihi"]));
    // 방법 2 : call을 사용하는 방법
    console.log("call total", total.call({kor:100, eng:90},"good","hi"));
    // 방법 3 : bind를 사용하는 방법
    // 위의 1, 2 방법은 내가 함수를 호출하는 입장일 때이지만
    // 호출을 부탁(위임)하는 경우에 객체를 지정하고 싶다면
    // 예를들어 내가 callback 함수를 작성해서 위임하는 경우
    let aa = {
        name:"짜장면",
        closeCallack(){
            console.log("자장면 이름:",this.name);
        }
    }

    let onclose = aa.closeCallack.bind(aa);

    // 호출자는 어떻게 호출하지? 그냥 위임받은 함수를 참조하는 변수를 이용해서 call 하겠지?
    onclose();


}


// Default value
{
    function getCount(){
        return 3; // 쿠키, 로컬 저장소, 원격 데이터, ...
    }

    function add(x,y=10, z=getCount(), a=z+1){
        console.log(x+","+y+","+z, ","+a);
        // 기본 값으로 사용된 y는 카운트 될까?
        console.log("arguments length:", arguments.length);

        // 퀴즈 2: 전달된 arguments의 콜렉션에 담긴 값은 별칭 인자의 값이 바뀌면 같이 바뀔까?
        console.log(
            "인자 값을 바꾸기 전 : ",
            x == arguments[0],
            x === arguments[0],
            y == arguments[1],
            y === arguments[1]
        );

        x = 50;
        y = 60;
        console.log(
            "인자 값을 바꾼 후 : ",
            x == arguments[0],
            x === arguments[0],
            y == arguments[1],
            y === arguments[1]

        );
    }

    // null은 값으로 인식할까?
    console.log(
        add(3, 4)
        // add(2) // 퀴즈 2를 위한 호출
        // 이하 퀴즈 1을 위한 호출
        //add(10,null,30)
        //, add(10,undefined,30) // undefined로 전달되서 y는 기본 값을 갖는데 그럼 aruguments length는?
        //, add(10) // 인자의 수를 하나만 전달 -> arguments length : 1
    );

    // 퀴즈 1: 전달되지 않은 기본 값은 arguments 개수에 잡힐까?
    // 함수에 console.log("arguments length:", arguments.length)를 추가해보자.



}

// Rest Parameters & Spread Operator
{
    // 나머지 값만 따로 담아주면 안돼?어? 안돼? 안되겠니? 어? 엉?
    function sum(n1, n2, ...args){
        let result = 0;
        // 나머지 출력
        // let length = arguments.length-2;
        // for(let i=0; i<length; i++)
        //     console.log(arguments[i+2]);
        for(let arg of args)
            console.log(arg);

        return n1+n2;
    }

    console.log("sum:", sum(2,3));
    console.log("sum:",sum(2,3,5,3,2,3,4));

    let kors = [20,40,20];
    // spread~~~ by myself
    console.log("sum3:", sum(kors[0],kors[1]));
    // spread~~ auto
    console.log("sum3:", sum(...kors));
    let arr1 = [2,3,4];
    // let arr2 = [6,5,arr1];
    // arr2[2] // 2? or [2,3,4]?
    let arr2 = [6,5,...arr1];
    console.log("arr2:",arr2);
}

// Advanced JSON #1 Array Destructuring
{
    //undefined undefined (3) [10, 20, 50]
    // let kor1, kor2, kor3 = [10,20,50];

    // 10 20 50
    // let [kor1, kor2, kor3] = [10,20,50];
    // let [kor1, kor2/*, kor3*/] = [10,20,50];
    // let [kor1, /*kor2*/, kor3] = [10,20,50];

    let arr = [10,20,50];
    let [kor1, ,kor3] = arr;
    arr[0] = 60;
    // 배열의 값을 다시 대입
    [kor1,,kor3] = arr;
    console.log(kor1, kor3);

    // swap
    let x = 3;
    let y = 5;

    console.log("before", x, y);
    // let t = x;
    // x = y;
    // y = t;
    [x,y,z=100] = [y,x];
    console.log("after", x, y);
    console.log("z", window.z);

    let list = {
        count:10,
        list:[
            {id:1, title:"hello"},
            {},
            {}
        ]
    };



}

// Advanced JSON #4-2 Object Destructuring : Nested
{
    let exam = {kor:20,eng:30,math:40,student:{id:1,name:'홍길동'}};

    //let name = exam.student.name;
    let {kor, student:{name}} = exam;

    console.log(kor, name);
}
// Advanced JSON #4-1 Object Destructuring : aliasing, matching, changing, ...
{
    function print({kor, eng:english/*, math*/, com=90}){

        let total = kor+english/*+math*/+com;

        console.log(kor, english, `com:${com}`, total);
    }

//    print({kor:10,eng:30,math:40});
    let exam1 = {kor:10,eng:30,math:40};
    let {kor, eng} = exam1;
    exam1.kor++;
    exam1.eng+=2;

    ({kor, eng} = exam1);

    console.log(exam1, {kor, eng});

}

// Advanced JSON #4 Object Destructuring
{
    //function print(exam){
    function print({kor, eng, math}){
        // let total = exam.kor+exam.eng+exam.math;
        // console.log(exam.kor, exam.eng, total);

        // 낱개로 뽀개기(Destructuring)
        // let kor = exam.kor;
        // let eng = exam.eng;
        // let math = exam.math;

        // let {kor, eng, math} = exam;

        let total = kor+eng+math;
        console.log(kor, eng, total);
    }

    print({kor:10,eng:30,math:40});
}

// Advanced JSON #3 Computed Property
{
    let col = "kor";
    let eng = 40;
    let math = 100;

    let exam = {
        [col]:10,
        eng,
        math,
        total(){
            return this.kor+this.eng+this.math;
        }
    };
    console.log(exam.kor, ",", exam.eng, ",", exam.total());
}

// Advanced JSON #2 function
{
    let kor = 30;
    let eng = 40;
    let math = 100;

    // let exam = {
    //     kor:kor,
    //     eng:eng,
    //     math:math
    //     total:function(){}
    // };

    let exam = {
        kor,
        eng,
        math,
        total(){
            return this.kor+this.eng+this.math;
        }
    };
    console.log(exam.kor, ",", exam.eng, ",", exam.total());
}

// Advanced JSON #1 variable
{
    let kor = 30;
    let eng = 40;
    let math = 100;

    // let exam = {
    //     kor:kor,
    //     eng:eng,
    //     math:math
    // };

    let exam = {kor, eng, math};
    console.log(exam.kor, ",", exam.eng);
}