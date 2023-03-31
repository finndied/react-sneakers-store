import { useState } from 'react'
import Card from './components/Card/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

const arr = [
	{
		title: 'Nike M2K Tekno',
		price: '155$',
		imageUrl: '/img/sneakers/Nike/1-front.webp'
	},
	{
		title: `Nike Air Force 1 Low 07 SE`,
		price: '209$',
		imageUrl: '/img/sneakers/Nike/2-front.webp'
	},
	{
		title: `Dunk Low Retro`,
		price: '246$',
		imageUrl: '/img/sneakers/Nike/3-front.webp'
	},
	{
		title: `Air Jordan 1 Retro High OG`,
		price: '272$',
		imageUrl: '/img/sneakers/Nike/4-front.webp'
	},
	{
		title: `New Balance 574`,
		price: '207$',
		imageUrl: '/img/sneakers/New-balance/1-front.webp'
	},
	{
		title: `New Balance 550`,
		price: '272$',
		imageUrl: '/img/sneakers/New-balance/2-front.webp'
	},
	{
		title: `Vans UA Old Skool`,
		price: '116$',
		imageUrl: '/img/sneakers/Vans/1-front.webp'
	},
	{
		title: `Vans UA Old Skool Platfor`,
		price: '124$',
		imageUrl: '/img/sneakers/Vans/2-front.webp'
	}
]

function App() {
	const [cartOpened, setCartOpened] = useState(false)

	return (
		<div className='wrapper'>
			{cartOpened && <Drawer/>}
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
					{arr.map(obj => (
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
