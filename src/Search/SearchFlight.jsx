import SearchBox from '../SearchBox/SearchBox';
import React,{ useState } from 'react';
import Flights from '../Flights/Flights';

function SearchFlight() {

  const [flights, setFlights] = useState([]);

  const fetchFlights = async () => {
    try {
      //const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`);
      const response = await fetch(``);
      const data = await response.json();
      console.log('API Response:', data);
      setFlights(data.airports); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  
  return (
    
     <div style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <SearchBox onSearchArrival={fetchAirportArrival} onSearchDeparture={fetchAirportDeparture} />
     
    </div>
  );
}

export default SearchFlight;
