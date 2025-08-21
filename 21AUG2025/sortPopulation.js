import countries from "../countries.json" with {type: 'json'};


// Data Transformation

// Q: Create an array of objects with only { name: common, population } for each country and sort it by population in descending order.

const populationDescending = countries.reduce((country, { name, population }) => {
  country.push({ "name": name.common, "population": population });
  return country;
}, []);

console.log(populationDescending);

const result = populationDescending.sort((a, b) => b.population - a.population);

// console.log(result);

