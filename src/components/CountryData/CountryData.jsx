const CountryData = ({ country }) => {

    // console.log('inside country data', country, handleVisitedCountry, handleVisitedFlags)

  return (
    <div>
        <p><small>Country Name: {country.name.common}</small></p>
    </div>
  )
}

export default CountryData
