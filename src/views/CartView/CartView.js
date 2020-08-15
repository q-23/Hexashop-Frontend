import React, {useEffect, useState} from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import CartProductsList from "components/CartProductsList";
import FormFullWidth from "components/_Shared/Form";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import Pagination from "components/Pagination";
import Loader from "components/Loader/Loader";

import CART_EMPTY_IMAGE from 'assets/images/shopcart_empty.jpg';
import { CartEmptyImage } from "views/CartView/CartView.style";

import { useStateValueAuthorization } from "contexts/authorization/authorization";
import { useShopcart } from "contexts/shopcart/shopcart";
import { post } from "helperFunctions/fetchFunctions";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Form } from 'react-final-form';
import { toast } from 'react-toastify';

import shopcartActions from "contexts/shopcart/actions";

const CartView = () => {
	const [productData, setProductData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [auth] = useStateValueAuthorization();
	const [shopcart, dispatch] = useShopcart();
	const history = useHistory();

	async function fetchData() {
		try {
			setIsLoading(true)
			if(shopcart.products && !Object.keys(shopcart.products).length) {
				setIsLoading(false)
				return setProductData([])
			}
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product/cart_items/${Object.keys(shopcart.products).join(':')}`, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			setIsLoading(false)
			setProductData(result)
		} catch (e) {
			console.log(e)
			setIsLoading(false)
		}
	};

	const calculateTotalPrice = ({ productsCountObj = {}, productsPricesArr = [] }) => {
		const totalPrice = productsPricesArr.reduce((total, val) => {
			const quantity = productsCountObj[val._id];
			return total += quantity * val.price;
		}, 0)
		return totalPrice;
	}

	const totalPrice = calculateTotalPrice({ productsCountObj: shopcart.products, productsPricesArr: productData.products });

	const priceForStripe = totalPrice * 100;

	const onToken = async (token) => {
		setIsLoading(true)
		try {
			const res = await post({
				url: '/purchase',
				auth: auth.token,
				body: JSON.stringify({token: token, products: shopcart.products})
			});
			const responseMessage = await res.json();
			if (res.status === 200) {
				setIsLoading(false);
				toast.success(responseMessage.message, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				history.push('/all_products');
				dispatch({type: shopcartActions.CLEAR_CART});
			}
			if (res.status - 400 < 100) {
				setIsLoading(false);
				toast.error(responseMessage.error, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	//	eslint-disable-next-line
	}, [Object.keys(shopcart.products).join(',')])

	return(
		<Form
			onSubmit={e => dispatch({ type: shopcartActions.ADD_ITEM_TO_CART, payload: e })}
			initialValues={shopcart}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					{console.log(isLoading)}
					<BoxHeaderContainer>
						<BoxName>{shopcart.productsCount === 0 ? 'Your cart is empty...' : 'Your cart items'}</BoxName>
					</BoxHeaderContainer>
						{shopcart.productsCount === 0 ? (
							<FlexContainer justify={'center'}>
								<FlexItem>
									<Link to={'/all_products'}>
										<CartEmptyImage src={CART_EMPTY_IMAGE}/>
									</Link>
								</FlexItem>
							</FlexContainer>
						) : (
							<CartProductsList
								priceForStripe={priceForStripe}
								productData={productData}
								totalPrice={totalPrice}
								shopcart={shopcart}
								onToken={onToken}
								auth={auth}
							/>
						)}
					<Pagination/>
					<Loader isLoading={isLoading}/>
				</FormFullWidth>
			)}
		/>
	)
};

export default CartView;