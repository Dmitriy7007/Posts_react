import React from 'react'
import { IPostData } from './../../context/postsContext'
import { CardControls } from './CardControls'
import { CardMenuButton } from './CardMenuButton'
import { CardPostData } from './CardPostData'
import { CardPreview } from './CardPreview'
import styles from './card.css'

interface IPost {
	post: IPostData
	onClick?: (id: string) => void
}

const noop = () => {}

export function Card({ post, onClick = noop }: IPost) {
	return (
		<li className={styles.card} onClick={() => onClick(post.id)}>
			<CardPostData
				title={post.title}
				author={post.author}
				datePostUtc={post.datePostUtc}
				avatar={post.avatar}
				id={post.id}
			/>
			<CardPreview previewImg={post.previewImg} />
			<CardMenuButton />
			<CardControls rating={post.rating} />
		</li>
	)
}
