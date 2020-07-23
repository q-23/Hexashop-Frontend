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
			delete state.products[payload];
			return state;
		}
		case shopcartActions.CALCULATE_TOTAL_QUANTITY: {
			const { products } = state;
			const productsCount = Object.values(products).reduce((acc, val) => {
				return acc + val
			}, 0)
			return { ...state, productsCount }
		}
		default:
			return state;
	}
};

export default shopcartReducers;
