import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DepartureAirports.style';

function DepartureAirports({ airports, onSelectDeparture }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const select = (airport) => {
    onSelectDeparture(airport);
    setIsOpen(false);
  };

  const selectItem = (index, airport) => {
    setSelectedItem(index);
    select(airport.city);
  };

  return (
    <div style={{ ...styles.airportList, display: isOpen ? 'block' : 'none' }}>
      <div style={styles.scrollableListContainer}>
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
    </div>
  );
}

DepartureAirports.propTypes = {
  airports: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
      city: PropTypes.string,
    })
  ),
  onSelectDeparture: PropTypes.func.isRequired,
};

export default DepartureAirports;
