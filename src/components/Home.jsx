import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import bgImage from "../assets/fashion.png"; // ensure this path is correct

const Home = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.7)), url(${bgImage})`
      }}
    >
      <div className="glass-card">
        <h1 className="fade-in-title blended-text">Welcome to MythCart</h1>
<p className="fade-in-text blended-subtext">
  Find your style, explore the latest trends.
</p>
<Link to="/shopping" className="shop-btn fade-in-btn pulse subtle-btn">
  Start Shopping
</Link>
      </div>
    </div>
  );
};

export default Home;
