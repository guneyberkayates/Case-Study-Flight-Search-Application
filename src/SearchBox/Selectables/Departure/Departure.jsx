import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Departure.style';
import { useDispatch } from 'react-redux';

function Departure(props) {
  const { departureLocation, onDepartureChange, selectedAirport } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedAirport) {
      setInputValue(selectedAirport)
      dispatch({
        type: 'DepartureAirport',
        payload: selectedAirport,
      });
    }
  }, [selectedAirport, dispatch]);

  const departureChanged = (event) => {
    onDepartureChange(event);
  };

  const focus = () => {
    if (selectedAirport) {
      setIsFocused(true);
      setInputValue('')
      onDepartureChange({ target: { value: '' } });

    }
  };

  const blur = () => {
    setIsFocused(false);
  };
  

  return (
    <div style={styles.layout}>
      <input
        style={styles.input}
        value={ inputValue || departureLocation}
        onChange={departureChanged}
        onFocus={focus}
        onBlur={blur}
        placeholder={"Nereye"}
      />
    </div>
  );
}

Departure.propTypes = {
  departureLocation: PropTypes.string.isRequired,
  onDepartureChange: PropTypes.func.isRequired,
  selectedAirport: PropTypes.string.isRequired,
};

export default Departure;
