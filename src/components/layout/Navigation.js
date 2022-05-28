import React from 'react'
import WeatherSearch from '../UI/WeatherSearch'

import './Navigation.scss'

const Navigation = ({toggleDialog, pullWeather}) => {
  return (
    <>
      <header className="nav-bar">
          <nav>
            <ul className='nav-bar__nav'>
              <li className="nav-bar__logo">
                <h1>Logo</h1>
              </li>
              <li className="nav-bar__search">
                <WeatherSearch pullWeather={pullWeather}/>
              </li>
              <li className="nav-bar__sign">
                <button 
                  className='nav-bar__sign' 
                  onClick={toggleDialog}
                >
                  Sign-in/Sign-up
                </button>
              </li>
            </ul>   
          </nav>
      </header>
    </>
  )
}

export default Navigation