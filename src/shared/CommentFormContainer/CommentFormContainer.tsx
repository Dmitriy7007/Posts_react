import React, { useEffect, useRef } from 'react'
// import { CommentForm } from '../CommentForm'
import { Formik } from 'formik'
import styles from '../CommentForm/commentForm.css'

export function CommentFormContainer({ setRef }: any) {
	// const value = useSelector((state: RootState) => state.commentText)
	// const dispatch = useDispatch()
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const area = textareaRef.current

	useEffect(() => {
		setRef(area)
	}, [area])

	// function handleSubmit(e: FormEvent) {
	// 	e.preventDefault()
	// 	console.log(value)
	// }

	// function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
	// 	dispatch(updateComment(e.target.value))
	// }

	return (
		// <CommentForm
		// 	value={value}
		// 	ref={textareaRef}
		// 	onChange={handleChange}
		// 	onSubmit={handleSubmit}
		// />

		<>
			<Formik
				initialValues={{ comment: '' }}
				validate={values => {
					type errors = {
						comment?: string
					}
					const errors: errors = {}

					if (values.comment.length <= 3) {
						errors.comment = 'Введите больше 3 символов'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit} className={styles.form}>
						<textarea
							className={styles.input}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.comment}
							name='comment'
							ref={textareaRef}
						/>
						{errors.comment && touched.comment && errors.comment}
						<button
							type='submit'
							className={styles.button}
							disabled={isSubmitting}
						>
							Комментировать
						</button>
					</form>
				)}
			</Formik>
		</>
	)
}
