import './App.css'
import Form from './components/Form'
import ListCity from './components/ListCity';
import Weather from './components/Weather';
import LogoClimapp from './assets/logoClimapp.png';
import { useWeatherContext } from './context/WeatherContext';

function App() {

  const { city, backgroundWeather } = useWeatherContext();

  return (
    <div className={`container-fluid ${backgroundWeather}` }>
      <div className='col col-4'>
        <div className='div-logo'><img src={LogoClimapp} alt="logo climapp" className='logo-climapp' /></div>
        <Form />
        <ListCity />
      </div>

      {
        city && 
        <div className='col col-7'>
          <Weather />
        </div>
      }

    </div>
  )
}

export default App
