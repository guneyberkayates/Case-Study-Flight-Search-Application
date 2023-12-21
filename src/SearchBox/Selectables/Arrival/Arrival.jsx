import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Arrival(props) {
  const { arrivalLocation, onArrivalChange } = props;

  const arrivalChanged = (event) => {
    onArrivalChange(event);
  };

  return (
    <div>
      <label htmlFor="arrival">Dönüş:</label>
      <input
        id="arrival"
        value={arrivalLocation}
        onChange={arrivalChanged}
      />
    </div>
  );
}

Arrival.propTypes = {
  arrivalLocation: PropTypes.string.isRequired,
  onArrivalChange: PropTypes.func.isRequired,
};

export default Arrival;
