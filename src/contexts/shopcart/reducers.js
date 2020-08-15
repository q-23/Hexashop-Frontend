import shopcartActions from './actions';

const shopcartReducers = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case shopcartActions.ADD_ITEM_TO_CART: {
			const { product_id, quantity } = payload;
			if(!state.products[product_id]) {
				return { ...state, products: { ...state.products, [product_id]: quantity } }
			}
			return { ...state, products: { ...state.products, [product_id]: state.products[product_id] + quantity } }
		}
		case shopcartActions.SET_ITEM_QUANTITY: {
			const { product_id, quantity } = payload;
			return { ...state, products: { ...state.products, [product_id]: quantity } }
		}
		case shopcartActions.REMOVE_ITEM: {
			const stateFiltered = Object.entries(state.products).filter(el => el[0] !== payload);
			return { ...state, products: Object.fromEntries(stateFiltered) };
		}
		case shopcartActions.CLEAR_CART: {
			return { products: { }, productsCount: 0 }
		}
		case shopcartActions.CALCULATE_TOTAL_QUANTITY: {
			const { products } = state;
			const productsCount = products && Object.values(products).reduce((acc, val) => {
				return acc + val
			}, 0)
			return { ...state, productsCount }
		}
		default:
			return state;
	}
};

export default shopcartReducers;
