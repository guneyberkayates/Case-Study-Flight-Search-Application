import React from 'react';
import PropTypes from 'prop-types';
import styles from './AirportList.style';

function AirportList({ airports }) {
  return (
    <div style={styles.airportList}>
      <ul >
        {airports.map((airports, index) => (
          <li key={index}  style={styles.listItem}>
         <p style={{margin:-10}}> {airports.name}  {airports.code}  {airports.city}</p>  <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

AirportList.propTypes = {
    airports: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string, 
        code: PropTypes.string,
        city: PropTypes.string,
    })
  ),
};

export default AirportList;
