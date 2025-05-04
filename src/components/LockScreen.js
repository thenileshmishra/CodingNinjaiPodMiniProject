import React from "react";
import "../css/LockScreen.css";

// Functional LockScreen – displays unlock prompt
function LockScreen() {
  return (
    <div className="div-lock">
      <h3>
        <i>Press to unLock</i>
      </h3>
    </div>
  );
}

export default LockScreen;
