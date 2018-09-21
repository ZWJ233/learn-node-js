// let a = 11;
// console.log(a);
// a = 12;
// console.log(a);
// const d = 10;
// console.log(d);
// let user={
//     name:'zs',
//     age:20,
//     gender:'男'
// }
// const {name:username,age:userage,gender}=user
// console.log(username);
// console.log(userage);
// console.log(gender);




// 箭头函数
// var btn = document.getElementById('btn');
// console.log(btn);
// btn.onclick = function(){
//     setTimeout(() => {
//         this.style.backgroundColor = 'yellow';
//     },1000)
// }



//完整版

// var add = (x,y) => {
//     return x + y;
// }
// console.log(add(1,2));
// 变体1

// var add1 = x => {
//     return x +20;
// }
// console.log(add1(1));

// 变体2

// var add2 = (x,y) => x+y;
// console.log(add2(1,2));

// 变体3

// var add3 = x => x+20;
// console.log(add3(1));



// node组件读取文件

const fs = require('fs');

// fs.readFile('./files/1.txt','utf-8',function(err,data){
//     if(err) return console.log('读取文件失败'+err.message);
//     console.log('读取文件成功' + data);
// })

fs.readFile(__dirname+'/files/1.txt','utf-8',(err,data) => {
    if(err) return console.log('读取文件失败'+err.message);
    console.log('读取文件成功' + data);
})

fs.writeFile(__dirname+'/files/2.txt','ZWJ233',err => {
    if(err) return console.log('写入文件失败'+err.message);
    console.log('写入文件成功');
})

fs.appendFile(__dirname+'/files/3.txt','\n333',err => {
    if(err) return console.log('添加内容失败' + err.message);
    console.log('添加内容成功');
})
var str = '天成真骚';
fs.copyFile(__dirname+'/files/3.txt',__dirname+'/files/copy.txt',err => {
    if(err) return console.log('复制失败');
    console.log(`复制成功${str}`)
})

//绝对路径 __dirname当前操作的文件的路径
fs.copyFile(__dirname+'/files/2.txt',__dirname+'/files/copy1.txt',err => {
    if(err) return console.log('复制失败');
    console.log(`复制成功${str}`);
})

