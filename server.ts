// server.js
import next from "next";
import routes from "./routes";
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

// With express
const express = require("express");
app
  .prepare()
  .then(() => {
    express()
      .use(handler)
      .listen(3000);
  })
  .catch((err) => console.error(err));
