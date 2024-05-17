const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen((port), () => {

    console.log(` server is up and running on localhost:${port} `);
});
