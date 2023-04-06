import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<>
			<div className={styles.wrapper}>
            <div className={styles.allInfo}>
				<div className={styles.contacts}>
					<ul>
						<li>Contacts</li>
						<li>
							<a href='#'>+447800767690</a>
						</li>
						<li>
							<a href='#'>Sneakers-store@gmail.com</a>
						</li>
						<li>
							<a href='#'>About us</a>
						</li>
					</ul>
				</div>
				<div className={styles.info}>
					<ul>
						<li>Information</li>
						<li>
							<a href='#'>Blog</a>
						</li>
						<li>
							<a href='#'>Memo to the buyer</a>
						</li>
						<li>
							<a href='#'>Privacy policy</a>
						</li>
					</ul>
				</div>
				<div className={styles.payment}>
					<ul>
						<li>Payment and delivery</li>
						<li>
							<a href='#'>Payment</a>
						</li>
						<li>
							<a href='#'>Delivery</a>
						</li>
						<li>
							<a href='#'>Exchange and Refund</a>
						</li>
					</ul>
				</div>
            </div>
			<div className={styles.copyright}>Copyright © 2023 Sneakers store</div>
			</div>
		</>
	)
}

export default Footer
