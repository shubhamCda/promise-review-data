// import fs from'fs';
// import movies from "./movies.json" assert { type: "json" };


// const moviesInfo = movies.reduce((acc, movie) => {
//   if (!acc[movie.Genre]) {
//     acc[movie.Genre] = [];
//   }
//   acc[movie.Genre].push(movie);
//   return acc;
// }, {});


// fs.mkdir('movies' , err=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//     for(let genre in moviesInfo){
//         fs.mkdir(`movies/${genre}` , err=>{
//             if(err) console.log(err);
//             else{
//                 fs.writeFile(`movies/${genre}/movies_list.txt` , JSON.stringify(moviesInfo[genre] , null,2),err=>{
//                     if(err) console.log(err);
//                 })
//             }
//         })
//     }
// }
// })





// fs.mkdir("movies")
//   .then(() => {
//     let arr = [];
//     for (let genre in moviesInfo) {
      
//       let data = fs.mkdir(`movies/${genre}`);
//       arr.push(data);
//     }
//     return Promise.all(arr);
//   })
//   .then(() => {
//     const array = [];
//     for (let genre in moviesInfo) {
//       const data = fs.writeFile(`movies/${genre}/movies.txt`,JSON.stringify(moviesInfo[genre], null, 2) );
//       array.push(data);
//     }
//     return Promise.all(array);
//   })
//   .catch((error) => console.error(error));



// import {writeFile , mkdir } from "fs/promises";
// import movies from "./movies.json" assert { type: "json" };

//   const moviesInfo = movies.reduce((genre, movie) => {
//     if(!genre[movie.Genre]){
//         genre[movie.Genre] = [];
//     }
//     genre[movie.Genre].push(movie);
//     return genre;
// }, {});

// const moviesData = async () => {
//     try{
//         await mkdir("Movies");
//         for(let genre in moviesInfo){
//             await mkdir(`Movies/${genre}`);
//             await writeFile(`Movies/${genre}/movies.txt`, JSON.stringify(moviesInfo[genre], null, 2));
//         }
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// moviesData();
