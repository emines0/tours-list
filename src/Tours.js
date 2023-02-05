import React from 'react'
import Tour from './Tour'
const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} /> //in the Tour component have access to all props that are in the object
        })}
      </div>
    </section>
  )
}

export default Tours
