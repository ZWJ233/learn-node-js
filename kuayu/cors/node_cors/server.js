const express = require('express')

const app = express()
app.all('*',function(req,res,next){
    // Access-Control-Allow-Origin' header
    res.header('Access-Control-Allow-Origin','*')
    next()
})

app.get('/getheors', (req, res) => {
    console.log('88888888')
    res.send({err: 0, data: ['龙哥', '卅导']})
})

app.listen(5556, () => {
    console.log(`http://127.0.0.1:5556`);
});