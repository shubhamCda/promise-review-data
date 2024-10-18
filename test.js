import countries from "./countries.json" assert {type: 'json'};

const highest_pop = countries.reduce((data, country) => {
  return country.population > data.population ? country : data;
}, countries[0]);


console.log(highest_pop.name.common);

// const maxPopulationCountry = countries.reduce((max, country) => {
//   return country.population > max.population ? country : max;
// }, countries[0]);

// console.log(maxPopulationCountry.name.common)