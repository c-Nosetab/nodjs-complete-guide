const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  const {url, method} = req;
  res.setHeader('Content-type', 'text/html');

  // console.log(url, method);

  if (url === '/') {
    res.write(
      `<html>
        <head>
          <title>Testing myself</title>
        </head>
        <body>
          <form action="/message" method="POST">
            <input type="text" name="message">
            <button type="submit">Send</button>
          </form>
        </body>
      </html`
    )
    return res.end();
  }

  if (url === '/message' && method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);

      fs.writeFileSync('text.txt', message)
    })

    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
  }

  return res.end();
})

server.listen(3600)