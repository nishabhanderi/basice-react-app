 import { useState } from "react";
import SearchBox from "./SearchBox";
 import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
         city:"Delhi",
       feelsLike : 29.22,
       humidity:35,
       temp:30.05,
       tempMax:30.05,
       tempMin:30.05,
       weather:"haze",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return( 

        <div style={{textAlign:"center"}}>
            <h2>Whether App by Delta</h2>  
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>  
        </div>
    );
}