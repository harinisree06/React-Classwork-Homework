import React, { useState } from 'react';
function Display(props) {
    return (
      <div>
          <h2>Current Weather in {props.name}</h2>
          <p>Temperature : 20 C</p>
          <p>Condition : Sunny</p>
      </div>
    )
  }
function WeatherApp() {
    const [city, setCity] = useState('');
    const [submittedCity, setSubmittedCity] = useState('New York');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedCity(city);
    };

    return (
        <div style={{backgroundColor:"lavender",
          height:'60vh',
          width:'70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            <form onSubmit={handleSubmit}>
            <h1>Weather Application</h1>
                <input
                    type="text"
                    placeholder="Enter City Name"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}/>
                <button type="submit">Update Location</button>
                <Display name={submittedCity} />
            </form>
        </div>
    );
}
export default WeatherApp;
