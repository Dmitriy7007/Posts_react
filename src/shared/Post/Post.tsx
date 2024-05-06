import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useCommentsData } from '../../hooks/useCommentsData'
import { Comment } from '../Comment'
import { CommentFormContainer } from '../CommentFormContainer'
import { postIdContext } from '../context/postIdContext'
import styles from './post.css'

interface IPost {
	onClose?: () => void
}

export interface IItemComment {
	data: {
		author: string
		body: string
		created_utc: number
		replies?: {
			data?: {
				children?: IItemComment[]
			}
		}
		id: string
	}
}

export const Post = ({ onClose }: IPost) => {
	const postId = useContext(postIdContext)
	const [commentsData] = useCommentsData(postId)

	// const [ref] = useCloseElement({ onClose })

	const ref = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (
				event.target instanceof Node &&
				!ref.current?.contains(event.target)
			) {
				navigate('/posts')
			}
		}

		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])

	const node = document.querySelector('#modal_root')
	if (!node) return null

	const [textAreaRef, setTextAreaRef] = useState<HTMLTextAreaElement | null>(
		null
	)

	return ReactDOM.createPortal(
		<div className={styles.modal} ref={ref}>
			<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

			<div className={styles.content}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
					molestiae iure voluptate incidunt nesciunt sapiente impedit itaque?
					Dignissimos doloremque doloribus, sunt ea itaque quis suscipit tempore
					totam similique fuga eaque.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
					molestiae iure voluptate incidunt nesciunt sapiente impedit itaque?
					Dignissimos doloremque doloribus, sunt ea itaque quis suscipit tempore
					totam similique fuga eaque.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
					molestiae iure voluptate incidunt nesciunt sapiente impedit itaque?
					Dignissimos doloremque doloribus, sunt ea itaque quis suscipit tempore
					totam similique fuga eaque.
				</p>
			</div>

			<CommentFormContainer setRef={setTextAreaRef} />

			{commentsData &&
				commentsData.map((item: IItemComment) => (
					<Comment
						author={item.data.author}
						body={item.data.body}
						created={item.data.created_utc}
						replies={item.data.replies?.data?.children}
						key={item.data.id}
						id={item.data.id}
						textAreaRef={textAreaRef}
					/>
				))}
		</div>,
		node
	)
}
// function useEffect(arg0: () => () => void, arg1: never[]) {
// 	throw new Error('Function not implemented.')
// }
