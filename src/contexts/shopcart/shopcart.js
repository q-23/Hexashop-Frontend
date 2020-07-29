import React, {createContext, useReducer, useContext, useEffect} from 'react';
import shopcartReducers from './reducers';
import shopcartActions from './actions';
export const ShopcartContext = createContext();

export const StateProviderShopcart = ({ children }) => {
	const localStorageName = 'shopcart';
	const init = () => {
		const shopcart = localStorage.getItem(localStorageName);
		if (!shopcart || shopcart === 'undefined') return {
			productsCount: 0,
			products: {}
		};
		return JSON.parse(shopcart);
	};

	const shopcardReducerInitialized = useReducer(shopcartReducers, init());

	const [shopcart, dispatch] = shopcardReducerInitialized;

	window.onbeforeunload = function() {
		localStorage.setItem(localStorageName, JSON.stringify(shopcart));
	};

	useEffect(() => {
		dispatch({ type: shopcartActions.CALCULATE_TOTAL_QUANTITY });
	}, [shopcart.products]);

	return (
		<ShopcartContext.Provider
			value={shopcardReducerInitialized}
		>
			{children}
		</ShopcartContext.Provider>
	);
};

export const useShopcart = () =>
	useContext(ShopcartContext);
