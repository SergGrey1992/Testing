import React from 'react';
import nullPhoto from "../../../assect/user_Photo.jpg";
import w from "../../../assect/default (Stroke).svg";
import {responseProductsType} from "../../../api/api";
import styled from 'styled-components';

type CardPropsType = {
	products: responseProductsType
	isNew: boolean
}
const Li = styled.li`
  position: relative;
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    border: none;
    border-radius: 0;
    display: grid;
    grid-template-columns: 2fr 4fr;
    align-self: center;
    justify-self: center;
    align-content: center;
		gap: 0;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: calc(-40px);
      display: block;
      width: calc(100% + 80px);
      height: 1px;
      background: rgb(230, 230, 230);
    }
  ;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: calc(-40px);
      display: block;
      width: calc(100% + 80px);
      height: 1px;
      background: rgb(230, 230, 230);
    }
  ,
  }
`;

const NewTitle = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  width: max-content;
  padding: 6px 10px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 26px;
  background: #44C377;
  color: rgb(255, 255, 255);
  @media only screen and (max-width: 768px) {
    top: 16px;
    left: 0;
	}
		
`;
const ImageProduct = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
	}
`;
const DivInfoPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #E6E6E6;
  padding: 12px 16px 16px;
  border-radius: 0 0 4px 4px;
  border-top: none;

  @media only screen and (max-width: 800px),(max-width : 768px),(max-width : 600px) {
    padding: 16px;
		border: none;
  }
`
const H4Title = styled.h4`
  width: 100%;
  margin-bottom: 30px;
  font-weight: 500;
  color: #1B1B1B;
`
const DivPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  padding-right: 12px;
  margin-right: auto
`
const DivFooterCard = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, max-content) 32px;
  gap: 10px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding-top: 18px;
  @media only screen and (max-width: 1400px) {
    display: flex;
  }
  @media only screen and (max-width: 1366px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 800px),(max-width : 768px),(max-width : 600px){
    display: grid;
    grid-template-columns: minmax(0px, max-content) 32px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 18px;
  }
`
const Button = styled.button`
  width: 106px;
  height: 40px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #1B1B1B;
`
export const Card: React.FC<CardPropsType> = ({products, isNew}) => {
	return (
		<Li>
			<ImageProduct src={products.image ? products.image.desktop.x1 : nullPhoto} alt={'product'}/>
			{isNew && <NewTitle>Новинка</NewTitle>}
			<DivInfoPriceBlock>
				<H4Title>{products.title}</H4Title>
				<DivPrice>{products.price + "₽"}</DivPrice>
				<DivFooterCard>
					<Button>В корзину</Button>
					<img src={w} alt=""/>
				</DivFooterCard>
			</DivInfoPriceBlock>
		</Li>
	);
};
