import React from 'react'

const Drawer = ({ onRemoveItem, items = [] }) => {
	return (
		<div className='drawer'>
			<div className='items'>
				{items.map(obj => (
					<div className='cartItem' key={obj.title}>
						<img src={obj.imageUrl} width='100px' alt='Sneakers' />
						<div>
							<p>{obj.title}</p>
							<p>{obj.price}</p>
						</div>
						<img
							onClick={() => onRemoveItem(obj.id)}
							className='removeBtn'
							src='/img/plus.svg'
							width='30px'
							alt='remove'
						/>
					</div>
				))}
			</div>
			<div className='totalBlock'>
				<ul>
					<li className='priceCount'>
						<span>Total:</span>
						<div></div>
						<b>600$</b>
					</li>
				</ul>
				<button className='checkBtn'>Checkout</button>
			</div>
		</div>
	)
}

export default Drawer
