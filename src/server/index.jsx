import express from "express";
import { matchRoutes } from "react-router-dom";
import { PageTypes } from "../client/pages/PageTypes";
import { store } from "../store";
import { renderer } from "./render/renderer";

const PORT = 9001;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const matchedRoutes = matchRoutes(PageTypes, req.path);
  console.log({ matchedRoutes });
  res.send(renderer(req, store));
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
