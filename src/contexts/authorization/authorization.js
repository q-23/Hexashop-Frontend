import React, {createContext, useReducer, useContext} from 'react';
import authorizationReducerBuilder from './reducers';

export const AuthorizationContext = createContext();

export const StateProviderAuthorization = ({ children }) => {
	const localStorageName = 'auth_token';
	const authorizationReducer = authorizationReducerBuilder(localStorageName);
	const init = () => {
		const auth = localStorage.getItem(localStorageName);
		console.log('user: ', auth);
		if (!auth || auth === 'undefined') return {};
		return JSON.parse(auth);
	};

	return (
		<AuthorizationContext.Provider
			value={useReducer(authorizationReducer, init())}
		>
			{children}
		</AuthorizationContext.Provider>
	);
};

export const useStateValueAuthorization = () =>
	useContext(AuthorizationContext);
