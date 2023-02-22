import React from "react";

import bla from "./bla.png";

const HomePage = () => {
  return (
    <div>
      <h1> Hello NFT Launchpad </h1>
      <button
        onClick={() => {
          console.log("Hello NFT Launchpad");
        }}
      >
        Press Me!
      </button>
      <h3> DD & CO </h3>
      <img style={{ width: 256, height: "auto" }} src={bla} alt="some of my ladies.jpg" />
      <h2>Durotan</h2>
    </div>
  );
};

export { HomePage };
