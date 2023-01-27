import React, { useContext } from 'react'
import Style from '../assets/css/currentInfo.module.css'
import { FaEye, FaWater, FaWind } from 'react-icons/fa'
import { WeatherContex } from '../contex/WeatherContex'
import { dateConverter } from '../utility/dateConverter'

const CurrentInfo = () => {
    const { weatherData, location } = useContext(WeatherContex)
    const { city, country } = location;
    const { date, dayName, month } = dateConverter(new Date())

  return (
    <div className={Style.currentInfo}>
        <div className={Style.uperitem}>
            <div className={Style.info}>
                <h5>{city},  {country}</h5>
                <h2>{weatherData && weatherData.main.temp.toFixed(1)}°C</h2>
                <p>Real Feels {weatherData && weatherData.main.feels_like.toFixed(1)}°C</p>
            </div>
            <div className={Style.rightItems}>
                <h6 >{dayName}, {date}  {month}</h6>
                { weatherData && <img className={Style.icon} src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='' />
                }
            </div>
        </div>
        <div className={Style.loweritem}>
            <div>
                <FaWind />
                <h5>{weatherData && weatherData.wind.speed}km/h</h5>
                <h6>Wind</h6>
            </div>
            <div>
                <FaWater />
                <h5>{weatherData && weatherData.main.humidity}%</h5>
                <h6>Humidity</h6>
            </div>
            <div>
                <FaEye />
                <h5>{weatherData && (weatherData.visibility/1000).toFixed(1)} km</h5>
                <h6>Visibility</h6>
            </div>
        </div>
    </div>
  )
}

export default CurrentInfo