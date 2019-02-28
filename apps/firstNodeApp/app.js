const http = require('http');

const { requestHandler: routes } = require('./routes');

const server = http.createServer(routes);

server.listen(3500);
