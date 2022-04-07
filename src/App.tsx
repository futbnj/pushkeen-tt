import React from 'react';
import {AboutUs} from "./layout/AboutUs/AboutUs";
import {Parallax} from "./components/Parallax/Parallax";
import {Artworks} from "./layout/Artworks/Artworks";

function App() {
  return (
    <div className="App">
        <AboutUs />
        <Parallax />
        <Artworks/>
    </div>
  );
}

export default App;
