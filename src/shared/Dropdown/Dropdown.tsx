import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useCloseElement } from '../../hooks/useCloseElement'
import styles from './dropdown.css'

interface IDropdownProps {
	button: React.ReactNode
	children: React.ReactNode
	isOpen?: boolean
	onOpen?: () => void
	onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({
	button,
	children,
	isOpen,
	onClose = NOOP,
	onOpen = NOOP,
}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
	React.useEffect(() => {
		isDropdownOpen ? onOpen() : onClose()
	}, [isDropdownOpen])

	const handleOpen = () => {
		if (isOpen === undefined) {
			setIsDropdownOpen(!isDropdownOpen)
		}
	}

	const [ref] = useCloseElement({
		onClose: () => {
			setIsDropdownOpen(false)
		},
	})

	const node = document.querySelector('#dropdown_root')
	if (!node) return null

	type Coords = {
		left: number
		top: number
		width: number
	}

	const [coords, setCoords] = useState<Coords | null>(null)

	const getCoords = (): Coords | null => {
		const box = ref.current?.getBoundingClientRect()

		if (box) {
			return {
				left: box.left,
				top: box.top + box.height + window.scrollY,
				width: box.width,
			}
		}

		return null
	}

	React.useEffect(() => {
		if (!isDropdownOpen) return

		const coords = getCoords()
		setCoords(coords)
	}, [isDropdownOpen])

	return (
		<div className={styles.container} ref={ref}>
			<div onClick={handleOpen}>{button}</div>
			{isDropdownOpen &&
				coords &&
				ReactDOM.createPortal(
					<div
						className={styles.listContainer}
						style={{
							position: 'absolute',
							left: `${coords.left}px`,
							top: `${coords.top}px`,
							minWidth: `${Math.max(150, coords.width)}px`,
						}}
						onClick={() => {
							setIsDropdownOpen(false)
						}}
					>
						<div className={styles.list}>{children}</div>
					</div>,
					node
				)}
		</div>
	)
}
