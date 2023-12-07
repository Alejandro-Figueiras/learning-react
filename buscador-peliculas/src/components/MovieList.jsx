import PropTypes from 'prop-types';

const MovieList = ({ movies = [] }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}
MovieList.propTypes = {
  movies: PropTypes.array
}
export default MovieList