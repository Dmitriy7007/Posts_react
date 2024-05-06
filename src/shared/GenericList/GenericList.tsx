import React from 'react'
import { IItem } from '../../types/item'

interface IGenericListProps {
	list: IItem[]
}

const noop = () => {}

export default function GenericList({ list }: IGenericListProps) {
	return (
		<>
			{list.map(
				({
					As = 'li',
					text,
					onClick = noop,
					className,
					id,
					href,
					icon,
					divider,
				}) => (
					<div key={id}>
						<As className={className} onClick={() => onClick(id)} href={href}>
							{icon}
							{text}
						</As>
						{divider}
					</div>
				)
			)}
		</>
	)
}
