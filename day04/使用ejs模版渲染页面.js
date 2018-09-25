const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views','ejs-page');
app.get('/',(req , res) => {
    res.render('./index.ejs',{name:'zs',age:18,hobby:['打游戏','看漫画','读小说']});
})
app.listen(3000,() => {
    console.log('服务器启动了'); 
})