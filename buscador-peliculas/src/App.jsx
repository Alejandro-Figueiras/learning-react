import { useState } from 'react';
import './App.css'
import MovieList from './components/MovieList'
import { useMovies } from './hooks/useMovies';

function App () {
  const [ search, setSearch ] = useState("")
  const { movies, getMovies } = useMovies({search})

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));
    const query = fields.query;
    setSearch(query)
    getMovies()
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Prueba Técnica: Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder='Avengers'/>
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <MovieList movies={movies}/ >
      </main>
    </div>
  )
}

export default App