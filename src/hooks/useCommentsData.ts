import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducer'

export function useCommentsData(postId: string) {
	const [commentsData, setCommentsData] = useState([])
	const token = useSelector((state: RootState) => state.token)

	useEffect(() => {
		if (token && token.length > 0) {
			axios
				.get(`https://oauth.reddit.com/comments/${postId}?sr_detail=true`, {
					headers: {
						Authorization: `bearer ${token}`,
					},
				})
				.then(res => {
					// setCommentsData(res.data[1]?.data.children)
					setCommentsData(res.data.data.children)
				})
				.catch(console.log)
		}
	}, [postId])

	return [commentsData]
}
