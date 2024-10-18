import movies from '../movies.json' assert {type: 'json'}

const movies_list_decade = movies.reduce((acc, movie) => {
  const { Year, Title } = movie;
  const decade = Math.floor(Year / 10) * 10;

  if (!acc[decade]) {
    acc[decade] = []
  }
  acc[decade].push(Title)
  return acc;
}, {});

// console.log(movies_list_decade);

///////////////////////////////////////////////////////////////


const movies_genrewise = movies.reduce((acc, movie) => {
  const { Genre, Title } = movie;
  if (!acc[Genre]) {
    acc[Genre] = [];
  }
  acc[Genre].push(Title);
  return acc;
}, {});

// console.log(movies_genrewise);

///////////////////////////////////////////////////////////////

const highest_rating = movies.reduce((max, movie) => {
  return movie.Rating > max.Rating ? movie : max;
});

// console.log(highest_rating.Title);

///////////////////////////////////////////////////////////////

const highest_rating_genre = movies.reduce((acc, movie) => {
  const { Title, Genre, Rating } = movie;

  if (!acc[Genre] || Rating > acc[Genre].Rating) {
    acc[Genre] = Title;
  }
  return acc;
}, {});

// console.log(highest_rating_genre);

///////////////////////////////////////////////////////////////


const highest_gross_earning = movies.reduce((max, movie) => {
  return movie.Gross_Earning_in_Mil > max.Gross_Earning_in_Mil ? movie : max;
});

// console.log(highest_gross_earning.Title);

///////////////////////////////////////////////////////////////

/*
function main() {
  const movieList = {};

  for (let i = 0; i < movies.length; i++) {
    const { Genre, Title, Director } = movies[i];

    if (!movieList[Director]) {
      movieList[Director] = [];
    }
    movieList[Director].push(Title);

  }
  return movieList;
}

console.log(main());

*/

///////////////////////////////////////////////////////////////

// function main() {
//   let max_rating = movies[0];

//   for (let i = 1; i < movies.length; i++) {
//     if (movies[i] > max_rating.Rating) {
//       max_rating = movies[i];
//     }

//   }
//   return max_rating.Title
// }

// console.log(main());

///////////////////////////////////////////////////////////////

const total_gross_earning = movies.reduce((acc, movie) => {
  const { Gross_Earning_in_Mil } = movie;

  if (Number(Gross_Earning_in_Mil)) {
    acc += Gross_Earning_in_Mil;
  }
  return acc;
}, 0);

// console.log(total_gross_earning.toFixed(2));
