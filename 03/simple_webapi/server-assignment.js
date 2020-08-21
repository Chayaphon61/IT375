const http = require('http');
//create server
const server = http.createServer((req,res) =>{
    res.end('hello from the server');
});
server.listen(3000,'127.0.0.1',()=>{
    console.log('Response data from port 3000');
});
