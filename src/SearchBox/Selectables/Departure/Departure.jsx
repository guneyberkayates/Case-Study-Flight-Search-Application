import React from 'react';
import PropTypes from 'prop-types';

function Departure(props) {
  const { departureLocation, onDepartureChange } = props;

  const departureChanged = (event) => {
    onDepartureChange(event);
  };

  return (
    <div>
      <label htmlFor="departure">Gidiş:</label>
      <input
        id="departure"
        value={departureLocation}
        onChange={departureChanged}
      />
    </div>
  );
}

Departure.propTypes = {
  departureLocation: PropTypes.string.isRequired,
  onDepartureChange: PropTypes.func.isRequired,
};

export default Departure;