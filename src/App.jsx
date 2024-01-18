import './App.css'
import { useState } from 'react';
import Form from './components/Form'
import ListCity from './components/ListCity';
import Weather from './components/Weather';
import LogoClimapp from './assets/logoClimapp.png';

function App() {

  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState('');


  return (
    <div className='container-fluid'>
      <div className='col col-4'>
        <div className='div-logo'><img src={LogoClimapp} alt="logo climapp" className='logo-climapp' /></div>
        <Form setListCity={setListCity} />
        <ListCity
          listCity={listCity}
          setCity={setCity}
        />
      </div>

      {
        city && 
        <div className='col col-7'>
          <Weather city={city} />
        </div>
      }
      
    </div>
  )
}

export default App
