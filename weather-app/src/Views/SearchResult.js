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
             return(
             <div >
              {weatherData.weather[0].main}
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

