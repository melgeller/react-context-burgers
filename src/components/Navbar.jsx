import React from "react";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
    
      <ul>
      <img src='http://dlcxlyggja3sc.cloudfront.net/items/ih2.redbubble.net/image.37116509.2805-fc-550x550-white.u1.jpg' alt='burger'></img>
        <li>Home</li>
        <li>Characters</li>
        <li>Burgers</li>
        <li>Stores</li>
      </ul>
    </div>
  );
};

export default Navbar;
