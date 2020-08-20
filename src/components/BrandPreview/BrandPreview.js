import React from "react";

import { Link } from "react-router-dom";

import { PreviewWrapper, Image } from "components/BrandPreview/BrandPreview.styles";
import Typography from "components/_Shared/Typography";
import Container from "components/_Shared/Container";
import FlexItem from "components/_Shared/FlexItem";

import * as styles from 'components/BrandPreview/BrandPreview.styles'

const BrandPreview = ({ brand = {}, width = 1 }) => {
	const { brand_name, brand_path, brand_image_link } = brand;

	return (
		<FlexItem flex_width={width} xl={3} lg={4} sm={6} xs={12} styles={styles.FLEX_ITEM_STYLES}>
			<PreviewWrapper>
				<Link to={`/brand${brand_path}`} >
					<Image styles={styles.IMAGE_STYLES} src={brand_image_link && brand_image_link}/>
				</Link>
				<Container styles={'height: 100%'}>
					<Link to={`/brand${brand_path}`} >
						<Typography styles={styles.PRODUCT_NAME_STYLES}>{brand_name}</Typography>
					</Link>
				</Container>
			</PreviewWrapper>
		</FlexItem>
	)
};

export default BrandPreview;