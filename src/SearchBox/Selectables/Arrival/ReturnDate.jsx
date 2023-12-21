import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReturnDate.style.';
function ArrivalDate({ lock }) {
  return (
   
    <div style={styles.layout}>
        <input type="date" id="date" disabled={lock}/>
      </div>
  
  );
}

ArrivalDate.propTypes = {
  lock:PropTypes.bool.isRequired
};

export default ArrivalDate;