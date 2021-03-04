// Actions
export const setAppStatus = (status: RequestStatusType) => ({
		type: 'cards/app/SET-STATUS', status} as const)
type setAppStatusType = ReturnType<typeof setAppStatus>
const setRequestError = (errorText: string | null) => ({
		type: 'cards/app/SET-REQUEST-ERROR', errorText} as const)
type setRequestErrorType = ReturnType<typeof setRequestError>

export type AppActionsType = setAppStatusType | setRequestErrorType

// State
const initState: AppInitStateType = {
	status: 'idle',
	requestError: null
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type AppInitStateType = {
	status: RequestStatusType
	requestError: string | null
}

// Reducer
export const appReducer = (state: AppInitStateType = initState, action: AppActionsType): AppInitStateType => {
	switch (action.type) {
		case 'cards/app/SET-STATUS':
			return {
				...state,
				status: action.status
			}
		case 'cards/app/SET-REQUEST-ERROR':
			return {
				...state,
				requestError: action.errorText
			}
		default:
			return {...state}
	}
}
