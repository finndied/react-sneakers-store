import React, { useState } from 'react'
import styles from './Card.module.scss'

const Card = ({ id, title, price, imageUrl, onPlus }) => {
	const handleOnClick = () => {
		onPlus({ id, title, price, imageUrl })
	}

	return (
		<div className={styles.card}>
			<img
				className={styles.cardSneakers}
				src={imageUrl}
				width='280px'
				alt=''
			/>
			<h3>{title}</h3>
			<div className={styles.cardBottom}>
				<div className={styles.cardPrice}>
					<span>Price:</span>
					<b>{price}</b>
				</div>
				<button className={styles.button} onClick={handleOnClick}>
					<img src='img/plus.svg' width='30px' fill="#000000" />
				</button>
			</div>
		</div>
	)
}

export default Card
