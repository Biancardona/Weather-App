import 'bootstrap/dist/css/bootstrap.min.css';
/* import '../Style/custom.css'; */
import {GetWeatherData} from '../Actions/WeatherActions';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import React from 'react';
import NavBar from '../Components/Navbar';
import BackTo from "../Components/LinkBackTo";
import {Jumbotron} from 'react-bootstrap';
/* import clouds from "../Assets/clouds.jpg"; */
import styles from '../Style/custom.module.css';



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
/*         const BackgroundClouds = `url(${clouds})`; */
          switch(weatherData.weather[0].main){
           case"Clear":
           styles.backgroundImage='url(${require("../Assets/clear.jpg")})';
           break;
           case"Clouds":
           styles.backgroundImage='url(${require("../Assets/clouds.jpg")})';
           break;
           default:
            break;
         }

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


      <div >
      <div className="columns is-multiline">
              <div className="column"></div>
              <header>
        <NavBar> </NavBar>
    </header>

  <div className= "container "> 
  <Jumbotron >
  <div  className="bg1"> 
  <h1> Results for weather in {cityName}</h1>
 
    <div> 
    {ShowData()}
        <BackTo move="/" nameback="Weather Search"/>
                
                  </div>
                  </div>
               
                  </Jumbotron>
  </div>
  </div>
  </div>


 
);
}

       
export default SearchResult

