import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ArrivalAirports.style';

function ArrivalAirports({ airports, onSelectArrival }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true); 

  const select = (airport) => {
    onSelectArrival(airport);
    setIsOpen(false); 
  };

  const selectItem = (index, airport) => {
    setSelectedItem(index);
    select(airport.city);
  };

  return (
    <div style={{ ...styles.airportList, display: isOpen ? 'block' : 'none' }}>
      <ul style={styles.scrollableList}>
        {airports.map((airport, index) => (
          <li key={index} onClick={() => selectItem(index, airport)}>
            <div
              style={{
                ...styles.listItem,
                ...(index === selectedItem && styles.selectedListItem),
              }}
            >
              <p style={styles.text}>
                {airport.name} ({airport.code}) , {airport.city}
              </p>
              <br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ArrivalAirports.propTypes = {
  airports: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
      city: PropTypes.string,
    })
  ),
  onSelectArrival: PropTypes.func.isRequired,
};

export default ArrivalAirports;
