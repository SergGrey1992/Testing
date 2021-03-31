import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseFilterType} from "../../api/api";
import {fetchBrands} from "../../Redux/Brands_reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import style from "./CheckedBrands.module.css"

export const CheckedBrands = () => {
	const filtersBrands = useSelector<RootStoreType, Array<responseFilterType>>(state => state.brandsReducer.data.filters)
	const appStatus = useSelector<RootStoreType, string>(state => state.appReducer.status)
	const currentPage = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)
	const dispatch = useDispatch();
	const [othersBrands, setOthersBrands] = useState(false)
	const [checkedBrands, setCheckedBrands] = useState(false)
	const mappedBrands = filtersBrands
		.filter((f) => f.slug === 'brands')
		.map(f => f.items.map((f, index) => othersBrands
			? <div key={f.value} className={style.titleBrand}>
				<input type="checkbox" checked={f.main} id={f.title}
							 onChange={() => setCheckedBrands(!checkedBrands)}/>
				<label htmlFor={f.title}>{f.title}</label>
			</div>
			: (index < 5 && <div key={f.value} className={style.titleBrand}>
            <input type="checkbox" checked={f.main} id={f.title}
                   onChange={() => setCheckedBrands(!checkedBrands)}/>
            <label htmlFor={f.title}>{f.title}</label>
        </div>)))
	const isNew = filtersBrands.filter(f => f.title === 'Новинка').map(f => <div key={f.slug}>
		<input type={f.type}/><label htmlFor={f.title}>{f.title}</label></div>)
	const isPromo = filtersBrands.filter(f => f.title === 'Акция').map(f => <div key={f.slug}>
		<input type={f.type}/><label htmlFor={f.title}>{f.title}</label></div>)
	useEffect(() => {
		if (currentPage) {
			dispatch(fetchBrands(currentPage))
		}
	}, [dispatch, currentPage])
	if (appStatus === 'loading') {
		return <Preloader/>
	}
	return (
		<div>
			<h3 className={style.title}>Бренд</h3>
			{mappedBrands}
			<div>
				{othersBrands
					? <span><input type="checkbox"
												 id={'other'}
												 onChange={() => setOthersBrands(!othersBrands)}
					/>
												 <label htmlFor="other"> Другие</label>
				</span>
					: <span><input type="checkbox"
												 id={'other'}
												 onChange={() => setOthersBrands(!othersBrands)}
					/>
					<label htmlFor="other"> Другие</label>
					</span>
				}
			</div>
			<div className={style.isNew}>
				{isNew}
				{isPromo}
			</div>
		</div>
	)
}