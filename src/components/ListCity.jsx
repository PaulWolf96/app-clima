import '../styles/weather.css';


const ListCity = ({ listCity, setCity }) => {
  return (
    <div className="container">
      {
        listCity && listCity.map((city, index) => 
          <div className='div-result' onClick={() => setCity(city)} key={index}>
            <h4>{city.name}</h4>
            <h5>{city.state}</h5>
          </div>
        ) 
      }
    </div>
  )
}

export default ListCity
