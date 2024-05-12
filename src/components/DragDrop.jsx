import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["MP3", "WAV", "FLAC", "AIFF", "DS", "DWP", "OGG", "WMA"];

function DragDrop({pithDetect}) {

  const [filename, setFilename] = useState(null);


  const handleChange = (dfile) => {
    pithDetect(dfile);
    setFilename(dfile.name);

  };

  return (
    <FileUploader 
    handleChange={handleChange} 
    name="dfile" 
    types={fileTypes}
    multiple={false} 
    classes={"dragdrop"}
    children={
      <div className="drag-drop">
        {filename ? 
        
        <div>
        <h3 className="drag-header">{filename}</h3>
        <p className="drag-text">Drag and drop another file!</p>
        </div>

        : 

        <div>
        <h3 className="drag-header">Drag and drop your audio file here or click to select a file.</h3>
        <p className="drag-text">Supported file types: {fileTypes.join(", ")}</p>
        </div>
        }

        
      </div>
    }
    />
  );
}

export default DragDrop;