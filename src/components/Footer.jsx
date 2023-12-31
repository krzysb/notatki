import React from "react";
import "./Footer.css";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <p> &copy;{year} </p>
    </footer>
  );
};

export default Footer;
