import React, { useContext } from 'react'
import Style from '../assets/css/forecast.module.css'
import { WeatherContex } from '../contex/WeatherContex'
import { dateConverter } from '../utility/dateConverter'

const ForecastInfo = () => {
    const { forecastData } = useContext(WeatherContex)
    const dailyData = forecastData && forecastData.list.filter((list, index )=> index % 8 === 0)

  return (
    <div className={Style.infos}>
        {forecastData && dailyData.map(data => {
            const { dayNameShort } = dateConverter(data.dt_txt)
            return(
                <div key={data.dt} className={Style.info}>
                    <div className={Style.day}>{dayNameShort}</div>
                    <div className={Style.sky}>
                        <img className={Style.icon} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='' />
                        <p className={Style.text}>{data.weather[0].description}</p>
                    </div>
                    <div className={Style.temp}>{(data.main.temp).toFixed(1)}°C</div>
                </div>
            )
        })}
        
    </div>
  )
}

export default ForecastInfo