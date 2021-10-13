import { useContext, useState } from "react";
import { WeatherContext } from "./Weather";

const AddCityButton = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { addCity } = useContext(WeatherContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const unit = "imperial";
    const mode = "json";

    const encodedName = encodeURIComponent(name);
    //fetch datat from openweather map api
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodedName}&units=${unit}&mode=${mode}&appid=b731c9b0681063c7aeb821af56a17408`
    )
      .then((response) => response.json())
      .then((data) => {
        addCity(name, data.main.temp);
        setName("");
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="add-city-form">
      {error && <p className="error">please enter a city name</p>}
      <input className="input" value={name} onChange={handleChange} required />
      <button className="input" onClick={handleSubmit}>
        Add city
      </button>
    </div>
  );
};

export default AddCityButton;
