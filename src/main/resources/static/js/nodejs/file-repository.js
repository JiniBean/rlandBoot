const fs = require('fs');
function findAll(path, {typeName, fileName}) {

    if (typeName){
        let list = fs
            .readdirSync(path, {withFileTypes:true})
            .filter(item => item.isDirectory())
            .map(item => item.name);

            // .filter(fileName => fileName.endsWith(typeName))
            // .map(fileName => fileName.replace(".js",''))
            // .reduce((pre , curItem) => pre + curItem.length, 0 );
                 /* pre: 앞에서 집계한 값  curItem: 현재 집계한 값  0 : 초기값 */

        // let listFiltered = list.filter(fileName => fileName.endsWith(typeName)); //필터로 걸러서 껴줄지 말지 정함
        // let listF = list.filter(fileName=>fileName.length>5)
        // let listMapped = list.map(fileName => `<${fileName}>`); // 맘대로 변환하기
        // let listMapped = list.map(fileName => fileName.replace(".js",''));
        return list;
    }

    // return list;
}

//exports 의 속성으로 추가 하는 것
exports.findAll = findAll;