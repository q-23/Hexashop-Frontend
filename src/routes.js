import HomePage from "./views/HomePage";
import CategoryView from "./views/CategoryView";
import AllProducts from "./views/AllProducts";

export const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true,
		showInMenu: false
	},
	{
		path: '/category/:category_name',
		component: CategoryView,
		showInMenu: true
	},
	{
		path: '/all_products',
		component: AllProducts,
		showInMenu: true
	}
]