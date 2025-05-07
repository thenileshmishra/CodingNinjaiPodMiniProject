import React from 'react';
import "../css/Settings.css";

const Settings = ({ active }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <ul>
        <li className={active === 0 ? "active" : ""}>Themes</li>
        <li className={active === 1 ? "active" : ""}>Wheel Color</li>
        <li className={active === 2 ? "active" : ""}>Wallpaper</li>
      </ul>
    </div>
  );
};

export default Settings;
