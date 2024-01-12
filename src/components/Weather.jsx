import { useState, useEffect } from "react";

const Weather = ({ city }) => {

  const API_KEY = '3bc5f4b90b8c37e62b1e7a15a33e6435';
  const [currentCityTemperature, setCurrentCityTemperature] = useState(null);

  //obtengo las coordenas de la ciudad seleccionada
  const { lat, lon } = city;


  useEffect(() => {
    if(city) {
      const fetchCurrentWeather = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
          if (!response.ok) {
            throw new Error('Error al obtener la ciudad');
          }
          const data = await response.json();
          setCurrentCityTemperature(data);
        } catch (error) {
          console.error(error)
        }
      }

      fetchCurrentWeather();
    } 
  }, [city])





  return (
    <div className="container">
      {currentCityTemperature &&

        (
          <div>
            <h1>{`${Math.round(currentCityTemperature.main.temp)}°C`}</h1>
            <p>Max:{`${Math.round(currentCityTemperature.main.temp_max)}°C`}</p>
            <p>Min:{`${Math.round(currentCityTemperature.main.temp_min)}°C`}</p>
            <h6>{currentCityTemperature.name}</h6>
            <h5>{currentCityTemperature.weather[0].description}</h5>
            <img src={`https://openweathermap.org/img/wn/${currentCityTemperature.weather[0].icon}@2x.png`} alt="icono del clima" />
          </div>
        )

      }
    </div>
  )
}

export default Weather
