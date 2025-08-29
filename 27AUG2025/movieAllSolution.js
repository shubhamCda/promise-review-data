import movies from "../movies.json" with {type: 'json'};

// console.log(movies);

const decadewiseMovie = movies.reduce((movieList, { Title, Year }) => {
  const decadeYear = Math.floor(Year / 10) * 10;
  if (!movieList[decadeYear]) {
    movieList[decadeYear] = [];
  } 
    movieList[decadeYear].push(Title);
    
  return movieList;
},{})


// const decadeYear = Math.floor(1987 / 10) * 10;
// console.log(decadewiseMovie);

const ratingGenreWise = movies.reduce((movieList, { Title, Genre, Rating }) => {
  if (!movieList[Genre] || Rating > movieList[Genre].Rating) {
    movieList[Genre] = {
      "Title": Title,
      "Rating": Rating
    }
  }
  return movieList;
},{})


console.log(ratingGenreWise);

