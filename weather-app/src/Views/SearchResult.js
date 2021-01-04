import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/custom.css";
import { GetWeatherData } from "../Actions/WeatherActions";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import React from "react";
import NavBar from "../Components/Navbar/Navbar";
import LinkBackTo from "../Components/LinkBackTo/LinkBackTo";
import { Jumbotron } from "react-bootstrap";

/* import clear from "../Assets/clear.jpg"; */
import style from "../Style/custom.module.css";

const SearchResult = (props) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  const cityName = props.match.params.id;
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.WeatherReducer);
  const [weatherCity, setWeatherCity] = useState(searchState.data[cityName]);
  let currentWeather = searchState.data[cityName];
  console.log(searchState);

  // actualiza el state cuando existen datos de clima
  useEffect(() => {
    setWeatherCity(searchState.data[cityName]);
  }, [searchState]);

  // ejecuta el action que obtiene los datos del clima
  useEffect(() => {
    dispatch(GetWeatherData(cityName));
  }, []);

  // Actualiza el background del componente Jumbotron
  useEffect(() => {
    if (typeof weatherCity !== "undefined") {
      currentWeather = weatherCity.weather[0].main;
      if (typeof currentWeather !== "undefined") {
        switch (currentWeather) {
          case "Clear":
            setBackgroundImage("jumbotronClear");
            break;
          case "Clouds":
            setBackgroundImage("jumbotronClouds");
            break;
          default:
            break;
        }
      }
    }
  }, [weatherCity]);

  const ShowData = () => {
    if (!_.isEmpty(searchState.data[cityName])) {
      const weatherData = searchState.data[cityName];
      const iconUrl =
        "https://openweathermap.org/img/w/" +
        weatherData.weather[0].icon +
        ".png";

      return (
        <div>
          {" "}
          {"Weather: " + weatherData.weather[0].main} <br />{" "}
          {"Description: " + weatherData.weather[0].description} <br />{" "}
          {"Temp: " + weatherData.main.temp} <br />{" "}
          {"Temp_Min: " + weatherData.main.temp_min} <br />{" "}
          {"Temp_Max: " + weatherData.main.temp_max} <br />{" "}
          {"Humidity: " + weatherData.main.humidity} <br />
          <img src={iconUrl} />{" "}
        </div>
      );
    }

    if (searchState.loading) {
      return <p> Loading... </p>;
    }

    if (searchState.errorMsg !== "") {
      return <p> {searchState.errorMsg} </p>;
    }

    return <p> unable to get data </p>;
  };
  return (
    <div>
      <div className="columns is-multiline">
        <div className="column"> </div>{" "}
        <header>
          <NavBar> </NavBar>{" "}
        </header>
        <div className="container ">
          <Jumbotron className={style[backgroundImage]}>
            <div className="bg1">
              <h1> Results for weather in {cityName} </h1>
              <div>
                {" "}
                {ShowData()} <LinkBackTo move="/" nameback="Weather Search" />
              </div>{" "}
            </div>{" "}
          </Jumbotron>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SearchResult;
