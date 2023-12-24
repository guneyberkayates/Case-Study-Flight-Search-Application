import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TripType.style';
import { useDispatch } from 'react-redux';

function TripType({ tripType, onTripTypeChange }) {
  const dispatch = useDispatch();

  const tripTypeChanged = (event) => {
    onTripTypeChange(event);
   
  
  };

  useEffect(() => {
    dispatch({
      type: 'TripType',
      payload: tripType,
    });
  
  
  }, [tripTypeChanged])
  

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
