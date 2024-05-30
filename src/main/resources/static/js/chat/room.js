window.addEventListener("load", function () {
    const chatWindow = document.querySelector("#chat-window");
    const connButton = chatWindow.querySelector(".btn-conn");
    const ul = chatWindow.querySelector("ul");

    const nameInput = chatWindow.querySelector(".input-name");
    const msgInput = chatWindow.querySelector(".input-msg");
    const msgButton = chatWindow.querySelector(".btn-msg");

    let sock = null

    const TYPE_CONNECT = 1;
    const TYPE_MSG = 2;


    connButton.onclick = function (){
        //주소기반으로 리스닝 하고있긴 하지만 TCP 기반임 -> 연결형 -> 개별 소켓에 대한 포트를 브라우저가 만들어줌
        //포트는 웹서버 포트를 씀
        //접속한 사람이 다 같이 여기를 쓰게하고싶으면 한 url로
        //목적이 같지만 개별 채팅방이라면 분류를 해줘야 함
        // sock = new WebSocket("ws://localhost:8080/chat");
        sock = new WebSocket("ws://www.ginong.co.kr/chat");
        // sock = new WebSocket("ws://192.168.0.75:8080/chat");

        sock.onopen = ()=>{
           let data= {type:TYPE_CONNECT, username:nameInput.value}

           sock.send(JSON.stringify(data));

           let li = `<li>서버에 접속 되었습니다.</li>`
           ul.insertAdjacentHTML("beforeend", li);
           msgInput.disabled =false;
           msgButton.disabled=false;
        };

        sock.onclose = ()=>{};

        sock.onmessage = (e)=>{
            // let li = `<li>${e.data.username}:${e.data.content}</li>`
            let message = JSON.parse(e.data);

            let name = message.username;
            let msg = message.content;

            console.log(name);
            console.log(msg);
            let li = `<li><span>${name}:</span>${msg}</li>`;
            ul.insertAdjacentHTML("beforeend", li);

        };
    }

    msgButton.onclick = function (e){
        if(!sock)
            return;

        let data= {type:TYPE_MSG, content:msgInput.value}
        sock.send(JSON.stringify(data));

        msgInput.value='';
        msgInput.autoFocus=true;


    }

})