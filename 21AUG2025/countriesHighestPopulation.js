import fs from "fs";
import path from "path";
import countries from "../countries.json" with {type: 'json'};


const highestPopulationCountries = countries.reduce((acc, { name, region, population }) => {
  if (!acc[region] || population > acc[region].population) {
    acc[region] = {
      "name": name.common,
      "population": population
    }
  }
  return acc;
}, {});

console.log(highestPopulationCountries);

const dirCreate = (dirPath, cb) => {
  fs.mkdir(dirPath, {recursive: true}, err => {
    if (err) {
      console.error(`Error msg: ${err}`);
      
    } else {
      cb(dirPath);
    }
  })
}

const dirReader = (dirPath, cb) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      
    } else {
      cb(files);
    }
  })
}

const fileWriter = (filePath, content, cb) => {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      
    } else {
      cb(filePath);
    }
  })
}

dirCreate("populated-countries", (msg) => {
  console.log(msg);
  dirReader("populated-countries", (files) => {
    for (let region in highestPopulationCountries) {
      if (!files.includes(region)) {
        dirCreate(`populated-countries/${region}`, (filePaths) => {
          console.log(filePaths);
          const countryfolder = path.join(filePaths, highestPopulationCountries[region].name);
          dirCreate(countryfolder, (filePaths) => {
            console.log(filePaths);
            const newJsonFilePath = path.join(filePaths, `${highestPopulationCountries[region].name}.json`);

            fileWriter(newJsonFilePath, `{"population": ${highestPopulationCountries[region].population}}`, (filePaths) => {
              console.log(filePaths);

              fs.unlink(filePaths, (err) => {
                if (err) {
                  console.error("Error", err);
                  
                } else {
                  console.log(`deleted successfully: ${filePaths}`);

                  fs.rm(`populated-countries/${region}`, { recursive: true, force: true }, (err) => {
                    if (err) {
                      console.error(err);
                      
                    } else {
                      console.log("deleted successfully!");
                      
                    }
                  })
                  
                }
              })
              
            })
          })
          
        })
      }
    }
  })
  
})
