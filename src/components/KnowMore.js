import React, { useState } from "react";
import "../css/KnowMore.css";

// Functional KnowMore: renders control instructions & toggle button
function KnowMore() {
  const [divOpen, setDivOpen] = useState(false);

  const toggle = () => setDivOpen((open) => !open);

  const cssProp = { top: divOpen ? "0px" : "-542px" };

  return (
    <div className="information-container" style={cssProp}>
      <div className="info-div">
        <h3>Controls</h3>
        <p>
          1. To unlock the screen press the centre button; lock from the main menu
          with the MENU button.
        </p>
        <p>2. Play / Pause: bottom button in any menu.</p>
        <p>3. Short‑press forward / reverse → next / previous track (only while playing).</p>
        <p>4. Long‑press forward / reverse → seek within the current track.</p>
        <p>5. Rotate on the click‑wheel to navigate within lists.</p>
        <p>6. Centre button enters a menu; MENU button goes back.</p>
        <p>7. Songs do play – explore the settings menu.</p>
        <p className="credits">credits : Apple, Flaticon</p>
      </div>
      <button id="info-btn" onClick={toggle}>
        Know More
      </button>
    </div>
  );
}

export default KnowMore;
