import React from "react";
import style from "./PriceSelection.module.css"

type PriceSelectionPropsType = {
	min: number
	max: number
	onChange: (event: any, newValue: number | number[]) => void
}

export const PriceSelection: React.FC<PriceSelectionPropsType> = ({min, max}) => {
	return (
		<div className={style.wrapperInput}>
			<input type="number" value={min} onChange={() => {}}/>
			<input type="number" value={max}  onChange={() => {}}/>
		</div>
	)
}