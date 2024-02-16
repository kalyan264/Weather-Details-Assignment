import React, { useState } from "react";
import "./weather-report.css"
import Loader from "../loader/loader";
import WeatherTable from "../weather-table/weather-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const WeatherReport = () => {

    const [city, setCity] = useState ('')
    const [showLoader, setShowLoader] = useState(false)
    const[cityWeatherDetails, setCityWeatherDetails] = useState (null)

    //as im getting oneday weather details through api. that why im taking fiveDaysDetails state adding that data 5times and displaying.
    const [fiveDaysDetails, setFiveDaysDetails] = useState([])
    
    console.log(fiveDaysDetails,"---5")

    const handleChangeCity = (e) =>{
        setCity(e.target.value)
    }

    const OnSearch = () =>{
        console.log("clicking on search")
        setShowLoader(true)
        const apiKey = "1635890035cbba097fd5c26c8ea672a1";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(url)
        .then(async (res) => {
            const response = await res.json();
            let fiveDaysDetailsCopy=[]
            setCityWeatherDetails(response)
            for (let i = 0; i < 5; i++) {
                fiveDaysDetailsCopy.push(response);
            }
            setFiveDaysDetails(fiveDaysDetailsCopy)
            setShowLoader(false)
            console.log("response----", response);
        })
        .catch((error) => {
            console.log(error);
            setShowLoader(false)
            });
    }
    return( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <h3 className="text-color mb-0">Weather in your city</h3>
                </div>
                <div className="col-sm-12 col-md-2 mt-2">
                    <input className="input-field-styles " value={city} onChange={handleChangeCity} />
                </div>
                <div className="col-sm-12 col-md-1 mt-2">
                    <button className="search-button" onClick={OnSearch}><span className="me-1"> <FontAwesomeIcon icon={faQuestionCircle} /></span>Search</button>
                </div>
                {
                    showLoader && <Loader />
                }
            

            </div>
            <div className="row">
                {cityWeatherDetails && fiveDaysDetails.map((details, index) => {
                   return (<div key={'0'+index } className="col-sm-12 col-md-2 mt-5">
                       <WeatherTable date={"16/2/2024"} weatherDetails={details.main} />
                     </div>
                   )
                }
                )}
                    

            </div>

        </div> 
    )

}
export default WeatherReport;