const http = require('http');
const path = require('path');
const { open } = require('./util/helper');

const port = 8022;
const address = 'localhost';
const dist = path.join(__dirname, '..', 'dist/index.html');

http.createServer(async (req, res) => {
    console.log(req.url);
    if(req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        const data = open(dist, 'utf-8');
        console.log(data);
        res.end(data);
    }

    
}).listen(port, address, () => {
    console.log(`Start: http://${address}:${port}/`);
})