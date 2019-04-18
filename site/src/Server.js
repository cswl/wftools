import fallback from "express-history-api-fallback";
import express from "express";
import path from "path";

import CorsProxy from "./corsproxy";

const app = express();

const port = process.env.PORT || 8080;

const pkgDir = require("pkg-dir");
const pkg = pkgDir.sync();
const context = path.join(pkg, "dist", "public");

async function Main() {
  const config = (await import(path.join(pkg, "config"))).default;
  console.log(config);

  console.log(`USing i dir ${context}`);

  const corsProxy = CorsProxy(app);

  app.use(express.static(context));
  app.use(fallback(path.join(context, "index.html")));

  app.listen(port, "0.0.0.0");
  console.log(`App listening on ${port}`);
}
Main();
