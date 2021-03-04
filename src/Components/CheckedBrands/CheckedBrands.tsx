import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseFilterType} from "../../api/api";
import {fetchBrands} from "../../Redux/Brands_reducer";
import {Preloader} from "../../common/Preloader/Preloader";

export const CheckedBrands = () => {
	const filtersBrands = useSelector<RootStoreType, Array<responseFilterType>>(state => state.brandsReducer.data.filters)
	const mappedBrands = filtersBrands.map(f=> f.items.map( (f) => <div key={f.value}><input type="checkbox"/> {f.title}</div>   )  )
	const appStatus = useSelector<RootStoreType, string>(state => state.appReducer.status)
	const current_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)

	const dispatch = useDispatch();
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
		</div>
	)
}