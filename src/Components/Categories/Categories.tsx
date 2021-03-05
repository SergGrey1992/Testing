import React from 'react';
import {useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseProductsCategoryType} from "../../api/api";

export const Categories = () => {
	const categories = useSelector<RootStoreType, Array<responseProductsCategoryType>>(state => state.brandsReducer.data.categories)
	const title = categories.filter(c => c.title === 'Камеры').map(c => <h2 key={c.id}>{c.title}</h2>)
	return (
		<div>
			{title}
		</div>
	);
};
