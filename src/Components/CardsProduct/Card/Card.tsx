import React from 'react';
import style from "../CardProduct.module.css";
import nullPhoto from "../../../assect/user_Photo.jpg";
import w from "../../../assect/default (Stroke).svg";
import {responseProductsType} from "../../../api/api";

type CardPropsType = {
	products: responseProductsType
	isNew: boolean
}
export const Card: React.FC<CardPropsType> = ({products, isNew}) => {
	return (
			<li className={style.blockCard}>
				<div className={style.bl}>
					<a className={style.link} href=""/>
					{isNew &&
          <div className={style.new}>
              <div className={style.newT}>Новинка</div>
          </div>}
					<img className={style.image} src={products.image !== null ? products.image.desktop.x1 : nullPhoto} alt="#"/>
					<div className={style.infoPriceBlock}>
						<h4 className={style.title}>{products.title}</h4>
						<div className={style.price}>{products.price + "₽"}</div>
						<div className={style.footerCard}>
							<button className={style.but}>В корзину</button>
							<img src={w} alt=""/>
						</div>
					</div>
				</div>
			</li>
	);
};
