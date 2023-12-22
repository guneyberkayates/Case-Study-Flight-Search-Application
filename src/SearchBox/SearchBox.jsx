import React, { useState, useEffect } from 'react';
import DepartureDate from './Selectables/Departure/DepartureDate';
import Departure from './Selectables/Departure/DepartureInput';
import ArrivalDate from './Selectables/Arrival/ReturnDate';
import Arrival from './Selectables/Arrival/ArrivalInput';
import TripType from './Selectables/TripType/TripType';
import styles from './SearchBox.style';

function SearchBox({ onSearchDeparture,onSearchArrival,onEmptyDeparture,onEmptyArrival }) {


  let lock = true
  const [tripType, setTripType] = useState('roundTrip');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  
  
  if (tripType === 'roundTrip'){
     lock = false
  }
  
  useEffect(() => {
    if (arrivalLocation.trim() !== '') {
      onSearchArrival(arrivalLocation);
    }
    else{
      onEmptyArrival()
    }
  }, [arrivalLocation]);

  useEffect(() => {
    if (departureLocation.trim() !== '') {
      onSearchDeparture(departureLocation);
    }
    else{
      onEmptyDeparture()
    }
  }, [departureLocation]);
    



  const departureChanged = (event) => {
    setDepartureLocation(event.target.value);
  };

  const arrivalChanged = (event) => {
    setArrivalLocation(event.target.value);
  };

  const tripTypeChanged = (event) => {
    setTripType(event.target.value);
  };

 

  return (
    <div style={styles.searchbox}>
      <TripType tripType={tripType} onTripTypeChange={tripTypeChanged} />

      <div style={styles.layout}>
      <Departure
          style={styles.departure}
          departureLocation={departureLocation}
          onDepartureChange={departureChanged}
        />
        <Arrival
          style={styles.arrival}
          arrivalLocation={arrivalLocation}
          onArrivalChange={arrivalChanged}
        />
        <DepartureDate 
          style={styles.departureDate} 
        />
        <ArrivalDate styles={styles.arrivalDate} lock={lock}/>
      </div>

    </div>
  );
}


export default SearchBox;
