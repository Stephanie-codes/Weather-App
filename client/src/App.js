import React, {useState} from 'react'
import axios from 'axios'

function App() {


  return (
    <div className="app">
      <div className="container">

        <div className="search">
          <input value="Enter Location" />
        </div> 

        <div className="middle">
          <div className="location">
            <h2>Canary Wharf</h2>
          </div>
          <div className="temperature">
            <h1>28°C</h1>
          </div>
          <div className="description">
            <h3>Sunny</h3>
          </div>
          <div className="date">
            <h4>Sat 12 Aug 22:01</h4>
          </div>
        </div>

        <div className="bottom">
          <div className="feel">
            <p>Feels like:</p> 
            <p> 26°C</p>
          </div>
          <div className="uv">
            <p>UV Index:</p>
            <p>Low</p>
          </div>
          <div className="wind">
            <p>Wind Speed:</p>
            <p>8mph</p>
          </div>
          <div className="pollen">
            <p>Pollen:</p> 
            <p>Low</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
