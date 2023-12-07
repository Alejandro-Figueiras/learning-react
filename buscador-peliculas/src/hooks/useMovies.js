import { useRef, useState, useMemo } from "react"
import { fetchMovies } from "../services/movies"

export function useMovies({ sort }) {
  const [movies, setMovies ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const busquedaAnterior = useRef('');

  const getMovies = useMemo(() => {
    return async(search) => {
      if (search == busquedaAnterior.current) return
  
      try {
        setLoading(true)
        setError(null);
        busquedaAnterior.current = search
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
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])

  return {movies: sortedMovies, getMovies, loading, error }
}