// Ref'd in: Home.js 
import React from "react"

const Weather = (props) => {

    console.log(props.weather.weather);
    return (
        <>
            {props?.weather.error ? <></> : 
            <section>
                <header>
                    <h1>{props?.weather.address}</h1>
                    <span>As of {props?.weather.forecast.observation_time}</span>
                </header>
                <main>
                    <div>
                        <span>{props?.weather.forecast.temperature}°</span>
                        <div>Feels like {props?.weather.forecast.feelslike}°</div>
                        <div>{props?.weather.forecast.weather_descriptions}</div>
                    </div>
                    <div>
                        <img src={props?.weather.forecast.weather_icons} alt={props?.weather.forecast.weather_description}/>
                    </div>
                </main>
                <footer>
                    
                </footer>
            </section>}
        </>
    )
}

export default Weather