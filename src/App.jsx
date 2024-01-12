import './App.css'
import { useState } from 'react';
import Form from './components/Form'
import ListCity from './components/ListCity';
import Weather from './components/Weather';

function App() {

  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState('');
  const API_KEY = '3bc5f4b90b8c37e62b1e7a15a33e6435';

  return (
    <div className='container-fluid'>
      <div className='col col-4'>
        <Form setListCity={setListCity} />
        <ListCity 
          listCity={listCity} 
          setCity={setCity}
        />
      </div>
      <div className='col col-8'>
        <Weather city={city} />
      </div>
    </div>
  )
}

export default App
