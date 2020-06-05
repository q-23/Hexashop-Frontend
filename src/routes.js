import HomePage from "./views/HomePage";
import AllProducts from "./views/AllProducts";

export const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true
	},
	{
		path: '/all',
		component: AllProducts
	}
]