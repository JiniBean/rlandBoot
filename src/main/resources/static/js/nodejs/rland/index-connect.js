const connect = require("connect");
const path = require('path');
const serverStatic = require('serve-static');
const app = connect();
app.listen(80);

app.use(serverStatic(path.join(__dirname, 'public')))
app.use("/index", (req, res) =>{
    res.end("index page");
    console.log(path.join(__dirname, 'public'))
});

app.use("/menu/list", (req, res)=>{
    res.end("menu list page");
});

console.log("서버가 80번 포트로 시작되었습니다");