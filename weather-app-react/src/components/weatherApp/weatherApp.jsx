import React from "react";
import './weatherApp.css';

import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';       
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';


function weatherApp() {

    let api_key = "693b44653e5ac79a8b6fbd69b9a1c614";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${api_key}`;

        let response = await fetch(url);

        let data = await response.json();

    
    }   

    return (
        <div className="container">
            <div className="top-bar">
                <input  type="text" 
                        classname="cityInput"
                        placeholder="search"
                />     
                <div className="search-icon" onClick={() => {search()}}> 
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">10 m/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default weatherApp;