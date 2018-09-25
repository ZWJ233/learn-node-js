const express = require('express');
const app = express();


app.get(['/index','/'],(req , res) => {
    // res.send(['打游戏','看漫画','敲代码','看小说']);
    res.send({name:'zs',age:18,gender:'男',hobby:['打游戏','看漫画','敲代码','看小说']})
})


app.listen(3000,() => {
    console.log('server runnung at http://127.0.0.1:3000');
})