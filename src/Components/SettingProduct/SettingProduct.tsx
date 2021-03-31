import React from 'react';
import {CheckedBrands} from "../CheckedBrands/CheckedBrands";
import {PriceChecked} from "../PriceChecked/PriceChecked";
import {TotalProduct} from "../TotalProduct/TotalProduct";
import {Categories} from "../Categories/Categories";

type SettingProductPropsType = {

}

export const SettingProduct: React.FC<SettingProductPropsType> = () => {
	return (
		<div>
			<TotalProduct/>
			<Categories/>
			<PriceChecked />
			<CheckedBrands/>
		</div>
	);
};






