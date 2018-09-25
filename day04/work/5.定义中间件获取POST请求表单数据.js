const express = require('express');
const queryString =require('querystring');
const app = express();
//应用级别的中间件
app.use((req , res ,next) => {
    let data = '';
    req.on('data',chunk => {
        data += chunk;
    })
    req.on('end',() => {
        // console.log(data);
        const dataString = queryString.parse(data);
        // console.log(dataString);
        req.getData = dataString;
        console.log(req.getData);
        next();
    })
})
app.get('/',(req , res) => {
    res.sendFile('./text.html',{root : __dirname});
})
app.post('/postData',(req , res) => {
    console.log(req.getData);
    res.send(req.getData);
})
app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})