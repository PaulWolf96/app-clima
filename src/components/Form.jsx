import { useState, useEffect } from 'react'

const Form = ({ setListCity }) => {

  const API_KEY = '3bc5f4b90b8c37e62b1e7a15a33e6435';
  const [input, setInput] = useState('');
  
  useEffect(() => {
    if(input) {
      const fetchDataSearch = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}&lang=es`);
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
