import React from 'react'

export function MyHooks({ title, id }: { title: string; id?: string }) {
	// const [isMounted] = useIsMounted()
	// React.useEffect(() => {
	// 	console.log('isMounted:', isMounted)
	// }, [isMounted])

	return (
		<div style={{ width: window.innerWidth }}>
			{title}
			{id}
		</div>
	)
}

export function useIsMounted() {
	const [isMounted, setIsMounted] = React.useState(false)
	React.useEffect(() => {
		setIsMounted(true)
	}, [])

	return [isMounted]
}
