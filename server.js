var restify = require('restify');

server = restify.createServer({});

// Serving the design assets
server.get(/^\/?.*/, restify.serveStatic({
  directory: __dirname + '/site',
  default: 'index.html'
}));

server.listen(8080);