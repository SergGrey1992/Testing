import React from 'react';
import style from './App.module.css';
import {TotalProduct} from "./Components/Total_product/Total_product";
import {CardProduct} from "./Components/CardProduct/CardProduct";

function App() {
	return (
		<div className={style.app}>
			<TotalProduct/>
			<CardProduct/>
		</div>
	);
}

export default App;
