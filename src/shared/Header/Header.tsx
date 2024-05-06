import React from 'react'
import { SearchBlock } from './SearchBlock'
import { SortBlock } from './SortBlock'
import { ThreadTitle } from './ThreadTitle'
import styles from './header.css'

// interface IHeaderProps {
// 	token: string
// }

export function Header() {
	// const { Consumer } = tokenContext
	// const token = useContext(tokenContext)
	return (
		<header className={styles.header}>
			{/* <Consumer>
				{token => <SearchBlock token={token} />}
			</Consumer> */}
			<SearchBlock />
			<ThreadTitle />
			<SortBlock />
		</header>
	)
}
