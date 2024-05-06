import React from 'react'
import { EIcons } from '../../types/icons'
import { IItem } from '../../types/item'
import { assoc } from '../../utils/js/assoc'
import { pipe } from '../../utils/js/pipe'
import { assignId } from '../../utils/react/generateRandomIndex'
import styles from '../CardList/Card/CardMenuButton/cardMenuButton.css'
import { Icon } from '../Icon'

export const LIST: IItem[] = [
	{
		text: 'Ответить',
		icon: <Icon name={EIcons.comments} />,
	},
	{ text: 'Поделиться', icon: <Icon name={EIcons.shared} /> },
	{ text: 'Пожаловаться', icon: <Icon name={EIcons.warning} /> },
].map(
	pipe(
		assignId,
		assoc('className', () => {
			return styles.cardDropdownItem
		})
	)
)
