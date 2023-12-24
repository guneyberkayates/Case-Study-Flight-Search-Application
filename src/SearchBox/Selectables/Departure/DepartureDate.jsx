import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; 
import styles from './DepartureDate.style';
function DepartureDate(props) {
  const dispatch = useDispatch(); 

  const handleDateChange = (event) => {
    
    const selectedDate = event.target.value;

    dispatch({ type: 'DepartureDate', payload: selectedDate });
  };
  return (
   
      <div style={styles.layout}>
        <input type="date" id="date" style={styles.input} onChange={handleDateChange}/>
      </div>
    
  );
}

DepartureDate.propTypes = {};

export default DepartureDate;