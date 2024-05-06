import React from 'react'
import styles from './cardPreview.css'

interface ICardPreview {
	previewImg: {
		images: [
			{
				source: {
					url: string
				}
			}
		]
	}
}

export function CardPreview({ previewImg }: ICardPreview) {
	return (
		<>
			<div className={styles.preview}>
				<img
					className={styles.previewImg}
					src={
						previewImg
							? previewImg.images?.[0].source.url.replace(/(\&amp\;)/g, '&')
							: 'https://cdn.dribbble.com/userupload/3074231/file/original-872047b79e48cb704e13a2fc7d1cc9ab.png?compress=1&resize=1200x900'
					}
				/>
			</div>
		</>
	)
}
