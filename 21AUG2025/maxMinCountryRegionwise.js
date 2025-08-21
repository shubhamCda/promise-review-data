import countries from "../countries.json" with {type: 'json'};

//find the regionwise countries with maximum and minimum area

const countriesMaxRegion = countries.reduce((country, { name, region, area }) => {
  if (!country[region] || area > country[region].area) {
    country[region] = {
      "name": name.common,
      "area": area
    }
  }
  return country;
}, {});

console.log(countriesMaxRegion);

const countriessMinRegion = countries.reduce((country, { name, region, area }) => {
  if (!country[region] || country[region].area > area) {
    country[region] = {
      "name": name.common,
      "area": area
    }
  }
  return country;
}, {});

console.log(countriessMinRegion);

