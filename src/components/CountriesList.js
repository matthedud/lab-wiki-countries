import React from 'react';
import { Link } from 'react-router-dom';
import coutriesList from '../countries.json';
import './CountriesList.css';

const CountriesList = () => {
  return (
    <div className="country-liste">
      {coutriesList.map((country) => (
        <Link key={country.alpha3Code} className="country-link" to={country.alpha3Code}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          {country.name?.common}
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;
