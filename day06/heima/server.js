const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/node_modules', express.static('./node_modules'))
app.get('/',(req,res) => {
    res.render('index.ejs')
})
app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})