# iPod Simulator

A web-based classic iPod simulator built with React that replicates the iconic iPod interface and functionality.

## Features

- **Authentic iPod Interface**: Complete with clickwheel navigation and classic iPod UI
- **Music Player**: Play, pause, skip tracks, and seek within songs
- **Menu Navigation**: Navigate through menus just like on a real iPod
- **Customization Options**:
  - Change themes (body colors)
  - Customize wheel colors
  - Choose from different wallpapers

## Project Structure

```
iPod-Simulator/
├── public/                  # Public assets and HTML template
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── App.js           # Main component with core functionality
│   │   ├── Case.js          # iPod body/case component
│   │   └── KnowMore.js      # Information component
│   ├── css/                 # Stylesheet files
│   │   └── App.css          # Main stylesheet
│   └── static/              # Static assets
│       ├── songs/           # Music files
│       │   └── *.mp3        # MP3 music files
│       ├── *.jpg            # Album artwork and wallpapers
│       └── *.png            # Other images
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## How It Works

The application simulates the iPod interface using React components:

1. **Navigation System**: 
   - Uses a navigation stack to handle menu transitions
   - Maintains state for current menu, active menu item, and navigation history

2. **Wheel Interaction**:
   - Click wheel controls allow rotation to select menu items
   - Center button confirms selections
   - Forward/backward buttons for song navigation and seeking

3. **Theming System**:
   - Customizable iPod body color
   - Customizable wheel color
   - Multiple wallpaper options

4. **Music Player**:
   - Plays songs from the included library
   - Displays album artwork
   - Supports play/pause, track change, and seeking

## Main Components

- **App.js**: Core component that manages state and functionality
- **Case.js**: Renders the iPod body and handles user interaction
- **KnowMore.js**: Provides additional information about the project

## Menu Structure

The iPod simulator includes several menus:
- Now Playing
- Music (with submenu for All Songs, Artist, Albums)
- Games
- Settings (with theme, wheel color, and wallpaper options)

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- **Rotate** around the wheel to navigate menus
- **Click** the center button to select items
- **Click** play/pause to control music playback
- **Long press** forward/backward buttons to seek within songs
- **Short press** forward/backward buttons to change tracks
- Explore settings to customize the iPod appearance

## Technologies Used

- React.js
- CSS
- HTML5 Audio API
