import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveToken } from '../../store/saveToken/actions'
import styles from './layout.css'

interface ILayoutProps {
	children?: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(saveToken() as any)
	}, [])
	return <div className={styles.layout}>{children}</div>
}

export default Layout
