import movieResults from "../mocks/withResults.json"

export function useMovies() {
  const movies = movieResults.Search


  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return {movies: mappedMovies}
}