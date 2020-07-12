import React, {createContext, useReducer, useContext, useEffect} from 'react';
import paginationReducer from './reducers';
import paginationActions from './actions';
export const PaginationContext = createContext();

export const StateProviderPagination = ({ children }) => {
	const paginationReducerInitialized = useReducer(paginationReducer, {
		skip: 0,
		limit: 10,
		numberOfPages: 1,
		numberOfItems: 0,
		currentPage: 1
	});

	const [pagination, dispatch] = paginationReducerInitialized;

	useEffect(() => {
		dispatch({ type: paginationActions.SET_SKIP_PAGES })
	}, [pagination.currentPage]);

	return (
		<PaginationContext.Provider
			value={paginationReducerInitialized}
		>
			{children}
		</PaginationContext.Provider>
	);
};

export const useStateValuePagination = () =>
	useContext(PaginationContext);
