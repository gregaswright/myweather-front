import React from 'react'
import Weather from './Weather/Weather'
import { useSelector} from 'react-redux'

import Card from '../UI/Card'

// import './Card.scss';

const Home = () => {
 
  const weather = useSelector(state => state.data.data)

  // console.log(weather)
  
  return (
    <div className='home__main'>
        <Card >
            {weather ? <Weather weather={weather}/> : <></>}  
        </Card>
    </div>
  )
}

export default Home