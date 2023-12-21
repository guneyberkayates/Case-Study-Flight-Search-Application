import React from 'react';
import PropTypes from 'prop-types';
import styles from './Flights.style';

function Flights({ flights }) {
  return (
    <div style={styles.flights}>
      <h2>Uçuşlar</h2>
      <ul style={styles.layout}>
        {flights.map((flight, index) => (
          <li key={index}>
            <strong>Havayolu:</strong> {flight.airline}<br />
            <strong>Kalkış Yeri:</strong> {flight.departure_location}<br />
            <strong>Kalkış Zamanı:</strong> {flight.departure_time}<br />
            <strong>Varış Yeri:</strong> {flight.arrival_location}<br />
            <strong>Varış Zamanı:</strong> {flight.arrival_time}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

Flights.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      airline: PropTypes.string,
      arrival_location: PropTypes.string,
      arrival_time: PropTypes.string,
      departure_location: PropTypes.string,
      departure_time: PropTypes.string,
    })
  ),
};

export default Flights;
