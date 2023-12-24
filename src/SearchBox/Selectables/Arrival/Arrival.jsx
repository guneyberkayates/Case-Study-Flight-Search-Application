import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Arrival.style';
import { useDispatch } from 'react-redux';

function Arrival(props) {
  const { arrivalLocation, onArrivalChange, selectedAirport } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedAirport) {
      setInputValue(selectedAirport)
      dispatch({
        type: 'ArrivalAirport',
        payload: selectedAirport,
      });
    }
  }, [selectedAirport, dispatch]);

  const arrivalChanged = (event) => {
    onArrivalChange(event);
  };

  const focus = () => {
    if (selectedAirport) {
      setIsFocused(true);
      setInputValue('')
      onArrivalChange({ target: { value: '' } }); 
    }
  };

  const blur = () => {
    setIsFocused(false);
  };

  return (
    <div style={styles.layout}>
      <input
        style={styles.input}
        value={inputValue || arrivalLocation}
        onChange={arrivalChanged}
        onFocus={focus}
        onBlur={blur}
        placeholder={"Nereye"}
      />
    </div>
  );
}

Arrival.propTypes = {
  arrivalLocation: PropTypes.string.isRequired,
  onArrivalChange: PropTypes.func.isRequired,
  selectedAirport: PropTypes.string.isRequired,
};

export default Arrival;
