import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface ICloseEl {
	onClose?: () => void
}

export function useCloseElement({ onClose }: ICloseEl) {
	const ref = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (
				event.target instanceof Node &&
				!ref.current?.contains(event.target)
			) {
				onClose?.()
			}
		}

		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])

	return [ref]
}
