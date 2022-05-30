import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handleText,rating,handleRating}) => {
  return (
    <div className='header-container'>
        <h1>My movie app</h1>
        <div className='search-container'>
            <input className='inp' type="text" value={text} onChange={handleText} />
            <StarRating rating={rating} handleRating={handleRating} />

        </div>

    </div>
  )
}

export default Search