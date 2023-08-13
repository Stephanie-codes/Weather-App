import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cb78117d408dae4ddf0fe0105f0ceb55`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="container">

        <div className="search">
          <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location" 
          type='text'/>
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
          <div className="pressure">
            <p>Pressure:</p>
            <p>1013</p>
          </div>
          <div className="wind">
            <p>Wind Speed:</p>
            <p>8mph</p>
          </div>
          <div className="visibility">
            <p>Visibility:</p> 
            <p>10000</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
