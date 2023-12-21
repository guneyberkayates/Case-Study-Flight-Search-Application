import SearchBox from '../SearchBox/SearchBox';
import React,{ useState } from 'react';
import AirportList from '../SearchBox/AirportList/AirportList';
function SearchAirport() {

  const [flights, setFlights] = useState([]);
  const [airports, setAirports] = useState([]);

  const fetchAirportDeparture = async (departureLocation) => {
    try {
      //const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`);
      const response = await fetch(`http://127.0.0.1:5000/api/airports?query=${departureLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      setAirports(data.airports); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const fetchAirportArrival = async (arrivalLocation) => {
    try {
      //const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`);
      const response = await fetch(`http://127.0.0.1:5000/api/airports?query=${arrivalLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      setAirports(data.airports); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    
     <div style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <SearchBox onSearchArrival={fetchAirportArrival} onSearchDeparture={fetchAirportDeparture} />
      <AirportList airports={airports}/>
    </div>
  );
}

export default SearchAirport;
