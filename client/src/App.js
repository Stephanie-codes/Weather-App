import React, {useState} from 'react'
import axios from 'axios'
import DateTimeComponent from './DateTime'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=cb78117d408dae4ddf0fe0105f0ceb55`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

 const fetchData = () => {
    axios
    .get(url)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });

    setLocation('');
  };

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
          <button className="search-button" onClick={fetchData}>Search</button>
        </div> 

        <div className="middle">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
          <div className="date">
            <DateTimeComponent />
          </div>
        </div>

        {data.name !== undefined && 
        <div className="bottom">
          <div className="feel">
            <p>Feels like:</p> 
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
          </div>
          <div className="pressure">
            <p>Pressure:</p>
            {data.main ? <p>{data.main.pressure}</p> : null}
          </div>
          <div className="wind">
            <p>Wind Speed:</p>
            {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
          </div>
          <div className="humidity">
            <p>Humidity:</p> 
            {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
        </div>
        }

      </div>
    </div>
  );
}

export default App;
