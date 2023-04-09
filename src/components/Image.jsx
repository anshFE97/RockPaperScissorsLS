import React from 'react'

const Image = ({src}) => {
  return (
    <img className='object-contain w-full h-full' src={src}/>
  )
}

export default Image