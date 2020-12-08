import axios from "axios";
const API_key  = 'e8d81274510e0cf2a8156f89e368b886';


export  const GetWeatherData = (citySearch)=> async dispatch => {
    try{
        dispatch({
            type: "WEATHER_DATA_LOADING"
        });
  

    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_key}`) //fetch request.
    dispatch({
        type: "WEATHER_DATA_SUCCESS",
        payload: res.data,
        cityName: citySearch 
    })
} catch (e) {
    dispatch({
            type: "WEATHER_DATA_FAIL",
    })
  }
};
