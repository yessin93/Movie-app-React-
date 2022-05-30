import React from 'react'

const StarRating = ({rating,handleRating}) => {
    function stars(rating){
        let arr =[];
        for(let i=1;i<=5 ;i++  ){
            if(i<=rating){
                arr.push(
                    <span onClick={()=>handleRating(i)} style={{color:"gold",cursor:"pointer"}} > ★ </span>
                )
            }
            else arr.push(
                <span  onClick={()=>handleRating(i)} style={{color:"black",cursor:"pointer"}} > ★ </span>
            )
        }
        return arr
    }
  return (
    <div>
        {stars(rating)}

    </div>
  )
}
StarRating.defaultProps = {
    handleRating : ()=>{  }
}

export default StarRating