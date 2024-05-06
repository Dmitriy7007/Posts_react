import React from 'react'
import { EIcons } from '../../types/icons'
import { IItem } from '../../types/item'
import { assoc } from '../../utils/js/assoc'
import { merge } from '../../utils/js/merge'
import { pipe } from '../../utils/js/pipe'
import { assignId } from '../../utils/react/generateRandomIndex'
import styles from '../CardList/Card/CardMenuButton/cardMenuButton.css'
import { Icon } from '../Icon'

export const LIST: IItem[] = [
	{
		text: 'Комментарии',
		icon: <Icon name={EIcons.comments} />,
	},
	{ text: 'Поделиться', icon: <Icon name={EIcons.shared} /> },
	{ text: 'Скрыть', icon: <Icon name={EIcons.block} /> },
	{ text: 'Сохранить', icon: <Icon name={EIcons.save} /> },
	{ text: 'Пожаловаться', icon: <Icon name={EIcons.warning} /> },
].map(
	pipe(
		assignId,
		assoc('className', () => {
			return styles.cardDropdownItem
		}),
		assoc('As', () => 'li'),
		merge({ divider: <div className={styles.divider}></div> })
	)
)
