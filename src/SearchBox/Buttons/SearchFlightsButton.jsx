import React from 'react'
import styles from './SearchFlightsButton.style';
function SearchFlightsButton() {
  return (
    <div style={styles.button}>
        <button>
            Uçuş ara
            <span style={styles.arrowStyle}>
             &rarr;
            </span>
        </button>
    </div>
  )
}

export default SearchFlightsButton
