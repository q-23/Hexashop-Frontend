import React, {useEffect, useState} from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import CartItem from "components/CartItem/CartItem";
import BoxName from "components/_Shared/BoxName";
import FlexItem from "components/_Shared/FlexItem";
import Typography from "components/_Shared/Typography";

import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';

import { useShopcart } from "contexts/shopcart/shopcart";
import shopcartActions from "contexts/shopcart/actions";
import Pagination from "components/Pagination";
import Button from "components/_Shared/Button";

const CartView = () => {
	const [productData, setProductData] = useState({});
	const [shopcart, dispatch] = useShopcart();

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
			const result = await res.json()
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

	useEffect(() => {
		fetchData();
	}, [shopcart.products])

	return(
		<Form
			onSubmit={e => dispatch({ type: shopcartActions.ADD_ITEM_TO_CART, payload: e })}
			initialValues={shopcart}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<BoxHeaderContainer>
						<BoxName>Your cart items</BoxName>
					</BoxHeaderContainer>
					<FlexContainer
						justify={'flex-start'}
						width={'unset'}
						wrap={'wrap'}
					>
						{console.log(productData.products && productData.products
							.filter(el => Object.keys(shopcart.products).includes(el._id)))}
						{productData.products &&
							productData.products
								.filter(el => Object.keys(shopcart.products).includes(el._id))
								.map(({image_thumbnail, _id, price, name}, idx) =>
								<CartItem
									lastItem={idx === productData.products.length - 1}
									image_thumbnail={image_thumbnail.link}
									price={price}
									name={name}
									key={_id}
									id={_id}
								/>
							)
						}
					</FlexContainer>
					<FlexItem align={'center'} padding={'1em 0'}>
						<Typography>Total price: {calculateTotalPrice({ productsCountObj: shopcart.products, productsPricesArr: productData.products })}$</Typography>
						<Button with_gradient>Proceed to checkout</Button>
					</FlexItem>
					<Pagination/>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(CartView);