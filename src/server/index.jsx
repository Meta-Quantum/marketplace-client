import express from "express";
import { matchRoutes } from "react-router-dom";
import { PageTypes } from "../client/pages/PageTypes";
import { createStore } from "../store";
import { renderer } from "./render/renderer";

const PORT = 9001;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  const matchedRoutes = matchRoutes(PageTypes, req.path);
  console.log({ matchedRoutes, route: matchedRoutes?.[0].route });
  const promises = matchedRoutes?.map(({ route }) => {
    return route.preload?.(store);
  });
  console.log({ promises });
  Promise.all(promises)
    .then(() => {
      console.log(".then");
      // maybe some logic
    })
    .catch(() => {
      console.log(".catch");
      // maybe add some error message
    })
    .finally(() => {
      console.log(".finally");
      res.send(renderer(req, store));
    });
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
