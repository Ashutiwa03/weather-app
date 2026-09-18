import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
         city:"Delhi",
         feelslike : 24.84,
         temp : 25.84,
         tempMin : 24.84,
         tempMax : 25.84,
         humidity : 24,
         weather : "Cloudy"
    
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }

    return(<div className="weatherApp">
        <h2 className="title">Weather App </h2>
        <SearchBox updateInfo ={updateInfo}/>
        <InfoBox info={weatherInfo} />
        </div>
        );
}