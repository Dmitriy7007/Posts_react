import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './cardPostTitle.css'

export function CardPostTitle({
	title,
	idPost,
}: {
	title: string
	idPost: string
}) {
	// const [isModalOpened, setIsModalOpened] = useState(false)

	const { id } = useParams()

	return (
		<h2 className={styles.title}>
			<Link to={`/posts/${idPost}`} className={styles.postLink}>
				{title}
			</Link>
		</h2>
	)
}
