import React, {useEffect, useState} from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import BoxName from "components/_Shared/BoxName";
import FlexItem from "components/_Shared/FlexItem";

import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { CartEmptyImage } from "views/CartView/CartView.style";
import CART_EMPTY_IMAGE from 'assets/images/shopcart_empty.jpg';

import { useShopcart } from "contexts/shopcart/shopcart";
import shopcartActions from "contexts/shopcart/actions";
import Pagination from "components/Pagination";
import {post} from "helperFunctions/fetchFunctions";
import {useStateValueAuthorization} from "contexts/authorization/authorization";
import { Link } from "react-router-dom";
import CartProductsList from "components/CartProductsList";

import { toast } from 'react-toastify';

const CartView = ({ history }) => {
	const [productData, setProductData] = useState({});
	const [shopcart, dispatch] = useShopcart();
	const [auth] = useStateValueAuthorization();

	async function fetchData() {
		try {
			if(shopcart.products && !Object.keys(shopcart.products).length) {
				return setProductData([])
			}
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product/cart_items/${Object.keys(shopcart.products).join(':')}`, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			setProductData(result)
		} catch (e) {
			console.log(e)
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
		const res = await post({ url: '/purchase', auth: auth.token, body: JSON.stringify({token: token, products: shopcart.products})});
		const responseMessage = await res.json();
		if (res.status === 200) {
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
			dispatch({ type: shopcartActions.CLEAR_CART });
		}
		if(res.status - 400 < 100) {
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
	}

	useEffect(() => {
		fetchData();
	}, [Object.keys(shopcart.products).join(',')])

	return(
		<Form
			onSubmit={e => dispatch({ type: shopcartActions.ADD_ITEM_TO_CART, payload: e })}
			initialValues={shopcart}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
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
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(CartView);