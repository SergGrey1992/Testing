import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseProductsType} from "../../api/api";
import {getCard} from "../../Redux/card_reducer";
import nullPhoto from "../../assect/user_Photo.jpg";
import w from "../../assect/default (Stroke).svg"
import style from "./CardProduct.module.css"
import {Paginator} from "../../common/Paginator/Paginator";
import {setCurrentPage} from '../../Redux/Brands_reducer';

export const CardProduct = () => {
	const products = useSelector<RootStoreType, Array<responseProductsType>>(state => state.cardReducer.products)
	const current_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)
	const per_page = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.per_page)
	const totalCount = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.total)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCard(current_page))
	}, [dispatch, current_page])

	const setPageNumber = useCallback((current_page: number) => {
			dispatch(setCurrentPage(current_page))
	}, [dispatch, current_page])

	const mappedProduct = products.map(p => <li key={p.id} className={style.blockCard}>
		<div className={style.bl}>
			<a className={style.link} href="#"/>
			<div className={style.new}>
				<div className={style.newT}>Новинка</div>
			</div>
				<img className={style.image} src={p.image !== null ? p.image.desktop.x1 : nullPhoto} alt="#"/>
			<div className={style.infoPriceBlock}>
				<h4 className={style.title}>{p.title}</h4>
				<div className={style.price}>{p.price + "₽"}</div>
				<div>123</div>
				<div className={style.footerCard}>
					<button className={style.but}>В корзину</button>
					<img src={w} alt=""/>
				</div>
			</div>

		</div>
	</li>)

	return (
		<div>
			<ul className={style.blockCards}>
				{mappedProduct}
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
