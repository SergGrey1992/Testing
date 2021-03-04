import React from 'react';
import {CheckedBrands} from "../CheckedBrands/CheckedBrands";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";

export const TotalProduct = () => {
	const totalProduct = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.total)
	return (
		<div>
			<div>
				Товаров : {totalProduct}
			</div>
			<div>
				Камеры
			</div>
			<div>
				Цена, ₽
			</div>
			<PriceSelection/>
			<Slider/>
			<div>Бренд</div>
			<CheckedBrands/>
		</div>
	);
};
const PriceSelection = () => {
	return (
		<div>
			<input type="number" defaultValue={0}/>
			<input type="number" defaultValue={499000}/>
		</div>
	)
}
const Slider = () => {
	return (
		<div>
			slider
		</div>
	)
}




