const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('dfgh')
})
app.get('/ddd' , (req, res) => {
    res.send('<h1>88888888</h1>')
})
app.get('/jsonp', (req, res) => {
    let f = req.query.callback  // 拿到了前端传递给我的函数名字
    console.log(f)
    var data = {name: 'tc', desc: '洗脚，扣脚趾甲'}
    data = JSON.stringify(data)
    res.send(f + "("+data+")")
})
app.listen(5555, () => {
    console.log(`http://127.0.0.1:5555`);
});