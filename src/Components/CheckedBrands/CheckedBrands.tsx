import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseFilterType} from "../../api/api";
import {fetchBrands} from "../../Redux/Brands_reducer";
import {Preloader} from "../../common/Preloader/Preloader";

export const CheckedBrands = () => {
	const filtersBrands = useSelector<RootStoreType, Array<responseFilterType>>(state => state.brandsReducer.data.filters)
	const appStatus = useSelector<RootStoreType, string>(state => state.appReducer.status)
	const current_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)
	const dispatch = useDispatch();
	const [x, setX] = useState(true)
 	const mappedBrands = filtersBrands
		.filter((f) =>  f.slug === 'brands')
		.map(f=> f.items.map( (f, index) => x ? (index < 5 && <div key={f.value}><input type="checkbox"/> {f.title}</div>)
			: <div key={f.value}><input type="checkbox"/> {f.title}</div>))



	useEffect(() => {
		if (current_page) {
			dispatch(fetchBrands(current_page))
		}

	}, [dispatch, current_page])

	if (appStatus === 'loading') {
		return <Preloader/>
	}
	return (
		<div>
			{mappedBrands}
			<div>
				{x && <span><input type="checkbox" onChange={() => setX(!x)}/> Другие</span>}
			</div>
		</div>
	)
}