import React, { useState } from "react"; 
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { weatherDataActions } from "../../store";

import './WeatherSearch.scss'

const WeatherSearch = () => {
    const [address, setAddress] = useState("");

    const weatherStore = useSelector(state => state.data)
    const dispatch = useDispatch()
    
    const fetchData = async (place) => {
        const result = await axios(
                `http://localhost:3000/weather?address=${place}`
        );
        console.log(result.data)
        // dispatch({ type: 'ADD_WEATHER_DATA', data: result.data})
        
        weatherDispatchHandler(result.data)
    }

    const weatherDispatchHandler = (data) => {
        dispatch(weatherDataActions.addWeatherData(data))
    }

    const localSubmitHandler = (event) => {
        event.preventDefault()
        if (address) {
            fetchData(address)
            console.log('localsubmithandler')
        }     
    }

    const handleSelect = async (address, placeId, suggestion) => {
        const results = await geocodeByAddress(address)
        const formattedAddress = results[0].formatted_address
        setAddress(formattedAddress)
        if (placeId) {
                fetchData(address)
                console.log('handleselect')
            }
    }

    const localClickHandler = (place) => {
        console.log('place')
        fetchData(place)
    }

    const resetForm = () => {
        setAddress('')
    }
  
    const searchOptions = {
        types: [
            '(regions)'   
        ]
    }
   
    // console.log(weatherData)
    return (
        <>
            <form className='form' onSubmit={localSubmitHandler} >
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                    searchOptions={searchOptions}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div className="form__group">
                        <div className="form__search">
                            <div className="form__controls">
                                <input className="form__input" {...getInputProps({ 
                                    placeholder: "Search City or Zip Code", 
                                    id: 'search'
                                })
                                }/>
                                <span className={address ? "address-border" : "focus-border"}></span>
                                {/* <span className={ address ? "border-bottom--none" : "border-bottom"}></span> */}
                            </div>
                            {/* <div className="form__button">
                                    <Button className={address ? "form__button--reset" : 'form__button--address'} onClick={resetForm}>
                                        <img className="form__button--image_visible" src='/delete.png' alt="delete"/>
                                    </Button>  
                            </div> */}
                        </div>
                        {address ? <div className="form__suggestion">
                            {loading && "...loading"}
                            {suggestions.map( suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' :
                                'suggestion-item';
                                const style = suggestion.active ?
                                { backgroundColor: '#7AA5BF', cursor: 'pointer' } : 
                                { backgroundColor: '#ffffff', cursor: 'pointer' }; 
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span onClick={() => localClickHandler(suggestion.description)}>{suggestion.description}</span> 
                                    </div>
                                )
                            })}
                        </div>  : null}
                    </div>
                )}
                </PlacesAutocomplete>
            </form>
            {/* <Card>
                {weatherData ? <Weather weatherData={weatherData}/> : null}
            </Card> */}
        </>
    )
}

export default WeatherSearch