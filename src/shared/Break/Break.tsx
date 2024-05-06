import classNames from 'classnames'
import React from 'react'
import { IBreakProps } from '../../types/break'
import styles from './break.css'

export const Break = (props: IBreakProps) => {
	const {
		inline = false,
		top = false,
		size,
		mobileSize,
		tabletSize,
		desktopSize,
	} = props

	return (
		<div
			className={classNames(
				styles[`s${size}`],
				{
					[styles[`mobile_s${mobileSize}`]]: mobileSize,
				},
				{
					[styles[`tablet_s${tabletSize}`]]: tabletSize,
				},
				{
					[styles[`desktop${desktopSize}`]]: desktopSize,
				},
				{ [styles.inline]: inline },
				{ [styles.top]: top }
			)}
		/>
	)
}
