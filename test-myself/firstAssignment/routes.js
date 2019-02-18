
const requestHandler = (req, res) => {
  const { url, method } = req;

  if (url === '/users') {
    res.write(`
    <html>
      <head>
        <title>First Assignment</title>
      </head>
    
      <body>
        <h1>Current Users</h1>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
          <li>User 5</li>
        </ul>
    
        <a href="/">Sign Up</a>
      </body>
    </html>`
    )
    return res.end();
  }

  if (url === '/create-user' && method === "POST") {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    })

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];

      console.log(`User ${username} created!`);
      
      res.statusCode = 302;
      res.setHeader('Location', '/');
    })
  }

  res.write(`
    <html>
      <head>
        <title>First Assignment</title>
      </head>    
      <body>
        <h1>Create User:</h1>
        <form action="/create-user" method="POST">
          <input type="text" name="username" placeholder="Username">
          <button type="submit">Submit</button>
        </form>
        <a href="/users">See Current Users</a>
      </body>
    </html>`
  )
  return res.end();
}


module.exports = {
  requestHandler
}