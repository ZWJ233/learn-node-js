const express = require('express');
const app = express();


app.get(['/','/index'],(req , res ) => {
    res.sendFile('./public/index.html',{root : __dirname});
})




app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000');
})