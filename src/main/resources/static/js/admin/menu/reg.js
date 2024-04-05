function InputFileList(input) {
    this.input = input;
}
InputFileList.prototype = {
    add:function (file) {
        var dt = new DataTransfer();
        var files = this.input.files;

        //이전에 input에 있던 파일들 옮겨담기
        for(var i of files)
            dt.items.add(i);

        //파일 새로 추가하기
        dt.items.add(file);

        //input의 파일리스트 = 이전에 있던 파일 + 새로 담은 파일
        this.input.files = dt.files;

    }
}

window.addEventListener("load", function (){

    var regForm = document.querySelector("#reg-form");
    var imgInput = regForm.querySelector(".img-input");
    var preview = regForm.querySelector(".preview");

    var imgLabel = regForm.querySelector(".img-label");

    imgLabel.ondragenter = function (e) {

        imgLabel.classList.add("bd");
        imgLabel.classList.add("bd-color:main-1");

        console.log("드래그 엔터");
    }

    imgLabel.ondragleave = function (e) {
        imgLabel.classList.remove("bd");
        imgLabel.classList.remove("bd-color:main-1");
        imgLabel.classList.remove("valid");
        imgLabel.classList.remove("invalid");
    }

    imgLabel.ondragover = function (e){
        e.stopPropagation();
        console.log("over");
        e.preventDefault();

        var valid = e.dataTransfer &&
                    e.dataTransfer.types &&
                    e.dataTransfer.types.indexOf("Files") >=0;

        if(valid){
            imgLabel.classList.add("valid");
        }
        else
            imgLabel.classList.add("invalid");

    }

    imgLabel.ondrop = function (e) {
        e.stopPropagation();
        e.preventDefault();

        // for (var k in e.dataTransfer)
        //     console.log(k);
        // console.log(e.dataTransfer.types);
        var idx = 0;

        var files = e.dataTransfer.files;
        var file =  e.dataTransfer.files[idx++];

        // new InputFileList(imgInput).add(files);
        new InputFileList(imgInput).add(file);

        // imgInput.files = e.dataTransfer.files;


        //타입 제약
        if(file.type.indexOf("image/")!=0){
            alert("img만 업로드 가능");
            return;
        }
        console.log(file.type);

        //크키 제약
        if(file.size > 200*1024){
            alert("파일 크기 부적절");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {

            var img = document.createElement("img");
            img.src = e.target.result;

            preview.append(img);
            setTimeout(() =>{
                img.classList.add("fade-in");
            }, 10);

        };
        reader.readAsDataURL(file);



        // for(var f of e.dataTransfer.files){
        //     imgInput.files.add(f);
        //     console.log(f);
        // }
        // imgInput.files.add(e.dataTransfer.files);

    }



    imgInput.oninput = function () {
        // for(var k in imgInput)
        //     console.log(k);
        //
        // console.log("==============================")
        //
        // for(var k in imgInput.files[0])
        //     console.log(k);
        // alert("hello");
        //
        // console.log(imgInput.files[0].name);

        var idx = 0;
        var file = imgInput.files[idx++];


        //타입 제약
        if(file.type.indexOf("image/")!=0){
            alert("img만 업로드 가능");
            return;
        }
        console.log(file.type);

        //크키 제약
        if(file.size > 200*1024){
            alert("파일 크기 부적절");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {

            var img = document.createElement("img");
            img.src = e.target.result;

            preview.append(img);
            setTimeout(() =>{
                img.classList.add("fade-in");
            }, 10);

        };
        reader.readAsDataURL(file);
    }


});
