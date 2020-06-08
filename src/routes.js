import HomePage from "./views/HomePage";
import AllProducts from "./views/AllProducts";

export const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true,
		showInMenu: false
	},
	{
		path: '/all',
		component: AllProducts,
		showInMenu: true
	}
]