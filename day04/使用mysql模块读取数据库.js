const express = require('express');
const app = express();
const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mysql01'
})
//查
// const sql = "select * from users";
// conn.query(sql, (err , result) => {
//     if(err) return console.log(err.message)
//     console.log(result);
// })

//增
// const sql = "insert into users set?"
// const user = {username:'LS',age:20,gender:'女'}
// conn.query(sql, user, (err , result) => {
//     if(err) return console.log(err.message)
//     console.log(result);
// })

//改
// const sql = "update users set ? where id=?"
// //第二个实参必须和sql语句的问号对应
// const user = {id:2,username:'LS',age:19,gender:'女'};
// conn.query(sql,[user,user.id],(err,result) => {
//     if(err) return console.log(err.message)
//     console.log(result);
// })
// app.listen(3000,() => {
//     console.log('server running at http://127.0.0.1:3000')
// })

//删
const sql = "delete from users where id=?"
conn.query(sql,3,(err,result) => {
    if(err) return console.log(err.message)
    console.log(result);
})