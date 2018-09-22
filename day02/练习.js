
// fs.stat 查看文件的相关信息

// var fs = require('fs');
// fs.stat(__dirname,(err,stats) => {
//     if(err) return console.log(err.message);
//     console.log(stats);
// })

// 处理成绩案例

// const fs = require('fs');
// fs.readFile(__dirname + '/成绩.txt','utf8',(err , data) => {
//     if(err) return console.log(err.message);
//     console.log(data);
//     console.log(data.split(' '));
//     var arr = data.split(' ');
//     var score = '';
//     arr.forEach((item, index) => {
//         if(item){
//             var arr1 = item.split('=');
//             console.log(arr1);
//             var str = arr1.join(':');
//             console.log(str);
//             score += str + '\n';
//             console.log(score);
//         }
//     });
//     fs.writeFile(__dirname + '/成绩.txt',score.trim(),err => {
//         if(err) throw err;
//         console.log('成绩编入成功');
//     })
// })

//path.join的使用

// const path = require('path');
// const fs = require('fs');
// console.log(1);
// const result = path.join('C:/','sddasd','/dsad','/dsadd');
// console.log(result);

//path.sep的使用(路径的分隔符)

//path.basename的使用(获取目录中的文件名)

//path.dirname的使用(获取文件的所在的路径)

//path.extname的使用(获取文件的扩展名)



