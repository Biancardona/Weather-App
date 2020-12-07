import React from 'react';
import {useFetch} from '../Components/UseFetch';





export default function CityWeather ({city}) {
    console.log(city);
    const data = useFetch(city);
    console.log(data);
    return(
   

        <div className="container">
            <div className="row">
     
                       
                    
                    <div> 
                                {"Icon: " + data.weather[0].main}
                               </div>
                
                    </div>
                </div>
    
 
);
    }




