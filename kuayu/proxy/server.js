const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.static('./public'))

app.get('/juhe', (req, res) => {
    // res.send('dfgh')
    axios.get('http://v.juhe.cn/dream/query?key=a3bad6b379879791d5de72c98ea9e88d&q=%E7%BE%8E%E5%A5%B3')
    .then(function (response) {
        var data = response.data
        console.log(data)
        res.send(data)
    })
})

app.listen(5558, () => {
    console.log(`http://127.0.0.1:5558`);
});