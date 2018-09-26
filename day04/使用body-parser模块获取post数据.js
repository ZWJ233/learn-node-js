const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.post('/',(req , res) => {
    console.log(req.body);
    res.send('ok');
})

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})