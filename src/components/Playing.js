import React, { useState, useEffect } from "react";
import "../css/Playing.css";

const Playing = ({ songItems, playing, songIndex, audio, songImgUrl }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Set current time initially
    setCurrentTime(audio.currentTime);

    // Update time every 100ms
    const intervalId = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 100);

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, [audio]);

  // Time formatting
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };

  const currentTimeRender = formatTime(currentTime);
  const durationRender = isNaN(audio.duration) ? "0:00" : formatTime(audio.duration);

  const percentageComplete = {
    width: (currentTime / audio.duration) * 100 + "%"
  };

  return (
    <div className="now-playing-container">
      <div className="song-details">
        <img src={songImgUrl} alt="songImg" />
        <div>
          <h6>{songItems[songIndex]}</h6>
          <h4 className="play-pause-nav">{playing ? "Playing" : "Paused"}</h4>
        </div>
      </div>
      <div className="status">
        {currentTimeRender}
        <div id="progress">
          <div style={percentageComplete} id="progress-bar"></div>
        </div>
        {durationRender}
      </div>
    </div>
  );
};

export default Playing;
