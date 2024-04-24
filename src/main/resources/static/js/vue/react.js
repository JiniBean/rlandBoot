// ReactDOM.render(
//     <span></span>,
//     // document.getElementById("title")
//     document.querySelector("#title")
// );
let clickHandler = function (e) {
    e.preventDefault();
    console.log("a");
}

let calc = function () {
    return <section>
        {/*<!--    이야 계산기-->"*/}
        <h1>덧셈 계산기</h1>
        <form>
            <fieldset>
                <legend>계산기 입력폼</legend>
                <div>
                    <label>x:</label>
                    <input dir="rtl" name="x" value="x"/>
                    <label>y:</label>
                    <input dir="rtl" name="y" value="y"/>
                    <span>=</span>
                    <span>0</span>
                    <span>{hello}</span>
                </div>
                <hr/>
                <div>
                    <input type="submit" name="cmd" value="초기화"/>
                    <input onClick={clickHandler} type="submit" name="cmd" value="계산하기"/>
                </div>
            </fieldset>
        </form>
    </section>
}
let hello = 'hello';

ReactDOM.render(calc,
    document.querySelector("#root")
);