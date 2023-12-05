import './App.css'
import MovieList from './components/MovieList'
import { useMovies } from './hooks/useMovies';

const API_KEY = "4287ad07"

function App () {
  const { movies } = useMovies()
  
  const hasMovies = movies?.length > 0;
 
  
  return (
    <div className='page'>
      <header>
        <h1>Prueba Técnica: Buscador de Películas</h1>
        <form className='form'>
          <input type="text" placeholder='Avengers'/>
          <button>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies 
          ? <MovieList movies={movies}/ >
          :(<p>No se encuentran peliculas</p>)
        }
      </main>
    </div>
  )
}

export default App