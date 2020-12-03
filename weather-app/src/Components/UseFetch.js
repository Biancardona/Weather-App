import { useState, useEffect } from 'react';
const API_key  = 'e8d81274510e0cf2a8156f89e368b886';


export  function useFetch(cityName){
    const [data, setData] =useState([]);
useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
    .then((response) => response.json())
    .then((res) => setData(res));
    console.log(data)

  }, [cityName, data]);

  return data;

}
