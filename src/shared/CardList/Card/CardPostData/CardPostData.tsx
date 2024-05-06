import React from 'react'
import { CardPostTitle } from './CardPostTitle'
import { CardUserInfo } from './CardUserInfo'
import styles from './cardPostData.css'

interface ICardPostData {
	author: string
	title: string
	datePostUtc: number
	avatar: string
	id: string
}

export function CardPostData({
	title,
	author,
	datePostUtc,
	avatar,
	id,
}: ICardPostData) {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<CardUserInfo avatar={avatar} author={author} />
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>
					{new Date(datePostUtc).getHours()} часа назад
				</span>
			</div>
			<CardPostTitle title={title} idPost={id} />
		</div>
	)
}
