import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/app";

export const renderer = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <App />
    </StaticRouter>
  );

  return `<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>NFT Launchpad</title>
      <script defer="defer" src="main.bundle.js"></script>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${content}</div>
    </body>
  </html>
  `;
};
