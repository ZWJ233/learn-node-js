const express = require('express');
const router = express.Router();
router.get(['/index','/'],(req , res) => {
    res.sendFile('./public/index.html',{root:__dirname});
})
router.get('/about',(req , res) => {
    res.sendFile('./public/about.html',{root:__dirname});
})
router.get('/animate',(req , res) => {
    res.sendFile('./public/animate.html',{root:__dirname});
})
module.exports = router;