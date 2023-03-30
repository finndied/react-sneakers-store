import Card from "./components/Card"
import Drawer from "./components/Drawer"
import Header from "./components/Header"

function App() {
	return (
		<div className='wrapper'>
			<Drawer/>
			<Header/>
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
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					
				</div>
			</div>
		</div>
	)
}

export default App
