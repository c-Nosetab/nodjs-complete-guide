const http = require('http');
const fs = require('fs');


const server = http.createServer((request, res) => {
  res.setHeader('Content-Type', 'text/html');

  const { url, method } = request;

  if (url === '/') {

    res.write(
      `<html>
        <head>
          <title>My first Page</title>
        </head>
        <body>
          <form action="/message" method="POST">
            <input type="text" placeholder="Enter Message" name="message">
            <button type="submit">Send</button>
          </form>
        </body>
      </html>`
    )
    return res.end();
  } 
  
  if (url === '/message' && method === 'POST') {
    const body = [];

    request.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })

    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]
      console.log(message);
      fs.writeFileSync('message.txt', message);
      
    })
    
    
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
  }

  
  res.write(
    `<html>
      <head>
        <title>My first Page</title>
      </head>
      <body>
        <h1>Hello from my Node.js Server</h1>
        <a href="/">Go Back</a>
      </body>
    </html>`
  )
  res.end();
});

server.listen(3500);

