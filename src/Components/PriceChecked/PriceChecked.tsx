import React, {useEffect} from 'react';
import {PriceSelection} from '../../common/PriceSelection/PriceSelection';
import {RangeSlider} from "../../common/Slider/Slider";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseFilterType} from "../../api/api";
import {getCard} from "../../Redux/card_reducer";

type PriceCheckedPropsType = {

}

export const PriceChecked: React.FC<PriceCheckedPropsType> = () => {
	const products = useSelector<RootStoreType, Array<responseFilterType>>(state => state.brandsReducer.data.filters)
	const title = products.filter(p => p.title === 'Цена').map(p => <h3 key={p.title}>{p.title}, ₽</h3>)

	const minPrice = +products.filter(p => p.title === 'Цена').map(p => p.min)
	const maxPrice = +products.filter(p => p.title === 'Цена').map(p => p.max)



	const current_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)
	const dispatch = useDispatch();


	const [value, setValue] = React.useState<number[]>([0, 0]);

	const min = value[0]
	const max = value[1]

	const handleChange = (event: any, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};
	useEffect(() => {
		dispatch(getCard(current_page, min, max))
	}, [dispatch, current_page, min, max])

	const onDrop = () => {
		dispatch(getCard(current_page, min, max))
	}

	useEffect(() => {
		setValue([minPrice, maxPrice])
	}, [minPrice, maxPrice, setValue])

	return (
		<div>
			{title}
			<PriceSelection min={min} max={max} onChange={handleChange}/>
			<RangeSlider max={maxPrice} min={minPrice} value={value} onChange={handleChange} onDrop={onDrop}/>
		</div>
	);
};


