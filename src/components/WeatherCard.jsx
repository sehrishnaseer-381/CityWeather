function WeatherCard({ weather }) {

  return (
    <div className="card">

      <h2>{weather.name}</h2>

      <h3>{weather.main.temp} °C</h3>

      <p>Condition: {weather.weather[0].description}</p>

      <p>Humidity: {weather.main.humidity}%</p>

      <p>Wind Speed: {weather.wind.speed} m/s</p>

    </div>
  );
}

export default WeatherCard;