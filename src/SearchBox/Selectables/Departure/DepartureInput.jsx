import React from 'react';
import styles from './Departure.style';
function Departure({ departureLocation, onDepartureChange }) {

  const departureChanged = (event) => {
    onDepartureChange(event);
  };

  return (
    <div style={styles.layout}>
      <input
        style={styles.input}
        value={departureLocation}
        onChange={departureChanged}
        placeholder={"Nereden"}
      />
    </div>
  );
}



export default Departure;