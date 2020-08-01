import React from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import CartItem from "components/CartItem/CartItem";
import FlexItem from "components/_Shared/FlexItem";
import StripeCheckout from "react-stripe-checkout";
import Button from "components/_Shared/Button";
import Typography from "components/_Shared/Typography";
import { Link } from "react-router-dom";

const CartProductsList = ({productData, shopcart, totalPrice, priceForStripe, onToken, auth}) => {

	return (
		<>
			<FlexContainer
				justify={'flex-start'}
				width={'unset'}
				wrap={'wrap'}
			>
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
				{auth.token ?
					(
						<>
							<StripeCheckout
								description={`your total is ${totalPrice}$`}
								image={'https://svgshare.com/i/CUz.svg'}
								stripeKey={process.env.REACT_APP_STRIPE_KEY}
								style={{display: 'none'}}
								amount={priceForStripe}
								name={'Hexashop Ltd.'}
								panelLabel={'Pay Now'}
								label={"Pay Now"}
								token={onToken}
								shippingAddress
								billingAddress
							>
								<Button with_gradient type={'button'}>Pay now {totalPrice}$</Button>
							</StripeCheckout>
							<br/>
							<Typography color={'red'}>Use the following card info: 4242 4242 4242 4242 EXP: 11/22 CVV: 123</Typography>
						</>
					) :
					(
						<>
							<Link to={'/register'}>
								<Button with_gradient type={'button'}>Register to complete your purchase</Button>
							</Link>
						</>
					)
				}
			</FlexItem>
		</>
	)
};

export default CartProductsList;