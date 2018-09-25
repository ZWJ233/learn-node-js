//使用控制台指令 npm install ejs -S 安装到项目文件夹内
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','ejs-page');
app.get('/',(req , res ) => {
    res.render('./index.ejs',{name:'zs',age:18,gender:'男',hobby:['打游戏','敲代码','看小说','看动漫']})
})

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})