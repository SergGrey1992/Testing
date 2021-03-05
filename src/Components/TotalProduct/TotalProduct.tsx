import React from 'react';
import {useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";

export const TotalProduct = () => {
	const totalProduct = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.total)
	return (
		<div>
			Товаров : {totalProduct}
		</div>
	);
};
