import React from 'react'


const FeaturedCard = ({imgURL,name}) => {
  return (
    <div>
        <img
          src={imgURL} alt={name}
          className='w-auto h-auto'
        />
        <h2>{name}</h2>
    </div>
  )
}

export default FeaturedCard