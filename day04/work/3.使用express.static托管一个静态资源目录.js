const express = require('express');
const app = express();

app.use(express.static('public'));



app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000');
})