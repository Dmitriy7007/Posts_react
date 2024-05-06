import React, { RefObject, useState } from 'react'
import { usePostsData } from '../../hooks/usePostsData'
import { postIdContext } from '../context/postIdContext'
// import { postsContext } from '../context/postsContext'
import { Card } from './Card/Card'
import styles from './cardsList.css'

export function CardsList() {
	// const posts = useContext(postsContext)
	// const bottomOfList = useRef<HTMLDivElement>(null)

	const [dataId, setDataId] = useState('')

	const {
		posts,
		loading,
		errorLoading,
		bottomOfList,
		visibleBtn,
		handleClick,
	} = usePostsData()

	const PostIdProvider = postIdContext.Provider

	return (
		<PostIdProvider value={dataId}>
			<ul className={styles.cardsList}>
				{posts.length == 0 && !loading && !errorLoading && (
					<div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
				)}

				{posts.map(item => (
					<Card onClick={id => setDataId(id)} key={item.id} post={item}></Card>
				))}

				{visibleBtn && (
					<button
						style={{
							border: '2px solid black',
							borderRadius: '5px',
							padding: '10px 20px',
							margin: 'auto',
							display: 'block',
						}}
						onClick={() => handleClick()}
					>
						Загрузить еще
					</button>
				)}

				<div ref={bottomOfList as RefObject<HTMLDivElement>} />

				{loading && <div style={{ textAlign: 'center' }}>Загрузка...</div>}

				{errorLoading && (
					<div role='alert' style={{ textAlign: 'center' }}>
						{errorLoading}
					</div>
				)}
			</ul>
		</PostIdProvider>
	)
}
