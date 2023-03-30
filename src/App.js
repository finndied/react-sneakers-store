function App() {
	return (
		<div className='wrapper'>
			<div className='drawer'>
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
					<button className="checkBtn">Checkout</button>
				</div>
			</div>
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
			<div className='content'>
				<div className='sneakers-top'>
					<h1>All sneakers</h1>
					<div className='search-block'>
						<img
							src='/img/search.svg'
							width='28px'
							height='34px'
							alt='search'
						/>
						<input placeholder='Search...' />
					</div>
				</div>
				<div className='sneakers'>
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/Nike/2-front.webp'
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/Nike/3-front.webp'
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/Nike/4-front.webp'
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/New-balance/1-front.webp'
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/New-balance/2-front.webp'
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/Vans/1-front.webp'
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
					<div className='card'>
						<img
							className='cardSneakers'
							src='/img/sneakers/Vans/2-front.webp'
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
				</div>
			</div>
		</div>
	)
}

export default App
