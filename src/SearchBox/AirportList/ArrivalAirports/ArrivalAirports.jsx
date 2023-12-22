import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ArrivalAirports.style';

function ArrivalAirports({ airports }) {

  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (index) => {
    setSelectedItem(index);
  };
  return (
    <div style={styles.airportList}>
      <ul>
        {airports.map((airports, index) => (
          <li key={index}  
            onClick={() => selectItem(index)}
         >
            <div style={{
            ...styles.listItem,
            ...(index === selectedItem && styles.selectedListItem),
        }}>
         <p style={styles.text}> {airports.name}  {airports.code}  {airports.city}</p>  <br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ArrivalAirports.propTypes = {
    airports: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string, 
        code: PropTypes.string,
        city: PropTypes.string,
    })
  ),
};

export default ArrivalAirports;
