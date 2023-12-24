import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DepartureAirports.style';

function DepartureAirports({ airports, onSelectDeparture,errorOnDeparture }) {
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
            {errorOnDeparture ?( <ul style={styles.scrollableList}><div style={{ color: 'red' }}>Havaalanı bulunamadı</div></ul>):
(
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
                 {airport.name} {airport.code} , {airport.city}
              </p>

              <br />
            </div>
          </li>
        ))}
      </ul>)
          }
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
  errorOnDeparture: PropTypes.string,
};

export default DepartureAirports;
