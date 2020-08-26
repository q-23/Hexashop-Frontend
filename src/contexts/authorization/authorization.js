import React, {createContext, useReducer, useContext} from 'react';
import authorizationReducerBuilder from './reducers';
import {get} from "helperFunctions/fetchFunctions";

export const AuthorizationContext = createContext();

export const StateProviderAuthorization = ({ children }) => {
	const localStorageName = 'auth_token';
	const authorizationReducer = authorizationReducerBuilder(localStorageName);
	const init = async () => {
		const auth = localStorage.getItem(localStorageName);
		try {
			const response = await get({url: '/user/me', auth: auth.token});
			if(response.status === 401) {
				return {}
			}
		} catch (e) {
			console.log('auth error:', e)
		}
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
