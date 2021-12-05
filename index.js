const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./env/DB.env" });
require("dotenv").config({ path: "./env/JWT.env" });
require("dotenv").config({ path: "./env/URI.env" });
const { jwtCheck } = require("./middleware/jwtCheck");
const { pool } = require("./db/connect");
const { schema } = require("./Schema/index");

async function startApolloServer() {
  const server = new ApolloServer({
    schema: schema,
    context: async ({ req, res }) => {
      let user = null;
      const token = req.cookies || "";
      console.log(token);
      if (token) {
        user = await jwtCheck(token, pool, res);
      }
      // res.cookie("access_toke", "hwlo", {
      //   maxAge: 1000 * 60 * 60,
      //   secure: process.env.NODE_ENV ? true : false,
      //   httpOnly: true,
      // });
      return { pool, req, res, user };
    },
  });
  await server.start();

  const port = process.env.PORT || 4000;
  const app = express();
  app.use(cookieParser());
  server.applyMiddleware({
    app,
    cors: {
      origin: process.env.URI,
      credentials: true,
    },
  });
  await new Promise((resolve) => app.listen({ port: port }, resolve));
  console.log(`graphql api is up in ${port}`);
  return { server, app };
}
startApolloServer();
