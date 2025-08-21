const fs = require("fs");
const path = require("path");

const movies = require("./movies.json");

const movie_list_by_genre = movies.reduce((acc, movie) => {
	const { Genre, Title } = movie;
	if (!acc[Genre]) {
		acc[Genre] = [];
	}
	acc[Genre].push(Title);
	return acc;
}, {});

create_directory("./movie-folder", () => {
	movies.map((movie) => {
		dirReader("./movie-folder", (file) => {
			if (!file.includes(movie.Genre)) {
				const folderPath = path.join("./movie-folder", movie.Genre);
				create_directory(folderPath, () => {
					const movieGenre = Object.keys(movie_list_by_genre);
					movieGenre.forEach((G) => {
						const filePath = path.join("./movie-folder", G, "moviesList.txt");
						const fileContent = JSON.stringify(movie_list_by_genre[G]);
						fileWriter(filePath, fileContent, () => {
							console.log("operation success....");
						});
					});
				});
			}
		});
	});
});

function create_directory(dirPath, cb) {
	fs.mkdir(dirPath, { recursive: true }, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("directory created...");

			cb();
		}
	});
}

function dirReader(dirPath, cb) {
	fs.readdir(dirPath, (err, file) => {
		if (err) {
			console.error(err);
		} else {
			cb(file);
		}
	});
}

function fileWriter(filePath, content, cb) {
	fs.writeFile(filePath, content, (err) => {
		if (err) {
			console.log(err);
		} else {
			cb();
		}
	});
}
