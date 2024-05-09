import React, { useState } from 'react';
import Pitchfinder from 'pitchfinder';

const PitchDetector = () => {
    const [pitch, setPitch] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const frequencyToNote = (frequency) => {
        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const semitoneRatio = Math.pow(2, 1 / 12);
        const semitoneOffset = 57; // A4 = 440 Hz
        const semitoneDifference = 12 * (Math.log2(frequency) - Math.log2(440));
        const semitoneIndex = Math.round(semitoneDifference) + semitoneOffset;
        const noteIndex = (semitoneIndex + 12) % 12;
        const octave = Math.floor((semitoneIndex + 9) / 12);
        return `${noteNames[noteIndex]}${octave}`;
    };

    const handleFileChange = async (event) => {
        setError(null);
        setPitch(null);
        setProcessing(true);

        try {
            const file = event.target.files[0];
            if (!file) throw new Error('Please select a file.');

            const buffer = await file.arrayBuffer();
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Detect pitch
            const myAudioBuffer = await audioContext.decodeAudioData(buffer);
            const float32Array = myAudioBuffer.getChannelData(0); // get a single channel of sound
            const detectPitch = Pitchfinder.YIN();
            const result = detectPitch(float32Array); // null if pitch cannot be identified

            if (result) {
                setPitch(result);
            } else {
                throw new Error('Pitch cannot be identified.');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div>
            <input type="file" accept="audio/*" onChange={handleFileChange} />

          
            {processing && <p>Processing...</p>}
            {pitch && 
            <div>
            <h2>Note: {frequencyToNote(pitch)}</h2>
            <p>Dominant frequency: {pitch} Hz</p>    
            </div>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PitchDetector;
