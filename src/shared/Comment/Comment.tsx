import React from 'react'
// import { useDispatch } from 'react-redux'
import { IItem } from '../../types/item'
import { CardKarmaCounter } from '../CardList/Card/CardControls/CardKarmaCounter'
import { CardUserInfo } from '../CardList/Card/CardPostData/CardUserInfo'
import { IItemComment } from '../Post'
import { LIST } from '../data/commentButtonData'
import styles from './comment.css'

interface IPost {
	author: string
	body: string
	created: number
	replies?: IItemComment[]
	id: string
	textAreaRef: HTMLTextAreaElement | null
}

export function Comment({
	author,
	body,
	created,
	replies,
	id,
	textAreaRef,
}: IPost) {
	// const dispatch = useDispatch()

	return (
		<div className={styles.commentContainer}>
			<div className={styles.counterContainer}>
				<CardKarmaCounter styleSpan='noneSpan' />
				<div className={styles.commentLine}></div>
			</div>
			<div className={styles.commentInfo}>
				<CardUserInfo author={author} avatar='' />
				<p className={styles.commentBody}>{body}</p>

				{LIST && (
					<ul className={styles.listBtn}>
						{LIST.map((item: IItem) => (
							<li key={item.id} className={styles.itemBtn}>
								<button
									className={styles.btnComment}
									onClick={() => {
										textAreaRef?.focus()
										// dispatch(updateComment(`${author}, `))
										if (textAreaRef !== null) {
											textAreaRef.value = `${author}, `
										}
									}}
								>
									{item.icon}
									{item.text}
								</button>
							</li>
						))}
					</ul>
				)}

				{replies?.length &&
					replies.map((item: IItemComment) => (
						<Comment
							author={item.data.author}
							body={item.data.body}
							created={item.data.created_utc}
							key={item.data.id}
							id={item.data.id}
							replies={item.data.replies?.data?.children}
							textAreaRef={textAreaRef}
						></Comment>
					))}
			</div>
		</div>
	)
}
