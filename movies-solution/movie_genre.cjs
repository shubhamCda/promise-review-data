const fs = require('fs');
const path = require('path');

const movies = require('../movies.json');




// create_directory('movie-decadewise', () => {
//   movies.map((movie) => {
//     directory_reader('movie-decadewise', (file) => {
//       const decadeYear = Math.floor(movie.Year / 10) * 10;
//       if (!file.includes(movie.decadeYear)) {
//         const folderPath = path.join('movie-decadewise', `${movie.decadeYear}`);
//         create_directory(folderPath, () => {
//           const movieDecade = Object.keys(movie_list_decadewise);
//           movieDecade.forEach((Dec) => {
//             const filePath = path.join('movie-decadewise', Dec, 'movieList.txt');
//             const fileContent = JSON.stringify(movie_list_decadewise[Dec]);
//             file_writer(filePath, fileContent, () => {
//               console.log("operation complete...!");

//             })
//           })
//         })
//       }
//     })
//   })
// })

////////////////////////////////////////////////////////////////////////////////

/** 
  
create_directory('decadewise-list', () =>{
  for(let decade in movie_list_decadewise){
    fs.mkdir(`decadewise-list/${decade}`, {recursive:true},(err) =>{
      if (err) {
        console.log(err);
        
      }else{
        fs.writeFile(`decadewise-list/${decade}/movie_list.txt`, JSON.stringify(movie_list_decadewise[decade]), (err) =>{
          if (err) {
            console.log(err);
            
          }
        })
      }
    })
  }
})




const movie_list_decadewise = movies.reduce((acc, movie) => {
  const { Year, Title } = movie;
  
  const decade = Math.floor(Year / 10) * 10;

  if (!acc[decade]) {
    acc[decade] = [];
  }
  acc[decade].push(Title);
  return acc;
}, {});


*/




// function create_directory(dirPath, cb) {
//   fs.mkdir(dirPath, { recursive: true }, (err) => {
//     if (err) {
//       console.log(err);

//     } else {
//       cb();
//     }
//   })
// }

// function directory_reader(dirPath, cb) {
//   fs.readdir(dirPath, (err, file) => {
//     if (err) {
//       console.log(err);

//     } else {
//       cb(file);
//     }
//   })
// }

// function file_writer(filePath, content, cb) {
//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.log(err);

//     } else {
//       cb();
//     }
//   })
// }


// const movie_genrewise = movies.reduce((acc, movie) => {
//   const { Genre, Title } = movie;

//   if (!acc[Genre]) {
//     acc[Genre] = [];
//   }
//   acc[Genre].push(Title);
//   return acc;
// }, {});


// fs.mkdir('movie-genre', (err) =>{
//   if (err) {
//     console.log(err);

//   } else {
//     for(let genre in movie_genrewise){
//       fs.mkdir(`movie-genre/${genre}`, {recursive:true},(err) =>{
//         if (err) {
//           console.log(err);

//         } else {
//           fs.writeFile(`movie-genre/${genre}/movies_list.txt`, JSON.stringify(movie_genrewise[genre]), (err) =>{
//             if (err) {
//               console.log(err);

//             }else{
//               console.log("success");

//             } 
//           })
//         }
//       })
//     }
//   }
// })

////////////////////////////////////////////////////////////////////

/** 
 
const movie_directorwise = movies.reduce((acc, movie) => {
  const { Director, Title } = movie;
  
  if (!acc[Director]) {
    acc[Director] = [];
  }
  acc[Director].push(Title);
  return acc;
}, {});

fs.mkdir('director-list', { recursive: true }, (err) => {
  if (err) {
    console.log(err);

  } else {
    for (const director in movie_directorwise) {
      fs.mkdir(`director-list/${director}`, { recursive: true }, (err) => {
        if (err) {
          console.log(err);
          
        } else {
          fs.writeFile(`director-list/${director}/movie_list.txt`, JSON.stringify(movie_directorwise[director]), (err) =>{
            if (err) {
              console.log(err);
              
            }
          })
        }
      })
    }
  }
})
  
*/

/////////////////////////////////////////////////////////////////////////

/** 
 * 
make_drive('movies-genre', () => {
  for (let genre in movie_genre) {
    make_drive(`movies-genre/${genre}`, () => {
      file_writer(`movies-genre/${genre}/movie_list.txt`, JSON.stringify(movie_genre[genre]), (msg) =>{
        console.log(msg);
        
      })
    })
    
  }
})


const movie_genre = movies.reduce((acc, movie) => {
  const { Title, Genre } = movie;
  
  if (!acc[Genre]) {
    acc[Genre] = [];
  }
  acc[Genre].push(Title);
  return acc;
}, {});


function make_drive(dirPath, cb) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
      
    } else {
      cb();
  }
  })
}

function file_writer(filePath, data, cb) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
      
    } else {
      cb("Success");
    
  }
})
}
*/