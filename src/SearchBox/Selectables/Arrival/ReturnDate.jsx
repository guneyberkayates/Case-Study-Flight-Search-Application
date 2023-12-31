import React from 'react';
import { useDispatch } from 'react-redux'; 
import PropTypes from 'prop-types';
import styles from './ReturnDate.style.';

function ReturnDate({lock}) {
  const dispatch = useDispatch(); 

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

   
    dispatch({ type: 'ReturnDate', payload: selectedDate });
  };

  return (
    <div style={styles.layout}>
      <input
        type="date"
        id="date"
        style={styles.input}
        onChange={handleDateChange}
        disabled={lock}
      />
    </div>
  );
}

ReturnDate.propTypes = {};

export default ReturnDate;
