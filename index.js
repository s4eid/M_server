const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./env/DB.env" });
require("dotenv").config({ path: "./env/JWT.env" });
const { jwtCheck } = require("./middleware/jwtCheck");
const { pool } = require("./db/connect");
const { schema } = require("./Schema/index");

async function startApolloServer() {
  const server = new ApolloServer({
    schema: schema,
    context: async ({ req, res }) => {
      let user = null;
      const token = req.cookies || "";
      if (token) {
        user = await jwtCheck(token, pool, res);
      }
      return { pool, req, res, user };
    },
  });
  await server.start();
  const port = process.env.PORT || 4000;
  const app = express();
  app.use(cookieParser());
  server.applyMiddleware({
    app,
    cors: { origin: "http://localhost:3000", credentials: true },
  });
  await new Promise((resolve) => app.listen({ port: port }, resolve));
  console.log(`graphql api is up in ${port}`);
  return { server, app };
}
startApolloServer();
