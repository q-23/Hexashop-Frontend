import React from "react";

import { Image } from "components/CartItem/CartItem.style";
import FlexItem from "components/_Shared/FlexItem";
import Typography from "components/_Shared/Typography";
import QuantityInput from "components/QuantityInput";
import shopcartActions from "contexts/shopcart/actions";
import {useShopcart} from "contexts/shopcart/shopcart";
import Button from "components/_Shared/Button";

const CartItem = ({name, price, id, image_thumbnail}) => {
	const [shopcart, dispatch] = useShopcart()

	return(
		<>
			<FlexItem xs={12} md={6} lg={3}>
				{console.log(shopcart)}
				<Image defaultSquare width={260} src={image_thumbnail}/>
			</FlexItem>
			<FlexItem xs={12} md={6} lg={9}>
				<Typography>{name}</Typography>
					<QuantityInput
						value={shopcart.products[id]}
						onBlur={e => dispatch({ type: shopcartActions.SET_ITEM_QUANTITY, payload: { quantity: Number(e.target.value), product_id: id } })}
						onChange={e => dispatch({ type: shopcartActions.SET_ITEM_QUANTITY, payload: { quantity: e, product_id: id } })}
					/>
					<Button onClick={() => dispatch({ type: shopcartActions.REMOVE_ITEM, payload: id })}>XX</Button>
			</FlexItem>
		</>
	);
};

export default CartItem;