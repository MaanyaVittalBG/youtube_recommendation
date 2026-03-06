import { useState } from 'react';
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("Sanjith Hegde");
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    const res = await axios.post("http://localhost:5000/mood", { text: text });
    setVideo(res.data);
  };

  return (
    <div className="app">
      <h1>Mood based video recommendaion</h1>
      <input placeholder="How is your mood today?"
      onChange={(e)=>setText(e.target.value)}/>
      <button onClick={(getVideo)}>Predict</button>
      <div className="video">
        {video.map(v=>
        <iframe width="640" 
        key={v.id.videoId}
        height="360"
        src={`https://www.youtube.com/embed/${v.id.videoId}`}
        title="video"
        />

      )}
      </div>



    </div>
  );
}


export default App;
