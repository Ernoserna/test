var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello Devops with Docker Exercise 1.16 and 3.3 \n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
