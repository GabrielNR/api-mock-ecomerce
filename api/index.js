const jsonServer = require("json-server");
const path = require("path");

// Cria o servidor e o roteador
const server = jsonServer.create();
// O path.join é importante para a Vercel encontrar o arquivo no ambiente de produção
const router = jsonServer.router(path.join(__dirname, "../db.json")); 
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Reescreve as rotas para que o json-server entenda
// /api/posts -> /posts
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);

// Exporta o servidor para a Vercel
module.exports = server;