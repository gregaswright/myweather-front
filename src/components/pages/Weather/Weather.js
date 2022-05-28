import React from "react"

const Weather = (props) => {

    return (
        <>
            {props?.weather.error ? <></> : 
            <section>
                <header>
                    <h1>{props?.weather.address}</h1>
                    <span>As of {props?.weather.forecast.place.observation_time}</span>
                </header>
                <main>
                    <div>
                        <span>{props?.weather.forecast.place.temperature}°</span>
                        <div>Feels like {props?.weather.forecast.place.feelslike}°</div>
                        <div>{props?.weather.forecast.place?.weather_descriptions}</div>
                    </div>
                    <div>
                        <img src={props.weather.forecast.place?.weather_icons} alt={props?.weather.forecast.place.weather_description}/>
                    </div>
                </main>
                <footer>
                    
                </footer>
            </section>}
        </>
    )
}

export default Weather