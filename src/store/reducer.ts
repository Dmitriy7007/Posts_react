import { Reducer } from 'redux'
import { UPDATE_COMMENT, UpdateCommentAction } from './comments/actions'
import {
	ME_REQUEST,
	ME_REQUEST_ERROR,
	ME_REQUEST_SUCCESS,
	MeRequestAction,
	MeRequestErrorAction,
	MeRequestSuccessAction,
} from './me/actions'
import { MeState, meReducer } from './me/reducer'
import { SetTokenAction, UPDATE_TOKEN } from './saveToken/actions'

export type RootState = {
	commentText: string
	token: string | undefined
	me: MeState
}

const initialState: RootState = {
	commentText: 'Привет, SkillBox',
	token: undefined,
	me: { loading: false, error: '', data: {} },
}

type MyAction =
	| UpdateCommentAction
	| SetTokenAction
	| MeRequestAction
	| MeRequestSuccessAction
	| MeRequestErrorAction

export const rootReducer: Reducer<RootState, MyAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return {
				...state,
				commentText: action.text,
			}
		case UPDATE_TOKEN:
			return {
				...state,
				token: action.token,
			}
		case ME_REQUEST:
		case ME_REQUEST_SUCCESS:
		case ME_REQUEST_ERROR:
			return {
				...state,
				me: meReducer(state.me, action),
			}
		default:
			return state
	}
}
