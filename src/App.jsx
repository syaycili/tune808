import React from 'react';
import PitchDetector from './components/PitchDetector';
import './App.css';

function App() {

  return (
      <div className='card'>
      <h1>Tune Your 808's, Drums and More 🎺🎺</h1>
      <p>Upload your audio file and tune your 808's, drums and more with our pitch detector. 🤩🤩</p>
      <PitchDetector />
      </div>
      );
}

export default App;
