import './App.css'
import PitchDetector from './components/PitchDetector'

function App() {
  return (
    <>
      <div>
        <h1>Tune 808, Drums and More</h1>
        <p>To tune your insturments please drop the sound file to bottom:</p>
        <PitchDetector />
      </div>
    </>
  )
}

export default App
