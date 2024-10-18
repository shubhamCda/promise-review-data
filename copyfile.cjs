const { rejects } = require("assert");
const fs = require("fs")
const path = require("path");


// fs.copyFile('countries.json', 'myCountries.json', (err) =>{
//   if (err) {
//     console.log(err);

//   }else{
//     console.log("successs");

//   }
// })
/////////////////////////////////////////////////////////////////

//file create and delete using calback

/** 
 * 
make_directory('test-folder', (msg) =>{
  console.log(msg);
  for (let i = 1; i <= 5; i++) {
    copy_files('countries.json', `file_${i}.json`, (msg) =>{
      console.log(msg);
      
    })
    
  }
  for (let j = 1; j <= 5; j++) {
    delete_files(`file_${j}.json`, j+1, (msg) =>{
      console.log(msg);
      
    });
    
  }
  
})

function make_directory(dirPath, cb) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      cb(err);
      
    } else {
      cb("directory created...")
    
  }
})
}

function copy_files(filePath, data, cb) {
  fs.copyFile(filePath, data, (err) => {
    if (err) {
      cb(err);
      
    } else {
      cb(`${filePath} copied...`);
  }
});
}

function delete_files(filePath, delay, cb) {
  setTimeout(() => {
    fs.unlink(filePath, (err) => {
      if (err) {
        cb(err);
        
      }else{
        cb(`${filePath} deleted...`)
    }
    })
  }, delay * 1000);
}
*/


function make_directory(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, {recursive:true},(err) => {
      if (err) {
        reject(err)
      } else {
        resolve();
      }
    })
  })
}

function copy_files(i) {
  return new Promise((resolve, reject) => {
    fs.copyFile('countries.json', `newFile_${i}.json`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function delete_files(j) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.unlink(`newFile_${j}.json`, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    }, j * 1000);
  })
}


async function main() {
  try {
    // await make_directory('new-files');

    for (let i = 1; i <= 5; i++) {
      await copy_files(i);
      
    }
    for (let j = 1; j <= 5; j++) {
      await delete_files(j);
      
    }
  } catch (error) {
    console.log(error);
    
  }
}

main();