import React, { ChangeEvent, FormEvent } from 'react'
import styles from './commentForm.css'

type Props = {
	value: string
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	onSubmit: (e: FormEvent) => void
	ref: any
}

export function CommentForm({ value, onChange, onSubmit, ref }: Props) {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<textarea
				className={styles.input}
				onChange={onChange}
				value={value}
				ref={ref}
			/>

			<button type='submit' className={styles.button}>
				Комментировать
			</button>
		</form>
	)
}

// import React, { FormEvent, useEffect, useRef } from 'react'
// import styles from './commentForm.css'

// export function CommentForm({ setRef }: any) {
// 	const textareaRef = useRef<HTMLTextAreaElement>(null)
// 	const area = textareaRef.current

// 	useEffect(() => {
// 		setRef(area)
// 	}, [area])

// 	function handleSubmit(e: FormEvent) {
// 		e.preventDefault()
// 		console.log(textareaRef.current?.value)
// 	}

// 	return (
// 		<form className={styles.form} onSubmit={handleSubmit}>
// 			<textarea className={styles.input} ref={textareaRef} />
// 			<button type='submit' className={styles.button}>
// 				Комментировать
// 			</button>
// 		</form>
// 	)
// }
