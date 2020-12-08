const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
  };
  
  const WeatherReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case "WEATHER_DATA_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "WEATHER_DATA_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to find data"
        };
      case "WEATHER_DATA_SUCCESS":
        return {
          ...state,
          loading: false,
          errorMsg: "",
          data: {
            ...state.data,
          [action.cityName] : action.payload
        }
     
        };
      default:
        return state
    }
  };
  
  export default WeatherReducer;