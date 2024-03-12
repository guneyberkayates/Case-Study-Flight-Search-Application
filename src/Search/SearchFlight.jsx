import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchFlight.style';
import Loading from './LoadingAnimation/Loading';

function SearchFlight() {
  const [flights, setFlights] = useState([]);
  const departureAirport = useSelector((state) => state.variables.departureAirport);
  const arrivalAirport = useSelector((state) => state.variables.arrivalAirport);
  const departureDate = useSelector((state) => state.variables.departureDate);
  const tripType = useSelector((state) => state.variables.tripType);
  console.log(tripType)
  const returnDate = useSelector((state) => state.variables.returnDate);

  const [showFlights, setShowFlights] = useState(false);
  const [sortedFlights, setSortedFlights] = useState(null);
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);

  const validateFields = () => {
    if (!departureAirport || !arrivalAirport || !departureDate) {
      setWarning('Lütfen tüm gerekli alanları doldurunuz.');
      return false;
    }

    if (tripType === 'roundTrip' && !returnDate) {
      setWarning('Lütfen dönüş uçuşu için tarih giriniz.');
      return false;
    }

    setWarning('');
    return true;
  };

  const sortFlights = (criteria) => {
    const sorted = [...flights];
    switch (criteria) {
      case 'departureTime':
        sorted.sort((a, b) => a.departure_time.localeCompare(b.departure_time));
        break;
      case 'arrivalTime':
        sorted.sort((a, b) => a.arrival_time.localeCompare(b.arrival_time));
        break;
      case 'flightDuration':
        sorted.sort((a, b) => {
            const durationA = parseDuration(a.flight_duration);
            const durationB = parseDuration(b.flight_duration);
          return durationA - durationB;
          });
        break;
      case 'price':
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        sorted.sort((a, b) => a.departure_time.localeCompare(b.departure_time));
    }
    setSortedFlights(sorted);
  };
  const parseDuration = (duration) => {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    return hours * 60 + minutes + seconds / 60;
  };



  const fetchFlights = async () => {
    setLoading(true);
    if (!validateFields()) {
      setLoading(false);
      return;
    }
  
    try {
      let response;
      
      if (tripType !== "oneWay") {
        response = await fetch(`https://finance.aichatgenius.co/api/roundtripflights?departure_location=${departureAirport}&arrival_location=${arrivalAirport}&start_date=${departureDate}&end_date=${returnDate}`);
      } else {
        response = await fetch(`https://finance.aichatgenius.co/api/flights?departure_location=${departureAirport}&arrival_location=${arrivalAirport}&start_date=${departureDate}`);
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.flights && data.flights.length > 0) {
        setFlights(data.flights);
        setShowFlights(true);
      } else {
        setWarning('Uçuş bulunamadı.');
        setShowFlights(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setWarning('Bir hata oluştu. Lütfen tekrar deneyin.');
      setShowFlights(false);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (

      
    <div style={styles.flights}>
      
          {warning && <div style={{ color: 'red' }}>{warning}</div>}
       <div style={styles.button}>
        <button onClick={fetchFlights}>
            Uçuş ara
            <span style={styles.arrowStyle}>
             &rarr;
            </span>
        </button>
        
    </div>
   
    
   
    {showFlights && (
        <div> 
          <button onClick={() => sortFlights('departureTime')}>Kalkış saatine göre </button>
          <button onClick={() => sortFlights('arrivalTime')}>Varış saatine göre </button>
          <button onClick={() => sortFlights('flightDuration')}>Uçuş süresine göre </button>
          <button onClick={() => sortFlights('price')}>Fiyata göre</button>
        </div>
      )}
    {loading && <Loading/>}
    <ul >
  {sortedFlights ? (
    sortedFlights.map((flight, index) => (
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
    ))
  ) : (
    flights.map((flight, index) => (
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
    ))
  )}
</ul>

    </div>
  );
}

export default SearchFlight;
