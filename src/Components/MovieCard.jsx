import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        
        <img src={movie.posterURL} alt='mimage'></img>
        <h3>{movie.name}</h3>
        <StarRating rating={movie.rating}/>
        <p>Release date:{movie.Date}</p>
        <p>{movie.Description}</p>
    </div>
  )
}

export default MovieCard