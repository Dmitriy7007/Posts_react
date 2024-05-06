import classNames from 'classnames'
import React from 'react'
import { IIconsProps } from '../../types/icons'
import {
	BlockIcon,
	CommentsIcon,
	MenuIcon,
	SaveIcon,
	SharedIcon,
	WarningIcon,
} from '../Icons'
import styles from './icon.css'

export const Icon = ({ name, size = 14 }: IIconsProps) => {
	const classes = classNames(styles[`s${size}`])

	switch (name) {
		case 'BlockIcon':
			return (
				<span className={classes}>
					<BlockIcon />
				</span>
			)
		case 'CommentsIcon':
			return (
				<span className={classes}>
					<CommentsIcon />
				</span>
			)
		case 'MenuIcon':
			return (
				<span className={classes}>
					<MenuIcon />
				</span>
			)
		case 'SaveIcon':
			return (
				<span className={classes}>
					<SaveIcon />
				</span>
			)
		case 'SharedIcon':
			return (
				<span className={classes}>
					<SharedIcon />
				</span>
			)
		case 'WarningIcon':
			return (
				<span className={classes}>
					<WarningIcon />
				</span>
			)
		default:
			return <></>
	}
}
