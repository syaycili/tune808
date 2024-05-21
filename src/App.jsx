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
      <meta name="description" content="Upload your audio file and tune your 808's, drums and more with our pitch detector. Perfect for music producers looking to fine-tune their beats." />
      <meta name="keywords" content="tune 808, how to tune 808, pitch detector, 808 tuning, drum tuning, music production, beat making, sound engineering" />
    </Helmet>

    <h1>Tune Your 808's, Drums and More 🎺🎺</h1>
    <p>Upload your audio file and tune your 808's, drums and more with our pitch detector. 🤩🤩</p>


    <PitchDetector/>


    <div className='sections'>
      <section className='section'>
        <h2 className='section-title'>About Our 808 Tuner 🎹</h2>
        <p className='section-text'>Our pitch detector is designed to help music producers and sound engineers fine-tune their audio files with precision. Whether you're working on 808s, drums, or other instruments, our tool provides accurate pitch detection to ensure your sounds are perfectly tuned.</p>
      </section>

      <section className='section'>
      <h2 className='section-title'>How It Works 💪🏿</h2>
      <ul className='section-ul'>
          <li>Using our pitch detector is simple:</li>
          <li>Upload your audio file. ⬆️</li>
          <li>Our tool analyzes the pitch of your audio in real time. 🔬</li>
          <li>View the results and make necessary adjustments to your audio.</li>
      </ul>
      </section>
      

      <section className='section'>
        <h2 className='section-title'>Features 😎</h2>
        <ul className='section-ul'>
          <li><strong>Accurate Pitch Detection:</strong> Our advanced algorithm ensures precise pitch detection for various instruments.</li>
          <li><strong>Easy to Use:</strong> Simply upload your audio file, and our tool will handle the rest.</li>
          <li><strong>Supports Multiple File Formats:</strong> Upload MP3, WAV, and other popular audio formats.</li>
          <li><strong>Real-Time Processing:</strong> Get instant results and make adjustments on the fly.</li>
        </ul>
      </section>


    <footer>
      <p className='section-text'>Created with ❤️ by <a href='https://github.com/syaycili' target='_blank' rel='noopener noreferrer'>Sarp</a></p>
    </footer>
      
    </div>


      <Analytics />
    </div>
  );
}

export default App;
