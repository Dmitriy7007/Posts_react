import classNames from 'classnames'
import React from 'react'
import { EColor, ITextProps } from '../../types/text'
import styles from './text.css'

export const Text = (props: ITextProps) => {
	const {
		As = 'span',
		children,
		size,
		mobileSize,
		desktopSize,
		tabletSize,
		color = EColor.black,
		bold = false,
	} = props

	const classes = classNames(
		styles[`s${size}`],
		{ [styles.bold]: bold },
		{
			[styles[`m${mobileSize}`]]: mobileSize,
		},
		{
			[styles[`t${tabletSize}`]]: tabletSize,
		},
		{
			[styles[`d${desktopSize}`]]: desktopSize,
		},
		styles[color]
	)
	return <As className={classes}>{children}</As>
}
