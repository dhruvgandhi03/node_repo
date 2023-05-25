const http = require("http")

const server = http.createServer((req , res) => {
    
    if(req.url === '/')
    {res.write('Welcome to server')}
    
    
    if(req.url === '/about')
    {res.write('this is about us')}
    

    res.end()
})

server.listen(4000)