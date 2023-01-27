import React from 'react'
import Style from '../assets/css/myapp.module.css'
import CurrentInfo from './CurrentInfo'
import ForecastInfo from './ForecastInfo'
import SearchInput from './SearchInput'

const MyApp = () => {
  return (
    <div className={Style.myapp}>
        <div className={Style.main}>
            <SearchInput />
            <CurrentInfo />
            <ForecastInfo />
        </div>
    </div>
  )
}

export default MyApp