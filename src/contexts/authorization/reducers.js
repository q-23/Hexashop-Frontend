import authorizationActions from "contexts/authorization/actions";

const reducers = localStorageName => (state, action) => {
	switch (action.type) {
		case authorizationActions.INIT: {
			return state;
		}
		case authorizationActions.LOGIN: {
			const token = action.payload;
			localStorage.setItem(localStorageName, JSON.stringify(token));

			return token;
		}
		case authorizationActions.LOGOUT: {
			localStorage.removeItem(localStorageName);
			return '';
		}
		default:
			return state;
	}
};

export default reducers;
