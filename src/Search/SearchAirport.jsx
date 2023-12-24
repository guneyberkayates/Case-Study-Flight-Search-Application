import React, { useState } from 'react';
import ArrivalAirports from '../SearchBox/AirportList/ArrivalAirports/ArrivalAirports';
import DepartureAirports from '../SearchBox/AirportList/DepartureAirports/DepartureAirports';
import SearchBox from '../SearchBox/SearchBox';
import styles from './SearchAirport.style';
function SearchAirport() {
  const [airportsDeparture, setAirportsDeparture] = useState([]);
  const [airportsArrival, setAirportsArrival] = useState([]);
  const [empty, setEmpty] = useState([]);
  const [showAirports, setShowAirports] = useState(true);

  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [selectedArrival, setSelectedArrival] = useState(null);

  const selectDeparture = (airport) => {
    setSelectedDeparture(airport);
  };

  const selectArrival = (airport) => {
    setSelectedArrival(airport);
  };

  const fetchAirportDeparture = async (departureLocation) => {
    try {
      setShowAirports(true);
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
      setShowAirports(true);
      const response = await fetch(`http://127.0.0.1:5000/api/airports?query=${arrivalLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      setAirportsArrival(data.airports);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const emptySearchDeparture = async () => {
    setAirportsDeparture(empty);
    setShowAirports(false);
  };

  const emptySearchArrival = async () => {
    setAirportsArrival(empty);
    setShowAirports(false);
  };

  const closeAirportSelection = () => {
    setShowAirports(false);
  };

  return (
    <div style={styles.searchAirport}>
      <SearchBox
        onSearchArrival={fetchAirportArrival}
        onSearchDeparture={fetchAirportDeparture}
        onEmptyDeparture={emptySearchDeparture}
        onEmptyArrival={emptySearchArrival}
        selectedDeparture={selectedDeparture}
        selectedArrival={selectedArrival}
      />

      {showAirports && (
        <>
          <DepartureAirports airports={airportsDeparture} onSelectDeparture={selectDeparture} />
          <ArrivalAirports airports={airportsArrival} onSelectArrival={selectArrival} onClose={closeAirportSelection} />
        </>
      )}
     
    </div>
  );
}

export default SearchAirport;
