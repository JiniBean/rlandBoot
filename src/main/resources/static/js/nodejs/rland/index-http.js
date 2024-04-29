const http = require("http");
http.createServer((req, res) => {

    console.log("hehe");
    res.write("hahaha");
    res.end();
}).listen(80);

// server.on("request", ()=>{
//     console.log("hehe");
//
// });
//
// server.listen(80);
