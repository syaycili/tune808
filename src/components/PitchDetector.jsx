import React, { useState } from 'react';
import axios from 'axios';
import DragDrop from './DragDrop';

const PitchDetector = () => {

    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [closestNote, setClosestNote] = useState(null);

    const pithDetect = async (file) => {

        setError(null);
        setClosestNote(null);
        setProcessing(true);    

        try {   
            if (!file) throw new Error('Please select a file.');

            const formData = new FormData();
            formData.append('audio_file', file);

            try {
              const response = await axios.post( "https://syaycili.pythonanywhere.com/detect_pitch", formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            setClosestNote(response.data.closest_note);

            } catch (error) {
                setError(error.message);
            }

        } catch (error) {
            setError(error.message);

        } finally {
            setProcessing(false);
        }
    };

    return (
        <div>
            <DragDrop pithDetect={pithDetect}/>
            {processing && <p>Processing...</p>}
            {closestNote && 
            <div>
            <h2>Note: <span className='result'>{closestNote}</span></h2>
            </div>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PitchDetector;
