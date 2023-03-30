import React from 'react'

const Drawer = () => {
	return (
		<div style={{ display: 'none' }} className='drawer'>
			<div className='items'>
				<div className='cartItem'>
					<img
						src='/img/sneakers/Nike/1-front.webp'
						width='100px'
						alt='Sneakers'
					/>
					<div>
						<p>Nike M2K Tekno</p>
						<p>300$</p>
					</div>
					<img
						className='removeBtn'
						src='/img/plus.svg'
						width='30px'
						alt='remove'
					/>
				</div>
				<div className='cartItem'>
					<img
						src='/img/sneakers/Nike/1-front.webp'
						width='100px'
						alt='Sneakers'
					/>
					<div>
						<p>Nike M2K Tekno</p>
						<p>300$</p>
					</div>
					<img
						className='removeBtn'
						src='/img/plus.svg'
						width='30px'
						alt='remove'
					/>
				</div>
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
