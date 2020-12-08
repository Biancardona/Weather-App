import 'bootstrap/dist/css/bootstrap.min.css';
import {GetWeatherData} from '../Actions/WeatherActions';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import React from 'react';



const SearchResult = (props) => {
  
    const cityName = props.match.params.id;
    const dispatch = useDispatch();
    const searchState= useSelector(state => state.WeatherReducer);
    console.log(searchState);

   React.useEffect(() => {
       dispatch(GetWeatherData(cityName))
   }, []);


   const ShowData = () => {
    if (!_.isEmpty(searchState.data[cityName])) {
         const weatherData = searchState.data[cityName];
         const iconUrl = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"

             return(
             <div >
              {"Weather: " + weatherData.weather[0].main}
              <br />
              {"Description: " + weatherData.weather[0].description}
              <br />
              {"Temp: " + weatherData.main.temp}
              <br/>
              {"Temp_Min: " + weatherData.main.temp_min}
              <br/>
              {"Temp_Max: " + weatherData.main.temp_max}
              <br/>
              {"Humidity: " + weatherData.main.humidity}
              <br/>
              <img src={iconUrl}/>
             </div>
             )
         }
    
    if (searchState.loading) {
        return <p>Loading...</p>
      }  
    if (searchState.errorMsg !== "") {
        return <p>{searchState.errorMsg}</p>
      }
  
      return <p>unable to get data</p>

     }
    return(
        <div>
        
        <h1>{cityName}</h1>
        {ShowData()}
      </div>
    )
  };
          
export default SearchResult

