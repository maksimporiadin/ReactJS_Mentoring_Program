var StaticServer = require('static-server');

var server = new StaticServer({
    port: 3000,
    rootPath: './build'
});

server.start(function () {
    console.log('Server listening to', server.port);
});