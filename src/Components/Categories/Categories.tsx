import React from 'react';
import {useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseProductsCategoryType} from "../../api/api";
import styled from 'styled-components';
const Div = styled.div`
    margin-top: 15px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
	`
export const Categories = () => {
	const categories = useSelector<RootStoreType, Array<responseProductsCategoryType>>(state => state.brandsReducer.data.categories)
	const title = categories.filter(c => c.title === 'Камеры').map(c => <h2 key={c.id}>{c.title}</h2>)

	return (
		<Div>
			{title}
		</Div>
	);
};
