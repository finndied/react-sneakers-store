import React, { useState, useEffect } from 'react'
import styles from './Slider.module.scss'

const Slider = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % images.length)
	}

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide()
		}, 5000)
		return () => clearInterval(interval)
	}, [currentSlide])

	return (
		<div className={styles.slider}>
			{images.map((image, index) => (
				<div
					key={index}
					className={`${styles.slide} ${
						index === currentSlide ? styles.active : ''
					}`}
				>
					<img src={image} alt={`Slide ${index}`} />
				</div>
			))}
			<button className={styles.prev} onClick={prevSlide}>
				❮
			</button>
			<button className={styles.next} onClick={nextSlide}>
				❯
			</button>
		</div>
	)
}

export default Slider
