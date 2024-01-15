import '../styles/weather.css';


const ListCity = ({ listCity, setCity }) => {
  return (
    <div className="container div-list-city">
      {
        listCity && listCity.map((city, index) => 
          <div className='div-result' onClick={() => setCity(city)} key={index}>
            <h5>{city.name}</h5>
            <p>{city.state}</p>
          </div>
        ) 
      }
    </div>
  )
}

export default ListCity
