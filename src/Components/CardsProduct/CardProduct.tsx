import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../Redux/store";
import {responseProductsType} from "../../api/api";
import {Paginator} from "../../common/Paginator/Paginator";
import {setCurrentPage} from '../../Redux/Brands_reducer';
import {Card} from './Card/Card';
import styled from "styled-components";

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 24px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(0, minmax(0px, 1fr));
		gap: 0;
  }
`


export const CardProduct = () => {
	const products = useSelector<RootStoreType, Array<responseProductsType>>(state => state.cardReducer.products)
	const currentPage = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.current_page)
	const perPage = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.per_page)
	const totalCount = useSelector<RootStoreType, number>(state => state.brandsReducer.data.meta.total)
	const dispatch = useDispatch();

	const setPageNumber = useCallback((currentPage: number) => {
			dispatch(setCurrentPage(currentPage))
	}, [dispatch])
	return (
		<div>
			<Ul>
				{ products.map( (products) => <Card key={products.id} products={products} isNew={products.is_new}/> ) }
			</Ul>
			<br/>
			<Paginator currentPage={currentPage}
								 pageSize={perPage}
								 portionSize={10}
								 totalCount={totalCount}
								 onPageChanged={()=>{}}
								 setCurrentPage={setPageNumber}
			/>
		</div>

	);
};
