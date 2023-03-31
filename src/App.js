import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
	const [cartOpened, setCartOpened] = useState(false)
	const [sneakers, setSneakers] = useState([])

	useEffect(() => {
		fetch('https://64265fc6d24d7e0de46ed272.mockapi.io/Sneakers')
			.then(res => {
				return res.json()
			})
			.then(json => {
				setSneakers(json)
			})
	}, [])

	return (
		<div className='wrapper'>
			{cartOpened && <Drawer />}
			<Header
				onClickCart={() => setCartOpened(true)}
				onCloseCart={() => setCartOpened(false)}
				cartOpened={cartOpened}
			/>
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
					{sneakers.map(obj => (
						<div style={{ display: 'flex' }}>
							<Card
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
								onPlus={() => console.log('alert')}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
