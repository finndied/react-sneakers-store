function App() {
	return (
		<div className='wrapper'>
			<header>
				<div className='headerLeft'>
					<img src='/img/logo.svg' width='60px' />
					<div>
						<h3>Sneakers</h3>
						<p>Store of the best sneakers</p>
					</div>
				</div>
				<ul className='headerRight'>
					<li>
						<img src='/img/cart.svg' width='34px' />
						<span>0$</span>
					</li>
					<li>
						<img src='/img/user.svg' width='34px' />
					</li>
				</ul>
			</header>
			<div className='content'>
				<h1>All sneakers</h1>
        <div className="sneakers">
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
