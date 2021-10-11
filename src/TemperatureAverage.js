import { useContext } from "react";
import { WeatherContext } from "./App";

const TemperatureAverage = () => {
  const context = useContext(WeatherContext);

  if (context.cities.length === 0) {
    return <div>Add some cities to view average</div>;
  }

  let total = 0;
  for (const city of context.cities) {
    total += city.temperature;
  }

  const avg = total / context.cities.length;

  return (
    <div>
      The Average is <b>{avg.toFixed(2)} degrees F</b>
    </div>
  );
};

export default TemperatureAverage;
