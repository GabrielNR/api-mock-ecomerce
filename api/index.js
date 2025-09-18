const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

module.exports = (req, res) => {
  app(req, res);
};
