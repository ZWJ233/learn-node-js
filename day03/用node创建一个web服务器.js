const http = require('http');
const fs =require('fs');
const path = require('path');
const server = http.createServer();

server.on('request',(rad , res) => {
    res.writeHeader(200,{
    'Content-Type':'text/html; charset=utf-8'
    })
    let url = rad.url;
    if(url == '/'){
        url = 'index.html';
    }
    readFileHtml(res , url);
//     if(rad.url == '/index.html' || rad.url == '/'){
//         fs.readFile(path.join(__dirname,'./project/index.html'),'utf-8',(err , data) => {
//             if(err) return console.log('读取页面失败');
//             res.end(data);
//         })
//     }else if(rad.url == '/animate.html'){
//         fs.readFile(path.join(__dirname,'./project/animate.html'),'utf-8',(err , data) => {
//             if(err) return console.log('读取页面失败');
//             res.end(data);
//         })
//     }else if(rad.url == '/about.html'){
//         fs.readFile(path.join(__dirname,'./project/about.html'),'utf-8',(err , data) => {
//             if(err) return console.log('读取页面失败');
//             res.end(data);
//         })
//     }else{
//         res.end('<h1>该页面没有数据</h1>');
//     }
})

server.listen(3000,['/index.html','/animate.html','/about.html'],() => {
    console.log('server running at http://127.0.0.1:3000');
})
// require('http').createServer().on('request',(raq , res) => {res.writeHeader(200,{'Content-Type':'text/html; charset=utf-8'});res.end('<h1>你好,世界</h1>')}).listen(3000,'127.0.0.1',() => {console.log('server running at http://127.0.0.1:3000')});
var readFileHtml = (res , url) => {
    fs.readFile(path.join(__dirname,`./project/${url}`),(err , data) => {
                    if(err) return res.end('读取页面不存在');
                    res.end(data);
                })
}