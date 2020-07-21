import React, {useEffect, useState} from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import CartItem from "components/CartItem/CartItem";

import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { FormFullWidth } from "components/_Shared/Form";

import { useShopcart } from "contexts/shopcart/shopcart";
import shopcartActions from "contexts/shopcart/actions";
import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import BoxName from "components/_Shared/BoxName";

const CartView = () => {
	const [productData, setProductData] = useState([]);
	const [shopcart, dispatch] = useShopcart()

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
					<FlexContainer justify={'flex-start'} wrap={'wrap'} padding={'1em'}>
						{productData.products &&
							productData.products.map(({image_thumbnail, _id, price}) =>
								<CartItem key={_id} price={price} image_thumbnail={image_thumbnail.link} id={_id}/>
							)
						}
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(CartView);