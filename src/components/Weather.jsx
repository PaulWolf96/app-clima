import { useState, useEffect } from "react";

const Weather = ({ city }) => {

  const API_KEY_WEATHER = '3bc5f4b90b8c37e62b1e7a15a33e6435';
  const API_KEY_TIMEZONE = 'NHU53POEK49I';
  const [currentCityTemperature, setCurrentCityTemperature] = useState(null);
  const [localTime, setLocalTime] = useState(null);
  //obtengo las coordenas de la ciudad seleccionada
  const { lat, lon } = city;

  useEffect(() => {
    if(city) {
      const fetchCurrentWeather = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&lang=es&units=metric`)
          if (!response.ok) {
            throw new Error('Error al obtener la ciudad');
          }
          const data = await response.json();
          setCurrentCityTemperature(data);
        } catch (error) {
          console.error(error)
        }
      }

      const getLocalTime = async () => {
        try {
          const response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY_TIMEZONE}&format=json&by=position&lat=${lat}&lng=${lon}`)
          if(!response.ok) {
            throw new Error('Error al obtener la hora local');
          }
          const { formatted } = await response.json();
          const getHour = new Date(formatted).toLocaleTimeString().split(":");
          const hour = `${getHour[0]}:${getHour[1]}`;
          setLocalTime(hour);
        } catch (error) {
          console.error(error);
        }
      }


      fetchCurrentWeather();
      getLocalTime();
    } 
  }, [city])




  return (
      currentCityTemperature &&
        (
          <div className="div-weather">
            <h1>{`${Math.round(currentCityTemperature.main.temp)}°C`}</h1>
            <h2>{currentCityTemperature.name}</h2>
            <h3> {`Sensación térmica: ${Math.round(currentCityTemperature.main.feels_like)}°C`}</h3>
            <h4> {`Viento: ${Math.round(currentCityTemperature.wind.speed * 3.6)} Km/h`} </h4>
            <h5>{currentCityTemperature.weather[0].description}</h5>
            <h6> {`Humedad: ${currentCityTemperature.main.humidity}%`} </h6>
            <p> {`Hora: ${localTime}`}</p> 
            <img src={`https://openweathermap.org/img/wn/${currentCityTemperature.weather[0].icon}@2x.png`} width="100px" alt="icono del clima" />
          </div>
        )
  )
}

export default Weather
