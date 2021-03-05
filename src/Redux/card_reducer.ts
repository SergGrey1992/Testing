import {fullApi, responseProductsType} from "../api/api"
import {Dispatch} from "redux";
import {AppActionsType} from "./app_reducer";

export const setCard = (card: Array<responseProductsType>) => ({type: 'cardReducer/SET_CARD', card} as const)
type setCardType = ReturnType<typeof setCard>
export type cardActionsType = setCardType
const cardInitState = {
	products: []
}
type cardInitStateType = {
	products: Array<responseProductsType>
}
export const cardReducer = (state: cardInitStateType = cardInitState, actions: cardActionsType): cardInitStateType => {
	switch (actions.type) {
		case "cardReducer/SET_CARD": {
			return {
				...state,
				products: actions.card
			}
		}
		default: {
			return state
		}
	}
}
export const getCard = (page: number, min?: number, max?: number) => (dispatch: Dispatch<cardActionsType | AppActionsType>) => {
	return fullApi.getProducts(page, min, max)
		.then((res) => {
			if (res.data.result === 'success') {
				dispatch(setCard(res.data.products))
				console.log(res.data)
			}
		})
}