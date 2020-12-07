import React from 'react';
import WeatherResults from './Views/WeatherResults';
import Home from'./Views/Home';

function App() {
  return (
    <div >
      <header >
       <Home/>
         <WeatherResults  city={"London"} /> 
         </header>
      
    </div>
  );
}

export default App;
