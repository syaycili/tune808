import React from 'react';
import { Helmet } from 'react-helmet';
import PitchDetector from './components/PitchDetector';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <div className='card'>
      <Helmet>
        <title>Tune Your 808's, Drums and More</title>
        <meta name="description" content="Upload your audio file and tune your 808's, drums and more with our pitch detector." />
        <meta name="keywords" content="audio tuning, pitch detector, 808 tuning, drum tuning" />
      </Helmet>
      <h1>Tune Your 808's, Drums and More 🎺🎺</h1>
      <p>Upload your audio file and tune your 808's, drums and more with our pitch detector. 🤩🤩</p>
      <PitchDetector />
      <Analytics />
    </div>
  );
}

export default App;
