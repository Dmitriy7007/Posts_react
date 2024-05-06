import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import './main.global.css'
import { CardsList } from './shared/CardList'
import { Content } from './shared/Content'
import { Header } from './shared/Header/Header'
import Layout from './shared/Layout/Layout'
import { Post } from './shared/Post'
import { PostsContextProvider } from './shared/context/postsContext'
import { UserContextProvider } from './shared/context/userContext'
import { rootReducer } from './store/reducer'
// import { saveToken } from './store/saveToken/actions'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

const AppComponent = () => {
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	// const dispatch = useDispatch()

	// useEffect(() => {
	// const token = localStorage.getItem('token') || window.__token__
	// store.dispatch(setToken(token))
	// if (token !== 'undefined') {
	// 	localStorage.setItem('token', token)
	// }
	// 	dispatch(saveToken() as any)
	// }, [])

	return (
		<Provider store={store}>
			<UserContextProvider>
				<PostsContextProvider>
					{mounted && (
						<BrowserRouter>
							<Layout>
								<Header />
								<Content>
									{/* <CardsList /> */}
									<Routes>
										<Route path='/posts' element={<CardsList />}></Route>
										<Route
											path='/'
											element={<Navigate replace to='/posts' />}
										></Route>
										<Route
											path='/auth'
											element={<Navigate replace to='/posts' />}
										></Route>
										<Route
											path='/posts/:id'
											element={
												<>
													<CardsList />
													<Post />
												</>
											}
										></Route>

										<Route
											path='*'
											element={<div>Страница не найдена</div>}
										></Route>
									</Routes>
								</Content>
							</Layout>
						</BrowserRouter>
					)}
				</PostsContextProvider>
			</UserContextProvider>
		</Provider>
	)
}

export const App = hot(() => <AppComponent />)
function dispatch() {
	throw new Error('Function not implemented.')
}
