import React from 'react'

const Header = () => {
	return (
		<header>
			<div className='headerLeft'>
				<img src='/img/logo.svg' width='60px' alt='logo' />
				<div>
					<h3>Sneakers</h3>
					<p>Store of the best sneakers</p>
				</div>
			</div>
			<ul className='headerRight'>
				<li>
					<img src='/img/cart.svg' width='34px' alt='cart' />
					<span>0$</span>
				</li>
				<li>
					<img src='/img/user.svg' width='34px' alt='user' />
				</li>
			</ul>
		</header>
	)
}

export default Header
