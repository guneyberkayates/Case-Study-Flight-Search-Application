import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../Flights/Flights.style';

function SearchFlight() {
  const [flights, setFlights] = useState([]);
  const departureAirport = useSelector((state) => state.variables.departureAirport);
  const arrivalAirport = useSelector((state) => state.variables.arrivalAirport);
  const departureDate = useSelector((state) => state.variables.departureDate);
  const returnDate = useSelector((state) => state.variables.returnDate);

  const [showFlights, setShowFlights] = useState(false);

  const fetchFlights = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/flights?departure_location=${departureAirport}&arrival_location=${arrivalAirport}&start_date=${departureDate}&end_date=${returnDate}`);
      const data = await response.json();
      console.log('API Response:', data);
      setFlights(data.flights);
      setShowFlights(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={styles.flights}>
      <h2>Uçuşlar</h2>
      <button onClick={fetchFlights}>Fetch Flights</button>
      <ul style={styles.layout}>
        {showFlights && (
          <>
            {flights.map((flight, index) => (
              <li key={index}>
                <strong>Havayolu:</strong> {flight.airline}<br />
                <strong>Kalkış Yeri:</strong> {flight.departure_location}<br />
                <strong>Kalkış Zamanı:</strong> {new Date(flight.departure_time).toLocaleString()}<br />
                <strong>Varış Yeri:</strong> {flight.arrival_location}<br />
                <strong>Varış Zamanı:</strong> {new Date(flight.arrival_time).toLocaleString()}<br />
                <strong>Uçuş Süresi:</strong> {flight.flight_duration}<br />
                <strong>Fiyat:</strong> {flight.price}<br />
                <hr />
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default SearchFlight;
