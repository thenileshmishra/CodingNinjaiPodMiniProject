import React from "react";
import "../css/Case.css";
import Wheel from "./Wheel.js";
import Display from "./Display.js";

// Functional version of the outer iPod case – renders Display & Wheel
function Case(props) {
  const {
    active,
    updateActiveMenu,
    currentMenu,
    changeMenuBackward,
    changeMenuForward,
    menuItems,
    musicItems,
    togglePlayPause,
    songItems,
    playing,
    songIndex,
    theme,
    audio,
    songUrl,
    songImgUrl,
    seekSongForward,
    seekSongReverse,
    wheelColor,
    wallpaper,
    wallpaperItems,
    noty,
    setNoty,
    notifyText
  } = props;

  return (
    <div className="case-container">
      <div className="case" style={{ backgroundColor: theme }}>
        <Display
          songIndex={songIndex}
          playing={playing}
          active={active}
          musicItems={musicItems}
          menuItems={menuItems}
          currentMenu={currentMenu}
          songItems={songItems}
          audio={audio}
          songUrl={songUrl}
          songImgUrl={songImgUrl}
          wallpaper={wallpaper}
          wallpaperItems={wallpaperItems}
          noty={noty}
          setNoty={setNoty}
          notifyText={notifyText}
        />
        <Wheel
          theme={theme}
          active={active}
          menuItems={menuItems}
          currentMenu={currentMenu}
          changeMenuForward={changeMenuForward}
          changeMenuBackward={changeMenuBackward}
          updateActiveMenu={updateActiveMenu}
          togglePlayPause={togglePlayPause}
          seekSongForward={seekSongForward}
          seekSongReverse={seekSongReverse}
          wheelColor={wheelColor}
        />
      </div>
    </div>
  );
}

export default Case;
