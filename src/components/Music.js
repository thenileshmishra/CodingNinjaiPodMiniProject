import React from "react";
import "../css/Music.css";

// Functional Music menu component
function Music({ musicItems, active }) {
  return (
    <div className="music">
      <h3>Music</h3>
      <ul>
        {musicItems.map((item, idx) => (
          <li key={idx} className={active === idx ? "active" : undefined}>
            &nbsp;{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Music;