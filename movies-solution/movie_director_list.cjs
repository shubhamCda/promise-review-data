const fs = require('fs');
const path = require('path');

const movies = require('../movies.json');



make_directory('movie-director', () => {
  movies.map((movie) => {
    directory_reader('movie-director', (file) => {
      if (!file.includes(movie.Director)) {
        const folder = path.join('movie-director', movie.Director);
        make_directory(folder, () => {
          const director = Object.keys(movieList);
          director.forEach((Dir) => {
            const filePath = path.join('movie-director', Dir, 'movieList.txt');
            const fileContent = JSON.stringify(movieList[Dir]);
            file_writer(filePath, fileContent, () => {
              console.log("Operation completed");
              
            })
          })
        })
      }
    })
  })
})



const movieList = movies.reduce((acc, movie) => {
  const { Director, Title } = movie;

  if (!acc[Director]) {
    acc[Director] = [];
  }
  acc[Director].push(Title);
  return acc;
});


function make_directory(dirPath, cb) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);

    } else {
      cb();
    }
  })
}

function directory_reader(dirPath, cb) {
  fs.readdir(dirPath, (err, file) => {
    if (err) {
      console.log(err);

    } else {
      cb(file);
    }
  });
}


function file_writer(filePath, content, cb) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log(err);

    } else {
      cb();
    }
  })
}