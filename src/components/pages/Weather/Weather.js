import React from "react";

const Weather = (props) => {
    
    const address = props.weather.address
    const forecast = props.weather.forecast 

    console.log(forecast, address, props)
    return (
        <>
            <section>
                <header>
                    <h1>{address}</h1>
                    <span>As of {forecast.place.observation_time}</span>
                </header>
                <main>
                    <div>
                        <span>{forecast.place.temperature}°</span>
                        <div>Feels like {forecast.place.feelslike}°</div>
                        <div>{forecast.place.weather_descriptions}</div>
                    </div>
                    <div>
                        <img src={forecast.place.weather_icons} alt={forecast.place.weather_description}/>
                    </div>
                </main>
                <footer>
                    
                </footer>
            </section>
        </>
    )
}

export default Weather