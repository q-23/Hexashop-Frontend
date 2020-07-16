import React, {createContext, useReducer, useContext, useEffect} from 'react';
import shopcartReducers from './reducers';
import shopcartActions from './actions';
export const ShopcartContext = createContext();

export const StateProviderShopcart = ({ children }) => {
	const shopcardReducerInitialized = useReducer(shopcartReducers, {
		productsCount: 0,
		products: {}
	});

	const [shopcart, dispatch] = shopcardReducerInitialized;

	useEffect(() => {
		dispatch({ type: shopcartActions.CALCULATE_TOTAL_QUANTITY })
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
