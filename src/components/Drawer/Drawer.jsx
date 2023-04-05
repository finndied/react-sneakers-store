import React from 'react'
import styles from './Drawer.module.scss'

const Drawer = ({ total, onRemoveItem, items = [], opened }) => {
	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
			<div className={styles.drawer}>
				{items.length === 0 ? (
					<div className={styles.emptyCart}>
						<img src='img/EmptyCart.png' alt='Empty cart' />
						<p>Your cart is empty</p>
					</div>
				) : (
					<>
						<div className={styles.items}>
							{items.map(obj => (
								<div key={obj.id} className={styles.cartItem}>
									<img src={obj.imageUrl} width='100px' alt='Sneakers' />
									<div>
										<p>{obj.title}</p>
										<p>{obj.price}</p>
									</div>
									<img
										onClick={() => onRemoveItem(obj.id)}
										className={styles.removeBtn}
										src='/img/plus.svg'
										width='30px'
										alt='remove'
									/>
								</div>
							))}
						</div>
						<div className={styles.totalBlock}>
							<ul>
								<li className={styles.priceCount}>
									<span>Total:</span>
									<div></div>
									<b>{total}$</b>
								</li>
							</ul>
							<button className={styles.checkBtn}>Checkout</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Drawer
