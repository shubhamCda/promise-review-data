import countries from "../countries.json" with {type: "json"};

// Searching

// Q: Write a function that finds a country by its cca3 code (e.g., "PAK") and returns its official name, capital, and region.

const countryBycca3 = (code) => {
  return countries.reduce((country, { name, region, cca3, capital }) => {
    if (cca3 === code) {
      country[cca3] = {
        "name": name.official,
        "capital": capital,
        "region": region,
      }
      
    }
    
    return country;
  }, {});
}

console.log(countryBycca3("VUT"));
