import paginationActions from './actions';

const paginationReducers = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case paginationActions.INIT: {
			return {
				skip: 0,
				limit: 10,
				numberOfPages: 1,
				numberOfItems: 0,
				currentPage: 1
			}
		}
		case paginationActions.SET_ITEMS_COUNT: {
			const itemsCount = payload;
			const { limit } = state;
			return { ...state, numberOfPages: Math.ceil(itemsCount/limit) };
		}
		case paginationActions.NEXT_PAGE: {
			if(state.currentPage < state.numberOfPages) {
				return { ...state, currentPage: state.currentPage + 1 };
			}
			return state;
		}
		case paginationActions.PREVIOUS_PAGE: {
			if(state.currentPage > 1) {
				return { ...state, currentPage: state.currentPage - 1 };
			}
			return state;
		}
		case paginationActions.SELECT_PAGE: {
			return { ...state, currentPage: payload };
		}
		case paginationActions.SET_SKIP_PAGES: {
			return { ...state, skip: state.currentPage * state.limit - state.limit };
		}
		default:
			return state;
	}
};

export default paginationReducers;
