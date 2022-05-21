const http = require('http')
const server = http.createServer((req,res) => {

    if(req.url === '/'){
        console.log("Yes its the home page");
        res.end('its homepage')
    }
    if(req.url === '/about'){
        res.end('yes its the about page')
    }
    res.end('error page')
    
})
server.listen(5000, () =>{
    console.log('its rinning on the port 5000');
})