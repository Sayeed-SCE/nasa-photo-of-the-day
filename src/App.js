import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from './components/NasaPhoto';

function App() {

  const [api, setApi] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
     .then (res => {
        setApi(res.data);
     })
     .catch(err => console.log(err))
        
  }, [])


  return (
    <div className="App">
      {api && <NasaPhoto photo={api} /> }
     
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 

