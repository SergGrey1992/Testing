import React from 'react';
import style from './App.module.css';
import {SettingProduct} from "./Components/SettingProduct/SettingProduct";
import {CardProduct} from "./Components/CardsProduct/CardProduct";

function App() {
	return (
		<div className={style.app}>
			<SettingProduct />
			<CardProduct/>
		</div>
	);
}

export default App;
