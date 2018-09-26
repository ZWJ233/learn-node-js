const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const app = express();
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mysql01'
})
app.use(bodyparser.urlencoded({extended:false}));
// 1.创建mysql数据库并通过node安装mysql模块
// app.get('/',(req ,res ) => {
//     res.send('ok');
// })

// 2.sql语句的增删改查
// 3.练习req.query获取get请求的参数
// 4.练习req.params获取路由参数
// 5.练习req.body获取post请求的参数
//增
app.post('/addhero',(req , res) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    const hour = date.getHours().toString().padStart(2,'0');
    const minute = date.getUTCMinutes().toString().padStart(2,'0');
    const second = date.getSeconds().toString().padStart(2,'0');
    const hero = req.body;
    hero.ctime = year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second;
    const sql = "insert into heros set?"
    conn.query(sql , hero , (err , result) => {
        if(err) res.send({status:500,msg:err.message,data:null});
        res.send({status:200,msg:'添加成功'});
    })
})
//删
app.get('/deletehero/:id',(req , res) => {
    //第一种get方法
    //const id = req.query.id;
    //第二种get方法
    const id = req.params.id;
    const sql = "delete from heros where id=?";
    conn.query(sql , id , (err , result) => {
        if(err) res.send({status:500,msg:err.message,data:null});
        res.send({status:200,msg:'删除成功'});
    })
})
//改
app.post('/updatehero',(req ,res ) => {
    const hero = req.body;
    const id = req.query.id;
    const sql = "update heros set? where id=?"
    conn.query(sql , [hero,id] ,(err , result) => {
        if(err) res.send({status:500,msg:err.message,data:null});
        res.send({status:200,msg:'修改成功'});
    })
})
//查
app.get('/gethero/:id',(req ,res) => {
    const id = req.params.id;
    const sql = "select * from heros where id=?";
    conn.query(sql , id ,(err , result) => {
        if(err) res.send({status:500,msg:err.message,data:null});
        res.send(result);
    })
})

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})