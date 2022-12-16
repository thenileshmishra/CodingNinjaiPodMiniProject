import React from "react";
import "../css/LockScreen.css";

// Renderse lockscreen
class LockScreen extends React.Component {
  render() {
    return (
      <div className="div-lock">
        <h3>
          <i>Press to unLock</i>
        </h3>
      </div>
    );
  }
}

export default LockScreen;
