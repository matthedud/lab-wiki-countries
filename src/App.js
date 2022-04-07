// src/App.js
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import coutriesList from './countries.json';
import axios from 'axios'

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async ()=>{
      const countriesFetch = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountries(countriesFetch.data)
    }
    fetchCountries()
  }, [])
  

  return (
    <div className="App">
      <Navbar />
      <main>
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;
