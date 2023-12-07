const API_KEY = "4287ad07"

export const fetchMovies = async(search) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
  const json = await res.json();
  if (json.Search) {
    return json.Search.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } else {
    return []
  }
}