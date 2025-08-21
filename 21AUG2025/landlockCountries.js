import fs from "fs";
import path from "path";
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

// console.log(landlockCountryCapital);





const makeFolder = (dirPath, cb) => {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      
    } else {
      cb("success");
    }
  })
}

const dirReader = (dirPath, cb) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return new Error("error: ", err);
    } else {
      cb(files);
    }
  })
}

const writeFile = (filePath, cb) => {
  fs.writeFile(filePath, "", (err) => {
    if (err) {
      console.error(err);
      
    } else {
      cb("success");
    }
  })
}



makeFolder("folder", (msg) => {
  console.log(msg);
  dirReader("folder", (files) => {
    for (let country in landlockCountryCapital) {
      if (!files.includes(country)) {
        const fileDir = path.join("./folder", country);
        makeFolder(fileDir, (msg) => {
          console.log(msg);
          const textFileDir = path.join(`./folder/${country}/${landlockCountryCapital[country]}.txt`);
          console.log(textFileDir);
          
          writeFile(textFileDir, (msg) => {
            console.log(msg);
            
          })

          
        })
      }
    }
    
  })
  
})



