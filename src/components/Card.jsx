import React from 'react'

const Card = () => {
  return (
   <div className='card'>
   <img
      className='cardSneakers'
      src='/img/sneakers/Nike/1-front.webp'
      width='280px'
      alt=''
   />
   <h3>Кроссовки Nike M2K Tekno</h3>
   <div className='cardBottom'>
      <div className='cardPrice'>
         <span>Price:</span>
         <b>300$</b>
      </div>
      <button className='button'>
         <img src='/img/plus.svg' width='30px' />
      </button>
   </div>
</div>
  )
}

export default Card