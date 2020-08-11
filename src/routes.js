import HomePageView from "./views/HomePageView";
import CategoryView from "./views/CategoryView";
import AllProductsView from "./views/AllProductsView";
import ProductView from "views/ProductView/ProductView";
import LoginView from "views/LoginView";
import AccountView from "views/AccountView";
import RegistrationSuccessView from "views/RegistrationSuccessView";
import EmailVerificationSuccessView from "views/EmailVerificationSuccessView/EmailVerificationSuccessView";
import CartView from "views/CartView";

export const routes = [
	{
		path: '/',
		component: HomePageView,
		exact: true
	},
	{
		path: '/category/:category_name/:page',
		component: CategoryView
	},
	{
		path: '/category/:category_name',
		component: CategoryView
	},
	{
		path: '/all_products/:page',
		component: AllProductsView
	},
	{
		path: '/all_products/',
		component: AllProductsView
	},
	{
		path: '/product/:id',
		component: ProductView
	},
	{
		path: '/login',
		component: LoginView
	},
	{
		path: '/account',
		component: AccountView
	},
	{
		path: '/register',
		component: AccountView
	},
	{
		path: '/registration_success',
		component: RegistrationSuccessView
	},
	{
		path: '/verify_email/:id',
		component: EmailVerificationSuccessView
	},
	{
		path: '/cart',
		component: CartView
	}
]