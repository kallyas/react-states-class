import React, { createContext, useState } from "react";
import "./App.css";
import AddCityButton from "./AddCityButton";
import CityList from "./CityList";
import TemperatureAverage from "./TemperatureAverage";

const WeatherContext = createContext({
  cities: [],
  addCity: (name, temperature) => {},
});

export { WeatherContext };

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (name, temperature) => {
    setCities((prevCities) => [...prevCities, { name, temperature }]);
  };

  return (
    <WeatherContext.Provider
      value={{
        cities,
        addCity,
      }}
    >
      <div className="app">
        <div className="city-overview">
          <h2>Weather App for cities</h2>
          <CityList />
          <AddCityButton />
          <TemperatureAverage />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
