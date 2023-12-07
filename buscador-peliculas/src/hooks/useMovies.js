import { useEffect, useState } from "react"
import { fetchMovies } from "../services/movies"

export function useMovies({ search }) {
  const [movies, setMovies ] = useState([])

  const getMovies = async() => {
    console.log("ASDASD")
    if (search) {
      setMovies(await fetchMovies(search))
    } else {
      setMovies([])
    }
    console.log("SIUUUUUUU")
  }

  useEffect(() => console.log("movies state updated"), [movies])

  return {movies, getMovies}
}