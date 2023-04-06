import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header'
import axios from 'axios'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'

const images = ['img/slider-1.webp', 'img/slider-3.webp', 'img/slider-2.webp']

function App() {
	const [sneakers, setSneakers] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpened, setCartOpened] = useState(false)

	useEffect(() => {
		axios
			.get('https://64265fc6d24d7e0de46ed272.mockapi.io/Sneakers')
			.then(res => {
				setSneakers(res.data)
			})
		axios.get('https://64265fc6d24d7e0de46ed272.mockapi.io/Cart').then(res => {
			setCartItems(res.data)
		})
	}, [])

	const onRemoveItem = id => {
		axios.delete(`https://64265fc6d24d7e0de46ed272.mockapi.io/Cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	const onAddToCart = obj => {
		axios
			.post('https://64265fc6d24d7e0de46ed272.mockapi.io/Cart', obj)
			.then(res => setCartItems(prev => [...prev, res.data]))
	}

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value)
	}

	const total = cartItems.reduce((acc, item) => {
		return acc + parseFloat(item.price)
	}, 0)

	return (
		<div className='wrapper'>
			<Drawer
				items={cartItems}
				onRemoveItem={onRemoveItem}
				total={total}
				opened={cartOpened}
				setCartOpened={setCartOpened}
			/>
			<Header
				onClickCart={() => setCartOpened(true)}
				onCloseCart={() => setCartOpened(false)}
				cartOpened={cartOpened}
				total={total}
			/>
			<div className='content'>
				<Slider images={images} />
				<div className='sneakers-top'>
					<h1>
						{searchValue
							? `Search by request: "${searchValue}"`
							: 'All sneakers'}
					</h1>
					<div className='search-block'>
						<img src='img/search.svg' width='28px' height='34px' alt='search' />
						<input
							placeholder='Search...'
							value={searchValue}
							onChange={onChangeSearchInput}
						/>
					</div>
				</div>
				<div className='sneakers'>
					{sneakers
						.filter(item =>
							item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(item => (
							<div style={{ display: 'flex' }}>
								<Card
									key={item.title}
									title={item.title}
									price={item.price}
									imageUrl={item.imageUrl}
									onPlus={obj => onAddToCart(obj)}
								/>
							</div>
						))}
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default App
