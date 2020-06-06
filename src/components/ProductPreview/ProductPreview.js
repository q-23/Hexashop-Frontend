import React from "react";

import FlexItem from "../_Shared/FlexItem";
import Typography from "../_Shared/Typography";
import Image from "../_Shared/Image";
import Container from "../_Shared/Container";
import Button from "../_Shared/Button";
import * as styles from './ProductPreview.styles'
import { Link } from "react-router-dom";

const ProductPreview = ({ product = {}, width = 1 }) => {
	const { name, price, image_thumbnail, _id } = product;

	return (
		<FlexItem flex_width={width} styles={styles.FLEX_ITEM_STYLES}>
			<Image styles={styles.IMAGE_STYLES} src={image_thumbnail}/>
			<Container>
				<Typography styles={styles.PRODUCT_NAME_STYLES}>{name}</Typography>
				<Typography styles={styles.PRODUCT_PRICE_STYLES} color={'gray'}>{price}$</Typography>
				<Link to={`/product/${_id}`} >
					<Button with_gradient>Add to cart</Button>
				</Link>
			</Container>
		</FlexItem>
	)
};

export default ProductPreview;