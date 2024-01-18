import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useWeatherContext = () => {
  const context = useContext(Context);
  return context;
}

export const ContextProvider = ({children}) => {

  const API_KEY_WEATHER = '3bc5f4b90b8c37e62b1e7a15a33e6435';
  const API_KEY_TIMEZONE = 'NHU53POEK49I';
  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState('');
  const [currentCityTemperature, setCurrentCityTemperature] = useState(null);
  //guarda la clase css para la imagen de fondo (segun el tiempo de la ciudad)
  const [backgroundWeather, setBackgroundWeather] = useState('background-clouds');

  const getClassBackground = (data) => {
    if(data === 'Clouds') {
      setBackgroundWeather('background-clouds');
    } else if (data === 'Rain') {
      setBackgroundWeather('background-rain');
    } else if (data === 'Snow') {
      setBackgroundWeather('background-snow');
    } else if (data === 'Clear') {
      setBackgroundWeather('background-clear');
    } else if (data === 'Thunderstorm') {
      setBackgroundWeather('background-thunderstorm');
    } else {
      setBackgroundWeather('background-clouds');
    }
  }
  

  return (
    <Context.Provider 
      value={{ API_KEY_WEATHER, API_KEY_TIMEZONE, 
              listCity, setListCity, 
              city, setCity, 
              currentCityTemperature, setCurrentCityTemperature,
              backgroundWeather, setBackgroundWeather, getClassBackground }}>
      {children}
    </Context.Provider>
  );
}


