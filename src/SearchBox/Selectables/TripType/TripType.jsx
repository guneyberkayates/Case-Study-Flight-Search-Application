import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TripType.style';
function TripType({ tripType, onTripTypeChange }) {
  const tripTypeChanged = (event) => {
    onTripTypeChange(event);
  };

  return (
    <div>
      <label style={styles.triptype}>
        <input
          type="radio"
          value="roundTrip"
          checked={tripType === 'roundTrip'}
          onChange={tripTypeChanged}
        />
        Gidiş-Dönüş
      </label>
      <label style={styles.triptype}>
        <input
          type="radio"
          value="oneWay"
          checked={tripType === 'oneWay'}
          onChange={tripTypeChanged}
        />
        Tek yön
      </label>
    </div>
  );
}

TripType.propTypes = {
  tripType: PropTypes.string.isRequired,
  onTripTypeChange: PropTypes.func.isRequired,
};

export default TripType;
