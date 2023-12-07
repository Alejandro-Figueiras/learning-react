import { useState } from 'react';
import './App.css'
import MovieList from './components/MovieList'
import { useMovies } from './hooks/useMovies';

function App () {
  const [sort, setSort] = useState(false)
  const [ search, setSearch ] = useState("")
  const { movies, getMovies , loading } = useMovies({search, sort})

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));
    const query = fields.query;
    setSearch(query)
    getMovies(query)
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder='Avengers'/>
          <input type="checkbox" checked={sort} onChange={()=>setSort(!sort)}/>
          <button>Buscar</button>
        </form>
      </header>
      <main>
        {
          loading
          ? <p className='subtext'><strong>Loading...</strong></p>
          : <MovieList movies={movies} sort={sort} />
        }
      </main>
    </div>
  )
}

export default App