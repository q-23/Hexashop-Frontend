import React from "react";

import { Link } from "react-router-dom";

import Typography from "../_Shared/Typography";
import Container from "../_Shared/Container";
import Component from "../_Shared/Component";
import FlexItem from "../_Shared/FlexItem";
import Button from "../_Shared/Button";
import Image from "../_Shared/Image";

import * as styles from './ProductPreview.styles'

const ProductPreview = ({ product = {}, width = 1 }) => {
	const { name, price, image_thumbnail, _id } = product;

	const PreviewWrapper = Component('div')`
		margin: 1.5em;
	`

	return (
		<FlexItem flex_width={width} xl={3} lg={4} sm={6} xs={12} styles={styles.FLEX_ITEM_STYLES}>
			<PreviewWrapper>
				<Link to={`/product/${_id}`} >
					<Image styles={styles.IMAGE_STYLES} src={image_thumbnail}/>
				</Link>
				<Container>
					<Link to={`/product/${_id}`} >
						<Typography styles={styles.PRODUCT_NAME_STYLES}>{name}</Typography>
					</Link>
					<Typography styles={styles.PRODUCT_PRICE_STYLES} color={'gray'}>{price}$</Typography>
					<Button with_gradient style={{bottom: 0}}>Add to cart</Button>
				</Container>
			</PreviewWrapper>
		</FlexItem>
	)
};

export default ProductPreview;