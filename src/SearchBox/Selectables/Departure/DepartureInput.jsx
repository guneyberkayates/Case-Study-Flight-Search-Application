import React from 'react';
import PropTypes from 'prop-types';
import styles from './Departure.style';
function Departure(props) {
  const { departureLocation, onDepartureChange } = props;

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

Departure.propTypes = {
  departureLocation: PropTypes.string.isRequired,
  onDepartureChange: PropTypes.func.isRequired,
};

export default Departure;