import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox/SearchBox';
import Flights from './Flights/Flights';
import React,{ useState } from 'react';
function App() {
  const [flights, setFlights] = useState([]);

  const fetchFlightsData = async (departureLocation, arrivalLocation) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`);
      const data = await response.json();
      console.log('API Response:', data);
      setFlights(data.flights); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    
     <div >
      <SearchBox onSearch={fetchFlightsData} />
      <Flights flights={flights} />
    </div>
  );
}

export default App;
