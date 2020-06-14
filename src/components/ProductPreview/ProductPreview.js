import React from "react";

import { Link } from "react-router-dom";

import { PreviewWrapper } from "./ProductPreview.styles";
import Typography from "components/_Shared/Typography";
import Container from "components/_Shared/Container";
import FlexItem from "components/_Shared/FlexItem";
import Button from "components/_Shared/Button";
import Image from "components/_Shared/Image";

import * as styles from './ProductPreview.styles'

const ProductPreview = ({ product = {}, width = 1 }) => {
	const { name, price, image_thumbnail, _id } = product;

	return (
		<FlexItem flex_width={width} xl={3} lg={4} sm={6} xs={12} styles={styles.FLEX_ITEM_STYLES}>
			<PreviewWrapper>
				<Link to={`/product/${_id}`} >
					<Image styles={styles.IMAGE_STYLES} src={image_thumbnail && image_thumbnail.link}/>
				</Link>
				<Container styles={'height: 100%'}>
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