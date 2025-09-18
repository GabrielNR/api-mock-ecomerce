import jsonServer from "json-server";
import { createServer } from "http";

// Criamos o app do json-server
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

// Exportamos o handler compatível com Vercel
export default function handler(req, res) {
  const server = createServer(app);
  server.emit("request", req, res);
}
