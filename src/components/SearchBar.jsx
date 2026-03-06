import { useState } from "react";

function SearchBar({ setCity, fetchWeather }) {

  const [input, setInput] = useState("");

  const handleSearch = () => {
    setCity(input);
    fetchWeather(input);
    setInput("");
  };

  return (
    <div className="search">

      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;