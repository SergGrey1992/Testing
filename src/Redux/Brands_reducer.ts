import {fullApi, fullType, responseType} from "../api/api";
import {Dispatch} from "redux";
import {AppActionsType, setAppStatus} from "./app_reducer";

// Actions
export const showBrands = (data: responseType) => ({
	type: 'brands/SHOW_BRANDS', payload: {data}
} as const)
export const setCurrentPage = (currentPage: number) => {
	return {type: 'brands/SET_CURRENT_PAGE', currentPage} as const
}

export type showActionType = ReturnType<typeof showBrands>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type brandsActionType = showActionType | setCurrentPageType
// State
const brandsInitState: fullType = {
	data: {
		categories: [],
		definition_type: '',
		filters: [],
		links: {
			first: '',
			last: '',
			next: '',
			prev: null
		},
		meta: {
			current_page: 1,
			from: 1,
			last_page: 9,
			path: 'https://getlens-master.stage.dev.family/api/pages/kamery',
			per_page: 24,
			to: 24,
			total: 0,
		},
		products: [],
		result: ''
	}
}
export type brandsStateType = typeof brandsInitState
// Reducer
export const brandsReducer = (state: brandsStateType = brandsInitState, actions: brandsActionType): brandsStateType => {
	switch (actions.type) {
		case "brands/SHOW_BRANDS": {
			return {
				...state,
				data: actions.payload.data
			}
		}
		case "brands/SET_CURRENT_PAGE": {
			debugger
			return  {
				...state,
				data: {...state.data, meta: {...state.data.meta, current_page: actions.currentPage}}
			}
		}
		default:
			return state
	}
};
// Thunk
export const fetchBrands = (page: number) => (dispatch: Dispatch<brandsActionType | AppActionsType>) => {
	dispatch(setAppStatus('loading'))
	return fullApi.getBrands(page)
		.then((res) => {
			if (res.data.result === 'success') {
				dispatch(showBrands(res.data))
			}
		})
		.finally(() => {
			dispatch(setAppStatus('succeeded'))
		} )
}
