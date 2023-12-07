import { useEffect, useState } from "react"
import { fetchMovies } from "../services/movies"

export function useMovies() {
  const [movies, setMovies ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async(search) => {
    try {
      setLoading(true)
      setError(null);
      if (search) {
        setMovies(await fetchMovies(search))
      } else {
        setMovies([])
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
    
  }

  useEffect(() => console.log("movies state updated"), [movies])

  return {movies, getMovies, loading, error }
}