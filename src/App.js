import './App.css';
import React,{ useState } from 'react';
import SearchAirport from './Search/SearchAirport';
import SearchFlight from './Search/SearchFlight';

function App() {
 
  return (
    
     <div >
     <SearchAirport/>
     <SearchFlight/>
    </div>
  );
}

export default App;
