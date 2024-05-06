import React from 'react'
import { usePostsData } from '../../hooks/usePostsData'

export interface IPostData {
	id: string
	author: string
	title: string
	rating?: number
	avatar: string
	previewImg: any
	datePostUtc: number
}

export const postsContext = React.createContext<IPostData[]>([])

export function PostsContextProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const { posts } = usePostsData()

	return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}
