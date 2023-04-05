import React from 'react'

const Drawer = ({ total, onRemoveItem, items = [] }) => {
	return (
		<div className='drawer'>
			<div className='items'>
				{items.map(obj => (
					<div key={obj.id} className='cartItem'> 
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
						<b>{total}$</b>
					</li>
				</ul>
				<button className='checkBtn'>Checkout</button>
			</div>
		</div>
	)
}

export default Drawer
