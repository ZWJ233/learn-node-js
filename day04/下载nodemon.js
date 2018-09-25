const http = require('http');
const server = http.createServer();
server.on('request',(req , res) => {
    res.writeHeader(200,{
        'Content-Type':'text/html;charset=utf8'
    })
    res.end('这是一个服务器1');
})
server.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000');
})