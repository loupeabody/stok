var restify = require('restify');

server = restify.createServer({});

// Serving the design assets
server.get(/^\/?.*/, restify.serveStatic({
  directory: __dirname + '/site',
  default: 'index.html',
  maxAge: 0
}));

server.listen(8080);