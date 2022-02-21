import React,{useState, useEffect,useContext} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import { shopContext } from "../context/CustomProvider";

import 'bootstrap/dist/css/bootstrap.min.css'; 



export default function WeatherApi (){

    
    const { dateBuilder} = useContext(shopContext)
    const { setQuery} = useContext(shopContext)
    const { query} = useContext(shopContext)
    const { search} = useContext(shopContext)
    const {  weather} = useContext(shopContext)

    
   
 

    return(
        <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp >16)? 'app warm': 'app'):'app'}>
        <main>
            <div className='search-box'>
                <input
                type='text'
                className='search-bar'
                placeholder='Search...'
                onChange={e=>setQuery(e.target.value)}
                value={query}
                onKeyPress={search}

                />
            </div>
            {(typeof weather.main != 'undefined')?(
                <div>
                    <div className='location-box'>
                        <div className='location'>{weather.name}, {weather.sys.country}</div>
                        <div className='date'>{dateBuilder(new Date())}</div>
                    </div>

                    <div className='weather-box'>
                        <div className='temp'>
                            {Math.round(weather.main.temp)} ° c
                    </div>
                    
                    <div className='weather'>
                        {weather.weather[0].main}
                    </div>

                    </div>
            </div>
            ):('')}
       
        
        </main>
        </div>
    )
}

