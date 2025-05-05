import React from "react";
import "../css/Menu.css";
import game from "../static/game.jpg";
import music from "../static/music.jpg";
import settings from "../static/settings.png";

// Functional main menu component
function Menu({ active, menuItems, songImgUrl }) {
  return (
    <div className="menu-container">
      <div className="menu">
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx} className={active === idx ? "active" : undefined}>
              &nbsp;{item}
            </li>
          ))}
        </ul>
      </div>

      <div className="leaf">
        {active === 0 && <img className="leaf-img" src={songImgUrl} alt="" />}
        {active === 1 && <img className="leaf-img" src={music} alt="" />}
        {active === 2 && <img className="leaf-img" src={game} alt="" />}
        {active === 3 && <img className="leaf-img" src={settings} alt="" />}
      </div>
    </div>
  );
}

export default Menu;
