import { useState, createContext } from "react";
import AddCityButton from "./AddCityButton";
import CityList from "./CityList";
import TemperatureAverage from "./TemperatureAverage";

const WeatherContext = createContext({
  cities: [],
  addCity: (name, temperature) => {},
});

export { WeatherContext };

const Weather = () => {
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
};

export default Weather;
