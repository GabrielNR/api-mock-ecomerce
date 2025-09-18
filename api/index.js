import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default function handler(req, res) {
  // Faz o json-server lidar com a request e response da Vercel
  server(req, res);
}
