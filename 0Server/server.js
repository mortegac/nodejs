var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Node.js');
}).listen(8000, "127.0.0.1");
console.log("Servidor corriendo en http://127.0.0.1:8000");