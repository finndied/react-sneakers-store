function App() {
	return (
		<div className='wrapper'>
			<header>
				<div className='headerLeft'>
					<img src="/img/logo.svg" width="60px"/>
					<div>
						<h3>Sneakers</h3>
						<p>Store of the best sneakers</p>
					</div>
				</div>
				<ul className='headerRight'>
					<li>
          <img src="/img/cart.svg" width="34px"/>
						<span>0 руб.</span>
					</li>
					<li>
          <img src="/img/user.svg" width="34px"/>
					</li>
				</ul>
			</header>
		</div>
	)
}

export default App
