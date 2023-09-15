const http = require('http');

http.createServer((req, res ) => {
    
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200,{'content-type' : 'text/plain'})

    res.write('Hola Mundo');
    
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto ', 8080);