import classNames from 'classnames'
import React from 'react'
import styles from './cardKarmaCounter.css'

export function CardKarmaCounter({
	rating,
	styleSpan,
}: {
	rating?: number
	styleSpan: string
}) {
	const classes = classNames(styles[styleSpan])

	return (
		<div className={styles.karmaCounter}>
			<button className={styles.up}>
				<svg
					width='19'
					height='10'
					viewBox='0 0 19 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M9.5 0L0 10H19L9.5 0Z' fill='#C4C4C4' />
				</svg>
			</button>
			<span className={classes}>{rating}</span>
			<button className={styles.down}>
				<svg
					className={styles.down}
					width='19'
					height='10'
					viewBox='0 0 19 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M9.5 0L0 10H19L9.5 0Z' fill='#C4C4C4' />
				</svg>
			</button>
		</div>
	)
}
