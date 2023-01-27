import { createContext, useEffect, useState } from "react";
import { openWeatherUrl, weatherApiKey } from "../api/api";

export const WeatherContex = createContext();

const WeatherContexProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [location, setloaction] = useState({
    latitude: 23.728888888,
    longitude: 90.394444444,
    city:'Dhaka', 
    country:'Bangladesh' 
  });

  useEffect(() => {
    Promise.all([
      fetch(
        `${openWeatherUrl}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weatherApiKey}&units=metric`
      ),

      fetch(
        `${openWeatherUrl}/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${weatherApiKey}&units=metric`
      ),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        setWeatherData(data1);
        setForecastData(data2);
      })
      .catch((err) => console.log(err.message));
  }, [location]);

  const searchValue = (data) => {
    const { latitude, longitude, city, country } = data.value;

    setloaction({ ...location, latitude, longitude, city, country });
  };

  const value = { searchValue, weatherData, forecastData, location };
  return (
    <WeatherContex.Provider value={value}>{children}</WeatherContex.Provider>
  );
};

export default WeatherContexProvider;
