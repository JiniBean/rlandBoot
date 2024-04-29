let repository = require('./file-repository');
const fs = require('fs');
let newlec = require('newlec-hello');

console.log(newlec.hello());
// console.log("안녕 나는");

// console.log(repository.findAll("./",{}));
let dirList = repository.findAll("../", {typeName:".js"});
console.log(dirList.toString());
let csv = dirList.join(",");

fs.writeFileSync("./foldList1.txt", dirList.toString());

