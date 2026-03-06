import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "0bb177a4ace226fbe5803b1875a16359";

  const fetchWeather = async (cityName) => {

    if (!cityName) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);

    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // default city when app loads
  useEffect(() => {
    fetchWeather("Lahore");
  }, []);

  useEffect(() => {
  if (city) fetchWeather();
  }, []);

  return (
  <div className="app">
    <p className="title">CityWeather</p>
    <SearchBar setCity={setCity} fetchWeather={fetchWeather} />
    {loading && <p className="info">Loading…</p>}
    {error && <p className="error">⚠ {error}</p>}
    {weather && <WeatherCard weather={weather} />}
  </div>
);


}

export default App;