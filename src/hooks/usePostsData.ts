import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducer'
import { IPostData } from './../shared/context/postsContext'

export const usePostsData = () => {
	const [posts, setPosts] = useState<IPostData[]>([])
	const [loading, setLoading] = useState(false)
	const [errorLoading, setErrorLoading] = useState('')
	const [nextAfter, setNextAfter] = useState('')
	const bottomOfList = useRef<HTMLDivElement>(null)
	const [countLoading, setCountLoading] = useState(0)
	const [visibleBtn, setVisibleBtn] = useState(false)

	const token = useSelector((state: RootState) => state.token)

	async function load() {
		setLoading(true)
		setErrorLoading('')

		try {
			const response = await axios.get('https://oauth.reddit.com/best/', {
				headers: { Authorization: `bearer ${token}` },
				params: { limit: 5, sr_detail: true, after: nextAfter },
			})

			const userData = response.data.data.children.map(
				(item: { data: any }) => ({
					id: item.data.id,
					author: item.data.author,
					title: item.data.title,
					rating: item.data.ups,
					avatar: item.data.sr_detail.icon_img,
					previewImg: item.data.preview,
					datePostUtc: item.data.created_utc,
				})
			)
			setNextAfter(response.data.data.after)
			setPosts(prevUserData => prevUserData.concat(...userData))
		} catch (error) {
			setErrorLoading(String(error))
		}
		setLoading(false)
	}

	function handleClick() {
		setVisibleBtn(false)
		load()
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (token && token != 'undefined' && entries[0].isIntersecting) {
					setCountLoading(prev => ++prev)
					if (countLoading < 2) {
						load()
					} else {
						setVisibleBtn(true)
						setCountLoading(0)
					}
				}
			},
			{ rootMargin: '100px' }
		)
		if (bottomOfList.current) {
			observer.observe(bottomOfList.current)
		}
		return () => {
			if (bottomOfList.current) {
				observer.unobserve(bottomOfList.current)
			}
		}
	}, [bottomOfList.current, token, nextAfter])

	return { posts, loading, errorLoading, bottomOfList, visibleBtn, handleClick }
}
