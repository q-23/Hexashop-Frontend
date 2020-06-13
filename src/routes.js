import HomePage from "./views/HomePage";
import CategoryView from "./views/CategoryView";
import AllProducts from "./views/AllProducts";
import ProductView from "views/ProductView/ProductView";

export const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true
	},
	{
		path: '/category/:category_name',
		component: CategoryView
	},
	{
		path: '/all_products',
		component: AllProducts
	},
	{
		path: '/product/:id',
		component: ProductView
	}
]