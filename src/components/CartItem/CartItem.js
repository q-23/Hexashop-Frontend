import React from "react";

import { Image, ItemDataHolder, ItemWrapper } from "components/CartItem/CartItem.style";
import FlexItem from "components/_Shared/FlexItem";
import Typography from "components/_Shared/Typography";
import QuantityInput from "components/QuantityInput";
import shopcartActions from "contexts/shopcart/actions";
import {useShopcart} from "contexts/shopcart/shopcart";
import Icon from "components/_Shared/Icon";
import { Link } from "react-router-dom";

import * as palette from 'assets/css_variables/colors';


const CartItem = ({name, price, id, image_thumbnail, lastItem}) => {
	const [shopcart, dispatch] = useShopcart()

	return(
		<ItemWrapper lastItem={lastItem}>
			<FlexItem xs={12} md={6} lg={3}>
				<Link to={`/product/${id}`}>
					<Image defaultSquare width={260} src={image_thumbnail}/>
				</Link>
			</FlexItem>
			<FlexItem xs={12} md={6} lg={9}>
				<ItemDataHolder>
					<FlexItem xs={12} justify={'center'} align={'center'}>
						<Link to={`/product/${id}`}>
							<Typography size={'2rem'}>{name}</Typography>
						</Link>
					</FlexItem>
					<FlexItem xs={12} justify={'center'} align={'center'}>
						<div>
							<QuantityInput
								onBlur={e => dispatch({ type: shopcartActions.SET_ITEM_QUANTITY, payload: { quantity: Number(e.target.value), product_id: id } })}
								onChange={e => dispatch({ type: shopcartActions.SET_ITEM_QUANTITY, payload: { quantity: e, product_id: id } })}
								value={shopcart.products[id]}
							/>
							<Icon
								onClick={() => dispatch({ type: shopcartActions.REMOVE_ITEM, payload: id })}
								color={palette.DARK_GRAY}
								className="fa fa-ban"
								size={'1.7em'}
								pointer
							/>
						</div>
					</FlexItem>
					<FlexItem xs={12} justify={'center'} align={'center'}>
						<Typography color={palette.LIGHT_GRAY}>{price * shopcart.products[id]} $</Typography>
					</FlexItem>
				</ItemDataHolder>
			</FlexItem>
		</ItemWrapper>
	);
};

export default CartItem;