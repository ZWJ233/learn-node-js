const express = require('express');
const app = express();
//get请求第一种参数传递
// app.get('/',(req, res) => {
//     console.log(req.query);
//     res.send('ok');
// })

//get请求第二种参数传递
app.get('/:name/:age',(req , res) => {
    console.log(req.params);
    res.send('ok');
})


app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})