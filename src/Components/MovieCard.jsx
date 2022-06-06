import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        
        <img src={movie.posterURL} alt='mimage'></img>
        <h3>{movie.name}</h3>
        <StarRating rating={movie.rating}/>
        <p>Release date:{movie.Date}</p>
        <button className='btn-info'>
          <Link to={`/movie/${movie.id}`}>movie details</Link>
        </button>
    </div>
  )
}

export default MovieCard