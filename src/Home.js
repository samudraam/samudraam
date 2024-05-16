import React, { useEffect } from "react";
import "./Home.css";
import ramz from "./ramz.png";
import ramya from "./poop.png";

const Home = () => {
  //Rain effect sourced from codepen, credit to og creator
  useEffect(() => {
    const rainContainer = document.querySelector(".rain");
    const numberOfDrops = 200;

    const colors = [
      "#00FFF0", //teal
      "#CCFF00", //yella
      "#FF0000", //green
      "#9E00FF", // dark purp
      "#FF0000", // red
      "#FF00A8", // pink
    ];

    const layers = [
      { className: "layer1", size: "2px", duration: "10s" },
      { className: "layer2", size: "4px", duration: "8s" },
      { className: "layer3", size: "6px", duration: "6s" },
      { className: "layer4", size: "8px", duration: "4s" },
    ];

    for (let i = 0; i < numberOfDrops; i++) {
      const drop = document.createElement("div");
      drop.classList.add("raindrop");

      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDelay = `${Math.random() * 5}s`;
      drop.style.background = colors[Math.floor(Math.random() * colors.length)];

      const layer = layers[Math.floor(Math.random() * layers.length)];
      drop.classList.add(layer.className);
      drop.style.width = layer.size;
      drop.style.height = layer.size;

      rainContainer.appendChild(drop);
    }
  }, []);
  return (
    <div class= "home-container">
      <div class="rain"></div>
      <div class="home-inner-container">
        <div class="left-box">
          <img src={ramya} alt="face" />
        </div>
        <div class="right-box">
          <img src={ramz} alt="logo blue" />
        </div>
      </div>
    </div>
  );
};

export default Home;
