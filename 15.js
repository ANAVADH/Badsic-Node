const http = require('http')
const Server = http.createServer((req,res) =>{
 const url = req.url;

 if(url === '/'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<h1>home page</h1>')
    res.end()

 }
 else if(url === '/about'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()
 }

 else{
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write('<h1>404 page  not found</h1>')
    res.end()
 }
 
})
Server.listen(5000);