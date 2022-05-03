import React from 'react'
import WeatherSearch from '../UI/WeatherSearch'

import './Navigation.scss'

const Navigation = () => {
  return (
    <>
      <header className="nav-bar">
          <nav>
            <ul className='nav-bar__nav'>
              <li className="nav-bar__logo">
                <h1>Logo</h1>
              </li>
              <li className="nav-bar__search">
                <WeatherSearch />
              </li>
              <li className="nav-bar__sign">
                <a className='nav-bar__sign' href=''>Sign-in/Sign-up</a>
              </li>
            </ul>   
          </nav>
      </header>
    </>
  )
}

export default Navigation