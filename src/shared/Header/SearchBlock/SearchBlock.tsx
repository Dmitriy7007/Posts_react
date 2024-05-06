import React from 'react'
import { useUserData } from '../../../hooks/useUserData'
import { UserBlock } from './UserBlock'
import styles from './searchBlock.css'

export function SearchBlock() {
	// const { iconImg, name } = useContext(userContext)
	const { data, loading } = useUserData()

	return (
		<div className={styles.searchBlock}>
			<UserBlock
				avatarSrc={data.iconImg}
				username={data.name}
				loading={loading}
			/>
		</div>
	)
}
