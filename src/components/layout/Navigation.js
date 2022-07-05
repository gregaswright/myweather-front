import React from 'react'
import { useSelector } from 'react-redux'
import WeatherSearch from '../UI/WeatherSearch'


import './Navigation.scss'

const Navigation = ({toggleDialog, pullWeather}) => {
const user = useSelector(state => state.user)

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
                { !user.isUserLoggedIn ? <button 
                  className='nav-bar__sign' 
                  onClick={toggleDialog}
                >
                  Sign-in/Sign-up
                </button> : <button> Logout </button>}
              </li>
            </ul>   
          </nav>
      </header>
    </>
  )
}

export default Navigation