import React, {useState} from 'react'
import axios from 'axios'
import DateTimeComponent from './DateTime'

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
            <h2>{data.name}</h2>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
          <div className="date">
            <DateTimeComponent />
          </div>
        </div>

        <div className="bottom">
          <div className="feel">
            <p>Feels like:</p> 
            {data.main ? <p>{data.main.feels_like}°C</p> : null}
          </div>
          <div className="pressure">
            <p>Pressure:</p>
            {data.main ? <p>{data.main.pressure}</p> : null}
          </div>
          <div className="wind">
            <p>Wind Speed:</p>
            {data.wind ? <p>{data.wind.speed}mph</p> : null}
          </div>
          <div className="humidity">
            <p>Humidity:</p> 
            {data.main ? <p>{data.main.humidity}</p> : null}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
