import React from "react";
import styled from "styled-components";

type PriceSelectionPropsType = {
	min: number
	max: number
}
const PriceSelectionWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    border: 1px solid #DBDBDB;
    width: 220px;
	`;
const Span = styled.span`
    display: flex;
    align-items: center;
    padding: 12px;
    width: 112px;
    height: 42px;
    color: #1B1B1B;
    font-weight: 600;
    font-size: 14px;
		&:first-child {
      border-right: 1px solid #DBDBDB
    }
	`
export const PriceSelection: React.FC<PriceSelectionPropsType> = ({min, max}) => {

	return (
		<PriceSelectionWrapper>
			<Span>{min}</Span>
			<Span>{max}</Span>
		</PriceSelectionWrapper>
	)
}