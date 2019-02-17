const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(`
      <html>
        <head><title>Enter Message</title></head>
        <body>
          <form action="/message" method="post">
            <input type="text"><button type="submit" name="message">Send</button>
          </form>
        </body>
      </html>
    `)
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
     
    
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
      <html>
        <head><title>My First Page</title></head>
        <body>
          <h1>Hello From my Node.js Server!</h1>
        </body>
      </html>
    `)
  res.end();
})



server.listen(3000, () => {
  console.log('Server open on port 3000');
});