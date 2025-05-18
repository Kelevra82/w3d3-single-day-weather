import { useEffect, useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = process.env.API_KEY;

  const lat = 51.5098;
  const lon = -0.118;
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  if (!weatherData.main) {
    return <p>Loading...</p>;
  } else {
    return (
      <p>
        <strong>Temp: </strong>
        {weatherData.main.temp}°F
      </p>
    );
  }
}
