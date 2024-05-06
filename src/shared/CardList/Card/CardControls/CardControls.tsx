import React from 'react'
import { CardCommentsButton } from './CardCommentsButton'
import { CardKarmaCounter } from './CardKarmaCounter'
import { CardSaveButton } from './CardSaveButton'
import { CardShareButton } from './CardShareButton'
import styles from './cardControls.css'

export function CardControls({ rating }: { rating?: number }) {
	return (
		<div className={styles.controls}>
			<CardKarmaCounter rating={rating} styleSpan='karmaValue' />
			<CardCommentsButton />

			<div className={styles.actions}>
				<CardShareButton />
				<CardSaveButton />
			</div>
		</div>
	)
}
