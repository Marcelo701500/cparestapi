const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('cpa.json');
const middlewares = jsonServer.defaults();
const port = process.env.port || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, ()=> {
    console.log(`JSON Server is running in ${port}`);
});
