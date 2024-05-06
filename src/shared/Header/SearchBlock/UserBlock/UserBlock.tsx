import React from 'react'
import { EColor } from '../../../../types/text'
import { Break } from '../../../Break/Break'
import { IconAnon } from '../../../Icons'
import { Text } from '../../../Text'
import styles from './userBlock.css'

interface IUserBlockProps {
	avatarSrc?: string
	username?: string
	loading?: boolean
}

export const UserBlock = ({
	avatarSrc,
	username,
	loading,
}: IUserBlockProps) => {
	return (
		<a
			className={styles.userBox}
			href='https://www.reddit.com/api/v1/authorize?client_id=qWPMd-cKzXs6cqdaP63xJg&response_type=code&
			state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
		>
			<div className={styles.avatarBox}>
				{avatarSrc ? (
					<img
						src={avatarSrc}
						alt='user avatar'
						className={styles.avatarImage}
					/>
				) : (
					<IconAnon />
				)}
			</div>
			<div className={styles.username}>
				<Break size={12} />
				{loading ? (
					<Text size={20} color={EColor.grey99}>
						Загрузка...
					</Text>
				) : (
					<Text size={20} color={username ? EColor.black : EColor.grey99}>
						{username || 'Аноним'}
					</Text>
				)}
			</div>
		</a>
	)
}
