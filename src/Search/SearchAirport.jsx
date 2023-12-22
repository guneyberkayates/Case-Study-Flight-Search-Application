import SearchBox from '../SearchBox/SearchBox';
import React,{ useState } from 'react';
import ArrivalAirports from '../SearchBox/AirportList/ArrivalAirports/ArrivalAirports';
import DepartureAirports from '../SearchBox/AirportList/DepartureAirports/DepartureAirports';
function SearchAirport() {

  const [flights, setFlights] = useState([]);
  const [airportsDeparture, setAirportsDeparture] = useState([]);
  const [airportsArrival, setAirportsArrival] = useState([]);
  const [empty,setEmpty] = useState([])
  const [showAirports,setShowAirports] = useState(true)

  const fetchAirportDeparture = async (departureLocation) => {
    try {
      setShowAirports(true)
      //const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`);
      const response = await fetch(`http://127.0.0.1:5000/api/airports?query=${departureLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      setAirportsDeparture(data.airports); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const fetchAirportArrival = async (arrivalLocation) => {
    try {
      setShowAirports(true)
      //const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`);
      const response = await fetch(`http://127.0.0.1:5000/api/airports?query=${arrivalLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      setAirportsArrival(data.airports); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const emptySearchDeparture = async () =>{
    setAirportsDeparture(empty); 
    setShowAirports(false)

  }

  const emptySearchArrival = async () =>{
    setAirportsArrival(empty); 
    setShowAirports(false)


  }

  
  return (
    
     <div style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <SearchBox onSearchArrival={fetchAirportArrival} onSearchDeparture={fetchAirportDeparture} onEmptyDeparture={emptySearchDeparture} onEmptyArrival={emptySearchArrival} />
      
      { showAirports && 
      <>
      <DepartureAirports airports={airportsDeparture} />
      <ArrivalAirports airports={airportsArrival}/>
      </>
        }
     
    </div>
  );
}

export default SearchAirport;
