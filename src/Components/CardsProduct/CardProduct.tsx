import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseProductsType} from "../../api/api";
import style from "./CardProduct.module.css"
import {Paginator} from "../../common/Paginator/Paginator";
import {setCurrentPage} from '../../Redux/Brands_reducer';
import {Card} from './Card/Card';

export const CardProduct = () => {
	const products = useSelector<RootStoreType, Array<responseProductsType>>(state => state.cardReducer.products)
	const current_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)
	const per_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.per_page)
	const totalCount = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.total)
	const dispatch = useDispatch();

	const setPageNumber = useCallback((current_page: number) => {
			dispatch(setCurrentPage(current_page))
	}, [dispatch])
	return (
		<div>
			<ul className={style.blockCards}>
				{ products.map( (products) => <Card key={products.id} products={products} isNew={products.is_new}/> ) }
			</ul>
			<br/>
			<Paginator currentPage={current_page}
								 pageSize={per_page}
								 portionSize={10}
								 totalCount={totalCount}
								 onPageChanged={()=>{}}
								 setCurrentPage={setPageNumber}
			/>
		</div>

	);
};
