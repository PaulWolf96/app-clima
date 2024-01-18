import { useState, useEffect } from 'react'
import { useWeatherContext } from '../context/WeatherContext';

const Form = () => {

  const {API_KEY_WEATHER, setListCity} = useWeatherContext();
  const [input, setInput] = useState('');
  
  useEffect(() => {
    if(input) {
      const fetchDataSearch = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY_WEATHER}&lang=es`);
          if (!response.ok) {
            throw new Error('Error al realizar la búsqueda');
          }
          const data = await response.json();
          setListCity(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      }
    
      fetchDataSearch();
    }
  }, [input])



  return (
    <div className='container'>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="form-label" htmlFor="formSearch">Buscar una ciudad</label>
        <input className="form-control" type="text" placeholder="Ej. Buenos Aires" id="formSearch" value={input}
          onChange={(e) => setInput(e.target.value)} />
      </form>
    </div>
  )
}

export default Form
