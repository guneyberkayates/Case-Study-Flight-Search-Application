import React from 'react';
import PropTypes from 'prop-types';
import styles from './DepartureDate.style';
function DepartureDate(props) {
  return (
   
      <div style={styles.layout}>
        <input type="date" id="date" />
      </div>
    
  );
}

DepartureDate.propTypes = {};

export default DepartureDate;