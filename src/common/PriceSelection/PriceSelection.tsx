import React from "react";
import style from "./PriceSelection.module.css"

type PriceSelectionPropsType = {
	min: number
	max: number
}

export const PriceSelection: React.FC<PriceSelectionPropsType> = ({min, max}) => {
	return (
		<div className={style.wrapperSpan}>
			<span>{min}</span>
			<span>{max}</span>

		</div>
	)
}