import React from 'react'
import { IItem } from '../../../../types/item'
import { Dropdown } from '../../../Dropdown'
import GenericList from '../../../GenericList/GenericList'
import { LIST } from '../../../data/dataDropdown'
import { MenuIcon } from './../../../Icons/MenuIcon'
import styles from './cardMenuButton.css'

export function CardMenuButton() {
	return (
		<div className={styles.menu}>
			{LIST && (
				<Dropdown
					button={
						<button className={styles.menuButton}>
							<MenuIcon />
						</button>
					}
				>
					<ul className={styles.dropdown}>
						<GenericList
							list={LIST.map((item: IItem) => ({
								...item,
								onClick: id => {
									console.log(id)
								},
							}))}
						/>
						<button className={styles.closeButton}>Закрыть</button>
					</ul>
				</Dropdown>
			)}
		</div>
	)
}
