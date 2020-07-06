const reducers = localStorageName => (state, action) => {
	switch (action.type) {
		case 'init': {
			return state;
		}
		case 'login': {
			const token = action.payload;
			localStorage.setItem(localStorageName, JSON.stringify(token));

			return token;
		}
		case 'logout': {
			localStorage.removeItem(localStorageName);
			return '';
		}
		default:
			return state;
	}
};

export default reducers;
