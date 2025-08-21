import countries from "../countries.json" with {type: 'json'};

// Filtering

// Q: Find all countries that are landlocked and return their names with their capital cities.

const landLockCountries = () => {
  let countriesData = {};

  for (let i = 0; i < countries.length; i++) {
    const { name, capital, landlocked } = countries[i];

    if (landlocked) {
      countriesData[name.common] = capital[0];
      
    }
    
  }
  return countriesData;
}

// console.log(landLockCountries());

const landlockCountryCapital = countries.reduce((country, { name, capital, landlocked }) => {
  if (landlocked) {
    country[name.common] = capital.join(",");
  }
  return country;
}, {});

console.log(landlockCountryCapital);



