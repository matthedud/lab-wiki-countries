import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = ({ countries }) => {
  const {alpha3Code} = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountries = async ()=>{
      const countriesFetch = await axios.get(` https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      setCountry(countriesFetch.data)
    }
    fetchCountries()
  }, [alpha3Code])

  if(!country) return "Loading"
  return (
    <div className='country-detail'>
      <h1>{country.name.common}</h1>
      <table>
        <tr>
          <td>Capital</td>
          <td>{country.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{country.area} km2</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {country.borders.map((borderCountry) => {
                const borderFind = countries.find((el) => el.alpha3Code === borderCountry);
                return(
                <Link to={'/'+borderCountry}>
                  <li>{borderFind.name.common}</li>
                </Link>)
              })}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CountryDetails;
