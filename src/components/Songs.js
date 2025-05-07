import React from 'react';

// Renders songs menu
const Songs = ({ songItems, active }) => {
  return (
    <div className="music">
      <h3>Songs</h3>
      <ul>
        {songItems.map((element, index) => (
          <li
            key={index}
            id={active === index ? undefined : "song1"}
            className={active === index ? "active" : ""}
          >
            &nbsp;{element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
