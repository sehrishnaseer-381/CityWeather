function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.name}<span>{weather.sys?.country}</span></h2>
      <h3>{Math.round(weather.main.temp)}°</h3>
      <p>{weather.weather[0].description}</p>

      <div className="divider" />

      <div className="stats">
        <div className="stat">
          <span className="stat-value">{weather.main.humidity}%</span>
          <span className="stat-label">Humidity</span>
        </div>
        <div className="stat">
          <span className="stat-value">{weather.wind.speed} m/s</span>
          <span className="stat-label">Wind</span>
        </div>
        <div className="stat">
          <span className="stat-value">{Math.round(weather.main.feels_like)}°C</span>
          <span className="stat-label">Feels Like</span>
        </div>
        <div className="stat">
          <span className="stat-value">{weather.main.pressure}</span>
          <span className="stat-label">Pressure hPa</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;