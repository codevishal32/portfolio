import React from "react";
import { motion } from "framer-motion";
import "./Home.styles.css";

const cards = [
  { label: "HTML, CSS", color: "#2563eb", shape: "circle" },
  { label: "Language: C++,Python,C# ,JS", color: "#ec4899", shape: "grid" },
  { label: "Machine Learning & Deep Learning", color: "#facc15", shape: "bar" },
  { label: "Data-Base: MY SQL", color: "#22d3ee", shape: "list" },
  { label: "Frame-Work: React Js, ASP.NET Web Core , Node JS, Flask,RestFul API's", color: "#a855f7", shape: "squares" },
];

const shapeRender = (shape, color) => {
  switch (shape) {
    case "circle":
      return (
        <motion.div
          className="circle"
          style={{ backgroundColor: color }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      );
    case "grid":
      return (
        <motion.div className="grid-container">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-box"
              style={{ backgroundColor: color }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, delay: i * 0.2, duration: 1.5 }}
            />
          ))}
        </motion.div>
        
      );
    case "bar":
      return (
        <motion.div className="bar-container">
          <motion.div
            className="bar-fill"
            style={{ backgroundColor: color }}
            animate={{ height: ["10%", "90%", "10%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      );
    case "list":
      return (
        <div className="list-container">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              className="list-item"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="list-dot"
                style={{ backgroundColor: color }}
              ></div>
            </motion.div>
          ))}
        </div>
      );
    case "squares":
      return (
        <div className="square-container">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="square"
              style={{ backgroundColor: color }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, delay: i * 0.2, duration: 1 }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};

const Home = () => {
  return (
    <div className="animation-page">
      <h1 className="main-title">Skills</h1>
      <p className="subtitle">
        Create smooth, high-performance animations with Motion’s easy-to-use API—from simple transforms to advanced interactive gestures.
      </p>
      <div className="cards-container">
        {cards.map((card, i) => (
          <div key={i} className="card">
            {shapeRender(card.shape, card.color)}
            <p className="card-label">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
