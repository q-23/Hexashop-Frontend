import React from "react";

import { Link } from "react-router-dom";

import { PreviewWrapper, PreviewContainer } from "./ProductPreview.styles";
import Typography from "components/_Shared/Typography";
import FlexItem from "components/_Shared/FlexItem";
import Button from "components/_Shared/Button";
import Image from "components/_Shared/Image";

import { useShopcart } from "contexts/shopcart/shopcart";
import shopcartActions from "contexts/shopcart/actions";

import * as styles from './ProductPreview.styles'

const ProductPreview = ({ product = {}, width = 1 }) => {
	const { name, price, image_thumbnail, _id } = product;
	const [,dispatch] = useShopcart()

	return (
		<FlexItem flex_width={width} xl={3} lg={4} sm={6} xs={12} styles={styles.FLEX_ITEM_STYLES}>
			<PreviewWrapper>
				<Link to={`/product/${_id}`} >
					<Image styles={styles.IMAGE_STYLES} src={image_thumbnail && image_thumbnail.link}/>
				</Link>
				<PreviewContainer>
					<Link to={`/product/${_id}`} >
						<Typography styles={styles.PRODUCT_NAME_STYLES}>{name}</Typography>
					</Link>
					<div>
						<Typography styles={styles.PRODUCT_PRICE_STYLES} color={'gray'}>{price.toFixed(2)}$</Typography>
						<Button
							with_gradient
							style={{bottom: 0}}
							onClick={() => dispatch({ type: shopcartActions.ADD_ITEM_TO_CART, payload: { product_id: _id, quantity: 1 } })}
						>
							Add to cart
						</Button>
					</div>
				</PreviewContainer>
			</PreviewWrapper>
		</FlexItem>
	)
};

export default ProductPreview;