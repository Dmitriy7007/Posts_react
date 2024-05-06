import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducer'

export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export type SetTokenAction = {
	type: typeof UPDATE_TOKEN
	token: string
}

export const setToken: ActionCreator<SetTokenAction> = token => ({
	type: UPDATE_TOKEN,
	token,
})

export const saveToken =
	(): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
		if (localStorage.getItem('token') || window.__token__) {
			dispatch(setToken(window.__token__))
		}
		if (window.__token__ !== 'undefined') {
			localStorage.setItem('token', window.__token__)
		}
	}
