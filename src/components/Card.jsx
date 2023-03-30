import React from 'react'

const Card = (props) => {
	return (
		<div className='card'>
			<img
				className='cardSneakers'
				src={props.imageUrl}
				width='280px'
				alt=''
			/>
			<h3>{props.title}</h3>
			<div className='cardBottom'>
				<div className='cardPrice'>
					<span>Price:</span>
					<b>{props.price}</b>
				</div>
				<button className='button'>
					<img src='/img/plus.svg' width='30px' />
				</button>
			</div>
		</div>
	)
}

export default Card
