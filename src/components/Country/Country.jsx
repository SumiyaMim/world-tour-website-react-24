import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log(country)

  // destructure
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(handleVisitedCountry);

  return (
    // <div className={`country ${visited ? 'visited': 'non-visited'}`}>
    // another conditional style for div
    <div className={`country ${visited && "visited"}`}>
      <img src={flags.png} />
      {/* conditional style for h3 */}
      <h3 style={{ color: visited ? "steelblue" : "black" }}>{name.common}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button className="button" onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => handleVisitedFlags(country.flags.png)}
      >
        Add Flag
      </button>
      <br />
      <br />
      <button className="button" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited this country." : "I want to visit."}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
