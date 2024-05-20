window.addEventListener("load", function () {
    const chatWindow = document.querySelector("#chat-window");
    const connButton = chatWindow.querySelector(".btn-conn");
    const ul = chatWindow.querySelector("ul");

    const msgInput = chatWindow.querySelector("input[type=text]");
    const msgButton = chatWindow.querySelector(".btn-msg");

    connButton.onclick = function (){
        const sock = new WebSocket("ws://localhost/chat");
        sock.onopen = ()=>{
            let li = `<li>서버에 접속 되었습니다.</li>`
            ul.insertAdjacentHTML("beforeend", li);
            msgInput.disabled =false;
            msgButton.disabled=false;
        };
        sock.onclose = ()=>{};
        sock.onmessage = (e)=>{
            let li = `<li>${e.data}</li>`
            ul.insertAdjacentHTML("beforeend", li);
        };
    }
})