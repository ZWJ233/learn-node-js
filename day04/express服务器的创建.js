const express = require('express');
const app = express();
const path = require('path');
//app.get方法


// app.get(['/','/index'],(req , res) => {
//     // res.send('getData');
//     // res.sendFile(path.join(__dirname,'./index.html'));
//     res.sendFile('./public/index.html',{root:__dirname});
// })
// app.get('/about',(req , res) => {
//     res.sendFile('./public/about.html',{root:__dirname});
// })


// app.use第一种使用 直接托管一个文件夹目录
// app.use(express.static('./public'));

// app.use第二种使用 给托管的文件夹设置一个虚拟目录
app.use('/love',express.static('./public'));

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000');
})