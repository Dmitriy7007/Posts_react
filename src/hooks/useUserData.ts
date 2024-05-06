import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { meRequestAsync } from '../store/me/actions'
import { RootState } from '../store/reducer'

export const useUserData = () => {
	const data = useSelector((state: RootState) => state.me.data)
	const loading = useSelector((state: RootState) => state.me.loading)
	const token = useSelector((state: RootState) => state.token)
	const dispatch = useDispatch()

	useEffect(() => {
		if (token == 'undefined' || !token || token == '') return
		dispatch(meRequestAsync() as any)
	}, [token])

	return { data, loading }
}
