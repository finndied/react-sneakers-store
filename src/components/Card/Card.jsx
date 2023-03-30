import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {
	return (
		<div className={styles.card}>
			<img
				className={styles.cardSneakers}
				src={props.imageUrl}
				width='280px'
				alt=''
			/>
			<h3>{props.title}</h3>
			<div className={styles.cardBottom}>
				<div className={styles.cardPrice}>
					<span>Price:</span>
					<b>{props.price}</b>
				</div>
				<button className={styles.button}>
					<img src='/img/plus.svg' width='30px' />
				</button>
			</div>
		</div>
	)
}

export default Card
