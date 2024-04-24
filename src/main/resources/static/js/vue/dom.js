window.addEventListener("load", function () {
    const section = document.querySelector("#form-section");
    const xInput = section.querySelector("input[name='x']");
    const yInput = section.querySelector("input[name='y']");
    const initSubmit = section.querySelector("input[value='초기화']");
    const calcSubmit = section.querySelector("input[value='계산하기']");

    // let x = 3;
    // let y = 4;
    //
    // xInput.value = x;
    // yInput.value = y;

    calcSubmit.onclick = (e) =>{
        let x = parseInt(xInput.value);
        let y = parseInt(yInput.value);

        const result = section.querySelector(".result");
        result.textContent = x+y;

        e.preventDefault();
    }
});
