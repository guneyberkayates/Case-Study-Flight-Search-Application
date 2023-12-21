import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DepartureDate from './Selectables/Departure/DepartureDate';
import Departure from './Selectables/Departure/Departure';
import ArrivalDate from './Selectables/Arrival/ArrivalDate';
import Arrival from './Selectables/Arrival/Arrival';
import styles from './SearchBox.style';

function SearchBox({ onSearch }) {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    
    if (arrivalLocation.trim() !== '' && departureLocation.trim() !=='') {
      onSearch(departureLocation, arrivalLocation);
      
      fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureLocation}&arrival_location=${arrivalLocation}&start_date=2023-01-01&end_date=2023-01-10`)
        .then((response) => response.json())
        .then((data) => {
          console.log('API Response:', data);
         
        })
        .catch((error) => {
          console.error('Error:', error);
         
        });
    }
  }, [arrivalLocation, departureLocation]); 

  const switchRound = () => {
    setIsRoundTrip((prevIsRoundTrip) => !prevIsRoundTrip);
  };

  const departureChanged = (event) => {
    setDepartureLocation(event.target.value);
  };

  const arrivalChanged = (event) => {
    setArrivalLocation(event.target.value);
  };

  return (
    <div style={styles.searchbox}>
      <button onClick={switchRound}>
        {isRoundTrip ? 'Gidiş-Dönüş' : 'Tek Yön'}
      </button>
      <div style={styles.layout}>
      <Departure
          style={styles.departure}
          departureLocation={departureLocation}
          onDepartureChange={departureChanged}
        />
        <DepartureDate style={styles.departureDate} />
        <Arrival
          style={styles.arrival}
          arrivalLocation={arrivalLocation}
          onArrivalChange={arrivalChanged}
        />
        {isRoundTrip && <ArrivalDate styles={styles.arrivalDate} />}
      </div>
    </div>
  );
}

SearchBox.propTypes = {};

export default SearchBox;
