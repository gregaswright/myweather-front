import React, { useEffect, useState } from "react"; 
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { useSelector, useDispatch } from 'react-redux'
import { weatherDataActions } from "../../store";
import useAxios from "../../hooks/useAxios";


import './WeatherSearch.scss'

const WeatherSearch = () => {
    const { res, loading, error, operation } = useAxios()
    const [place, setPlace] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const weatherStore = useSelector(state => state.data.weatherScriptMounted)
    const weather = useSelector(state => state.data.data)
    const dispatch = useDispatch()
 
    const search = (city) => {
        operation({
            method: 'GET',
            url: `/weather?address=${city}`, 
        })
    }
    
    useEffect(() => {
        if (res!== null) {
            dispatch(weatherDataActions.addWeatherData(res))
        }
    }, [res]);   
    
    const handleSelect = async (address, placeId, suggestion) => {
        const results = await geocodeByAddress(address)
        const formattedAddress = results[0].formatted_address
        setPlace(formattedAddress)
        search(formattedAddress)
    }

    const searchOptions = {
        types: [
            '(regions)'   
        ]
    }
   
    return (
        <>
            <form className='form' 
            >
                {weatherStore && <PlacesAutocomplete
                    value={searchInput}
                    onChange={setSearchInput}
                    onSelect={handleSelect}
                    searchOptions={searchOptions}
                    >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div className="form__group">
                        <div className="form__search">
                            <div className="form__controls">
                                <input className="form__input" {...getInputProps({ 
                                    placeholder: "Search City or Zip Code", 
                                    id: 'search'
                                })
                                }/>
                                <span className={searchInput ? "address-border" : "focus-border"}></span>
                            </div>     
                        </div>
                        {searchInput ? <div className="form__suggestion">
                            {loading && "...loading"}
                            {suggestions.map( suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' :
                                'suggestion-item';
                                const style = suggestion.active ?
                                { backgroundColor: '#7AA5BF', cursor: 'pointer' } : 
                                { backgroundColor: '#ffffff', cursor: 'pointer' }; 
                                const key = suggestion.placeId
                                return (
                                    <div 
                                        key={key}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                            
                                        })}
                                    >
                                        <span 
                                            // onClick={() => 
                                            //     // suggestionClickHandler(suggestion.description)
                                            // 
                                            // }
                                        >{suggestion.description}</span> 
                                    </div>
                                )
                            })}
                        </div>  : null}
                    </div>
                )}
                </PlacesAutocomplete>}
            </form>
        </>
    )
}

export default WeatherSearch