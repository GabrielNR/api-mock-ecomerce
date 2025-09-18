const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

// 🔹 Cria o servidor e o roteador
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json")); 
const middlewares = jsonServer.defaults();

// 🔹 Configuração de CORS (necessário para rodar no browser sem bloqueio)
server.use(cors({
  origin: "*", // pode trocar por "http://localhost:3000" se quiser restringir
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// 🔹 Responde corretamente as requisições pré-flight (OPTIONS)
server.options("*", cors());

// 🔹 Middlewares padrão do json-server (logs, static, etc.)
server.use(middlewares);

// 🔹 Reescreve rotas: /api/products → /products
server.use(jsonServer.rewriter({
  "/api/*": "/$1",
}));

// 🔹 Usa o roteador do db.json
server.use(router);

// 🔹 Exporta para a Vercel como serverless function
module.exports = server;
