import React, { useState } from 'react';
import ArrivalAirports from '../SearchBox/AirportList/ArrivalAirports/ArrivalAirports';
import DepartureAirports from '../SearchBox/AirportList/DepartureAirports/DepartureAirports';
import SearchBox from '../SearchBox/SearchBox';
import styles from './SearchAirport.style';

function SearchAirport() {
  const [airportsDeparture, setAirportsDeparture] = useState([]);
  const [airportsArrival, setAirportsArrival] = useState([]);
  const [errorDeparture, setErrorDeparture] = useState(null);
  const [errorArrival, setErrorArrival] = useState(null);
  const [empty, setEmpty] = useState([]);
  const [showAirportsDep, setShowAirportsDep] = useState(true);
  const [showAirportsArr, setShowAirportsArr] = useState(true);

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
      setShowAirportsDep(true);
      setShowAirportsArr(true);
      const response = await fetch(`http://34.125.26.179/api/airports?query=${departureLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      if (data.airports.length === 0) {
        setErrorDeparture('Aradığınız havaalanı bulunamadı');
      } else {
        setAirportsDeparture(data.airports);
        setErrorDeparture(null);  
      }
    } catch (error) {
      setErrorDeparture('API ile ilgili bir hata oluştu');
      console.error('Error:', error);
    }
  };

  const fetchAirportArrival = async (arrivalLocation) => {
    try {
      setShowAirportsDep(true);
      setShowAirportsArr(true);
      const response = await fetch(`http://34.125.26.179/api/airports?query=${arrivalLocation}`);
      const data = await response.json();
      console.log('API Response:', data);
      if (data.airports.length === 0) {
        setErrorArrival('Aradığınız havaalanı bulunamadı');
      } else {
        setAirportsArrival(data.airports);
        setErrorArrival(null); 
      }
    } catch (error) {
      setErrorArrival('API ile ilgili bir hata oluştu');
      console.error('Error:', error);
    }
  };

  const emptySearchDeparture = async () => {
    setAirportsDeparture(empty);
    setShowAirportsDep(false);
  };

  const emptySearchArrival = async () => {
    setAirportsArrival(empty);
    setShowAirportsArr(false);
  };

  const closeAirportSelectionDep = () => {
    setShowAirportsDep(false);
  };
  const closeAirportSelectionArr = () => {
    setShowAirportsArr(false);
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

      {showAirportsDep && (
        <>
          <DepartureAirports airports={airportsDeparture} onSelectDeparture={selectDeparture} onClose={closeAirportSelectionDep} errorOnDeparture={errorDeparture}/>
        </>
      )}
       {showAirportsArr && (
        <>
          <ArrivalAirports airports={airportsArrival} onSelectArrival={selectArrival} onClose={closeAirportSelectionArr} errorOnArrival={errorArrival}/>
        </>
      )}

     
    </div>
  );
}

export default SearchAirport;
