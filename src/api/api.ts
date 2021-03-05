import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://getlens-master.stage.dev.family/api/pages',
	//baseURL: 'https://getlens-master.stage.dev.family/api/pages/kamery',
})

export type fullType = {
	data: responseType
}
export type responseType = {
	categories: Array<responseCategoriesType>,
	definition_type: string
	filters: Array<responseFilterType>
	links: responseLinksType
	meta: responseMetaType
	products: Array<responseProductsType>
	result: string
}
type responseCategoriesType = {
	children: Array<responseChildrenType>
	icon: string
	id: number
	image: object
	slug: string
	title: string
}
type responseChildrenType = {
	id: number
	title: string
	slug: string
}
export type responseFilterType = {
	info: null
	items: Array<responseFilterItemType>
	max: string | null
	min: string | null
	slug: string
	title: string
	type: string
}
type responseFilterItemType = {
	main: boolean
	title: string
	value: string
}
type responseLinksType = {
	first: string
	last: string
	next: string
	prev: null | string
}
export type responseMetaType = {
	current_page: number
	from: number
	last_page: number
	path: string
	per_page: number
	to: number
	total: number
}
export type responseProductsType = {
	category: Array<responseProductsCategoryType>
	condition: 5
	discount_trade_in: string
	id: number
	image: responseProductsImageType
	in_stock: true
	is_new: true
	is_second_hand: true
	price: string
	slug: string
	title: string
}
export type responseProductsCategoryType = {
	id: number
	title: string
	slug: string
}

type responseProductsImageType<T = {x1: string, x2: string, webp_x1: string, webp_x2: string }> = {
	desktop: T
	mobile: T
	tablet: T
}

export const fullApi = {
	getBrands(page: number, min?: number, max?: number) {
		return instance.get<responseType>('/kamery', {
			params: {
				page,
				'price[min]': min,
				'price[max]': max
			}
		})
	},
	getProducts(page: number, min?: number, max?: number) {
		return this.getBrands(page, min, max)
	}
}
