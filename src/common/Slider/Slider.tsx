import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {withStyles} from "@material-ui/core";


type RangeSliderPropsType = {
	value: number[]
	min: number
	max: number
	onChange: (event: any, newValue: number | number[]) => void
	onDrop: () => void
}
const useStyles = makeStyles({
	root: {
		width: 220,
		thumbColorPrimary: "red"
	},
});

const GlobalCss = withStyles({
	'@global': {
		'.MuiSlider-thumbColorPrimary': {
			background: '#FFFFFF',
			border: '4px solid #1B1B1B'
		},
		'.MuiSlider-track': {
			color: '#FF681C'
		}
	},
})(() => null);

export const RangeSlider: React.FC<RangeSliderPropsType> = ({value, onChange, min, max, onDrop}) => {

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<GlobalCss/>
			<Slider
				onMouseUp={onDrop}
				value={value}
				min={min}
				max={max}
				step={100}
				onChange={onChange}
				aria-labelledby="range-slider"
			/>
		</div>
	);
}