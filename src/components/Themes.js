import React from "react";
import "../css/Themes.css";

// Renders themes menu
const Themes = ({ active }) => {
  const themeList = ["Snow White", "Black", "USC Gold", "Space Gray", "Pearl"];

  return (
    <div className="music">
      <h2>Theme Select</h2>
      <ul>
        {themeList.map((element, index) => (
          <li
            key={index}
            className={`theme-li ${active === index ? "active" : ""}`}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Themes;
