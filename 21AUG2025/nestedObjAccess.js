import countries from "../countries.json" with {type: 'json'};


// Nested Object Access

// Q: Some countries have multiple nativeName entries. Write a function that extracts all native names for a given country.

const objAccess = (countryName) => {
  return countries.map((curCountry) => {
    if (curCountry.name.common == countryName) {
      let valuCon = curCountry.name.nativeName;
      
      console.log(valuCon);
    }
    
  });
}

objAccess("Christmas Island");
  
  