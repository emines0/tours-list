import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {
            readMore ? info : `${info.substring(0, 200)}...` // if readMore true display full info however if the readMore is false display only 200 characters of the info
          }
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>{' '}
          {/* 
          
          * Whatever is going to be in value read more change to opposite value
          * If readMore is true button text will be 'show less' else 'read more' 
          
          */}
        </p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  )
}

export default Tour
