// Reusable Structured
interface Information {
  //   movieName: string;
  //   releaseDate: number;
  //   isUA: boolean;
  summary(): string;
}

const moviesData = {
  movieName: "ABC",
  releaseDate: 2000,
  isUA: true,
  summary(): string {
    return `Name: ${this.movieName}
ReleaseDate: ${this.releaseDate}
isUA: ${this.isUA}`;
  },
};

const drinks = {
  color: "ABC",
  sugar: 40,
  carbonated: true,
  summary(): string {
    return `Color: ${this.color}
Sugar: ${this.sugar}
Carbonated: ${this.carbonated}`;
  },
};

const printMovieInformation = (info: Information): void => {
  console.log(info.summary());
};

printMovieInformation(moviesData);

printMovieInformation(drinks);
