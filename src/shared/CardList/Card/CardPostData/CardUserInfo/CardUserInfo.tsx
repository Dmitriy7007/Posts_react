import React from 'react'
import styles from './cardUserInfo.css'

interface ICardUserInfo {
	author: string
	avatar: string
}

export function CardUserInfo({ author, avatar }: ICardUserInfo) {
	return (
		<div className={styles.userLink}>
			<img
				className={styles.avatar}
				src={avatar ? avatar : 'http://mir-avatarok.3dn.ru/_si/0/26233203.jpg'}
				alt='avatar'
			/>
			<a href='#' className={styles.userName}>
				{author}
			</a>
		</div>
	)
}
