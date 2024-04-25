import './App.css';
import { useState } from 'react';
import pads from "./assets/pad.json"
import { Drum } from './components/drum';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="pads">
          {pads.map((pad) => (
            <Drum pad={pad} keyTrigger={pad.keyTrigger} key={pad.keyTrigger} />
          ))}
        </div>
        <div id="display"></div>
      </div>
    </div>
  );
}

export default App;
