import EmailVerificationSuccessView from "views/EmailVerificationSuccessView/EmailVerificationSuccessView";
import PasswordResetView from "views/PasswordResetView/PasswordResetView";
import RegistrationSuccessView from "views/RegistrationSuccessView";
import ProductView from "views/ProductView/ProductView";
import AllProductsView from "./views/AllProductsView";
import HomePageView from "./views/HomePageView";
import CategoryView from "./views/CategoryView";
import AllBrandsView from "views/AllBrandsView";
import AccountView from "views/AccountView";
import LoginView from "views/LoginView";
import BrandView from "views/BrandView";
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
		path: '/reset_password/:token',
		component: PasswordResetView
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
		path: '/brands/:page',
		component: AllBrandsView
	},
	{
		path: '/brands/',
		component: AllBrandsView
	},
	{
		path: '/brand/:brand_name/:page',
		component: BrandView
	},
	{
		path: '/brand/:brand_name/',
		component: BrandView
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