import React from 'react';

const Wallpaper = ({ active }) => {
    return (
        <div className="music">
            <h2>Wallpaper Select</h2>
            <ul>
                {["Wallpaper 1", "Wallpaper 2", "Wallpaper 3"].map((element, index) => (
                    <li
                        key={index}
                        className={`theme-li ${active === index ? 'active' : ''}`}
                    >
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wallpaper;
