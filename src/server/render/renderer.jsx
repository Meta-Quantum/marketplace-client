import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/app";

export const renderer = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <App />
      </StaticRouter>
    </Provider>
  );

  // <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  // <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

  return `<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>NFT Launchpad</title>
      <link rel="stylesheet" type="text/css" href="main.css">
      <script defer="defer" src="main.bundle.js"></script>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${content}</div>
    </body>
  </html>
  `;
};
