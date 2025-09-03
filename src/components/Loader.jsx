import React from "react";
import "../components/Loader.css";
import loadersvg from "../assets/images/loader.svg"; 

function Loader() {
  return (
    <div className="loader-container">
      <img src={loadersvg} alt="Loading..." className="loader-icon" />
      <p>Fetching books, please wait...</p>
    </div>
  );
}

export default Loader;
