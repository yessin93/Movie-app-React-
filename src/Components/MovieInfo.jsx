import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieInfo = ({mov}) => {
  const params = useParams();
  console.log(mov, params);
  const specificMovie = mov.find((el)=>el.id=== Number (params.id));
  console.log(specificMovie);
  return (
    <div>
      <p>
       Movie synopsis: {specificMovie.Description} 
      </p>
      <iframe width="420" height="315"
      src={specificMovie.trailer}>
      </iframe>
      <button className='btn-bk'><Link to ="/">  main page</Link></button>
    </div>
     
  );
};

export default MovieInfo;