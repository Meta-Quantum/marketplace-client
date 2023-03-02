import express from "express";
import { store } from "../store";
import { renderer } from "./render/renderer";

const PORT = 9001;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(renderer(req, store));
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
