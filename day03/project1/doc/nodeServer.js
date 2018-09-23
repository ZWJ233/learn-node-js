const http = require('http');
const server = http.createServer();
const fs = require('fs');
const path = require('path');
server.on('request',(rad , res) => {
    let url = rad.url;
    if(url.indexOf('html') !== -1){
        res.writeHeader(200,{
            'Content-Type':'text/html; charset=utf-8'
        });
    }else if(url.indexOf('css') !== -1){
        res.writeHeader(200,{
            'Content-Type':'text/css; charset=utf-8'
        });
    }else if(url.indexOf('js') !== -1){
        res.writeHeader(200,{
            'Content-Type':'text/script; charset=utf-8'
        });
    }
    console.log(url);
    readFile(url , res);
})
server.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000');
})
var readFile = (url , res) => {
    fs.readFile(`../public${url}`,(err , data) => {
        if(err) return res.end('请求页面失败或页面不存在');
        res.end(data);
    })
}