let http = require('http')
let server = http.createServer()
server.on('request',(req,res)=>{
  res.end('ss')
})
server.listen('3000')