import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Arrival.style';
function Arrival(props) {
  const { arrivalLocation, onArrivalChange } = props;

  const arrivalChanged = (event) => {
    onArrivalChange(event);
  };

  return (
    <div style={styles.layout}>   
      <input
        style={styles.input}
        value={arrivalLocation}
        onChange={arrivalChanged}
        placeholder={"Nereye"}
      />
    </div>
  );
}

Arrival.propTypes = {
  arrivalLocation: PropTypes.string.isRequired,
  onArrivalChange: PropTypes.func.isRequired,
};

export default Arrival;
