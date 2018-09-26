const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mysql01'
})
app.get('/gethero/:id',(req , res) => {
    const id =req.params.id;
    const sql = "select * from heros where id=?"
    conn.query(sql , id ,(err, result) => {
        if(err) return res.send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})
app.post('/addhero',(req , res ) => {
    const hero = req.body;
    const dt = new Date();
    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1).toString().padStart(2,'0');
    const d = dt.getDate().toString().padStart(2,'0');
    const hh = dt.getHours().toString().padStart(2,'0');
    const mm = dt.getMinutes().toString().padStart(2,'0');
    const ss = dt.getSeconds().toString().padStart(2,'0');
    hero.ctime = y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss;
    console.log(hero.ctime)
    const sql = "insert into heros set?"
    conn.query(sql , hero ,(err , result) => {
        if(err) return res.send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})
app.get('/getallhero',(req ,res) => {
    const sql = "select * from heros"
    conn.query(sql,(err , result) => {
        if(err) return res.send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})
app.get('/',(req , res) => {
    res.send('请求后台API成功!')
})

app.listen(5000,() => {
    console.log('server running at http://127.0.0.1:5000');
})